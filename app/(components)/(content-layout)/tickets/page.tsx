"use client"
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Status, Priority, tags } from "@/shared/data/tickets/tickets-data";
import Seo from "@/shared/layouts-components/seo/seo";
import { supabase } from "@/shared/lib/supabase";
import { useTenantContext } from "@/shared/contextapi/TenantContext";
import { useDateRangeContext } from "@/shared/contextapi/DateRangeContext";
import { useUserContext } from "@/shared/contextapi/UserContext";
import { convertUserTimezoneToUTC } from "@/shared/lib/timezone";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useEffect, useCallback, useMemo } from "react";
import { Card, Col, Dropdown, Form, Modal, Row, Button, Spinner, Pagination, InputGroup } from "react-bootstrap";

// Supabase tickets table interface
interface SupabaseTicket {
    id: number;
    title: string;
    status: string;
    priority: 'Low' | 'Medium' | 'High';
    severity?: 'Critical' | 'High' | 'Medium' | 'Low';
    tenant_id: string;
    source_id?: string | null;
    status_color?: string;
    priority_color?: string;
    closure_category?: string;
    closure_reason?: string;
    created_at?: string;
    updated_at?: string;
    occurred_at?: string;
    [key: string]: any; // Allow for additional fields
}

// Format a UTC datetime string to user's timezone for display
const formatUtcToUserTimezone = (value?: string | null, timezone: string = 'UTC'): string => {
    if (!value) return '-';
    try {
        let normalized = value;
        // Handle "YYYY-MM-DD HH:mm:ss" by converting to ISO-like and marking as UTC
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(value)) {
            normalized = value.replace(' ', 'T') + 'Z';
        } else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(value)) {
            // Bare ISO without timezone - treat as UTC
            normalized = value + 'Z';
        }
        const date = new Date(normalized);
        if (isNaN(date.getTime())) {
            return value;
        }
        // Use user's timezone for display
        return date.toLocaleString('en-US', { timeZone: timezone, hour12: false }).replace(/\b(am|pm)\b/gi, (m) => m.toUpperCase());
    } catch {
        return value;
    }
};

// Column configuration interface
interface ColumnConfig {
    key: string;
    title: string;
    visible: boolean;
    order: number;
}

interface TicketsListProps { }

// Search query parser interface
interface SearchCondition {
    field: string;
    operator: 'eq' | 'neq' | 'ilike' | 'not.ilike';
    value: string;
}

interface ParsedSearchQuery {
    conditions: SearchCondition[];
    logicalOperators: string[];
    invalidFields: string[];
}

// Search query parser function
const parseSearchQuery = (query: string, allowedFields: string[]): ParsedSearchQuery => {
    const conditions: SearchCondition[] = [];
    const invalidFields: string[] = [];
    
    if (!query.trim()) {
        return { conditions, logicalOperators: [], invalidFields };
    }
    
    // Create a set of allowed fields in lowercase for case-insensitive comparison
    const allowedFieldsSet = new Set(allowedFields.map(f => f.toLowerCase()));
    
    // First, split by logical operators while preserving them
    const logicalSplit = query.split(/\s+(AND|OR)\s+/i);
    const logicalOperators: string[] = [];
    
    // Extract logical operators
    for (let i = 1; i < logicalSplit.length; i += 2) {
        logicalOperators.push(logicalSplit[i].toUpperCase());
    }
    
    // Process each part
    const parts = logicalSplit.filter((_, index) => index % 2 === 0);
    
    parts.forEach((part) => {
        part = part.trim();
        if (!part) return;
        
        // Split by spaces, but preserve quoted strings and key:value pairs
        const tokens = part.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
        
        tokens.forEach(token => {
            token = token.trim();
            if (!token) return;
            
            // Remove quotes if present
            if (token.startsWith('"') && token.endsWith('"')) {
                token = token.slice(1, -1);
            }
            
            // Check for key:value pattern - only field:value patterns are allowed
            const keyValueMatch = token.match(/^(-?)([a-zA-Z_][a-zA-Z0-9_]*):(.+)$/);
            if (keyValueMatch) {
                const [, negation, field, value] = keyValueMatch;
                const trimmedValue = value.trim();
                const fieldLower = field.toLowerCase();
                
                // Validate field against allowed fields
                if (allowedFieldsSet.has(fieldLower)) {
                    if (negation) {
                        // Handle negation (-key:value)
                        conditions.push({
                            field: fieldLower,
                            operator: 'not.ilike',
                            value: trimmedValue
                        });
                    } else {
                        // Handle equality (key:value)
                        conditions.push({
                            field: fieldLower,
                            operator: 'ilike',
                            value: trimmedValue
                        });
                    }
                } else {
                    // Field is not in allowed list
                    if (!invalidFields.includes(field)) {
                        invalidFields.push(field);
                    }
                }
            } else {
                // Token doesn't match field:value pattern - treat as invalid
                if (!invalidFields.includes(token)) {
                    invalidFields.push(token);
                }
            }
        });
    });
    
    return { conditions, logicalOperators, invalidFields };
};

const TicketsList: React.FC<TicketsListProps> = () => {
    // Context hooks
    const { assignedTenants, selectedTenantIds, isLoading: tenantLoading } = useTenantContext();
    const { dateRange, isLoading: dateRangeLoading } = useDateRangeContext();
    const { userData } = useUserContext();
    
    const [tickets, setTickets] = useState<SupabaseTicket[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [selectedTickets, setSelectedTickets] = useState<Set<number>>(new Set());
    const [selectAll, setSelectAll] = useState(false);
    const [availableColumns, setAvailableColumns] = useState<ColumnConfig[]>([]);
    
    // Search state
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSearchQuery, setActiveSearchQuery] = useState('');
    const [searchError, setSearchError] = useState('');
    
    // Column configuration state - will be populated dynamically
    const [columnConfig, setColumnConfig] = useState<ColumnConfig[]>([]);

    // localStorage key for column settings
    const COLUMN_SETTINGS_KEY = 'tickets-column-settings';

    // Define searchable fields for search functionality
    const SEARCHABLE_FIELDS = [
        'id',
        'severity',
        'name',
        'status',
        'tenant_name',
        'source_id',
        'assigned_to',
        'ai_status'
    ];

    // Define default selected columns with their order
    const DEFAULT_SELECTED_COLUMNS = [
        'id',
        'occurred_at',
        'severity',
        'name',
        'artifacts_and_assets',
        'mitre',
        'alert_source',
        'tenant_name',
        'ai_status',
        'status',
        'source_id',
        'assigned_to'
    ];

    // Define additional available columns (not selected by default)
    const ADDITIONAL_AVAILABLE_COLUMNS = [
        'created_at',
        'closure_category',
        'closure_reason',
        'updated_at',
        'tenant_id'
    ];

    // Save column configuration to localStorage
    const saveColumnSettings = useCallback((config: ColumnConfig[]) => {
        try {
            localStorage.setItem(COLUMN_SETTINGS_KEY, JSON.stringify(config));
        } catch (error) {
            console.error('Error saving column settings to localStorage:', error);
        }
    }, []);

    // Load column configuration from localStorage
    const loadColumnSettings = useCallback((): ColumnConfig[] | null => {
        try {
            const saved = localStorage.getItem(COLUMN_SETTINGS_KEY);
            return saved ? JSON.parse(saved) : null;
        } catch (error) {
            console.error('Error loading column settings from localStorage:', error);
            return null;
        }
    }, []);

    const [state, setState] = useState({
        show: false,
        showColumnSettings: false,
        showClosureModal: false,
        showSearchHelp: false
    });

    const handleClose = () => setState(prevState => ({
        ...prevState,
        show: false
    }));

    const handleShow = () => setState(prevState => ({
        ...prevState,
        show: true
    }));

    const handleColumnSettingsClose = () => setState(prevState => ({
        ...prevState,
        showColumnSettings: false
    }));

    const handleColumnSettingsShow = () => setState(prevState => ({
        ...prevState,
        showColumnSettings: true
    }));

    const handleClosureModalClose = () => setState(prevState => ({
        ...prevState,
        showClosureModal: false
    }));

    const handleClosureModalShow = () => setState(prevState => ({
        ...prevState,
        showClosureModal: true
    }));

    const handleSearchHelpClose = () => setState(prevState => ({
        ...prevState,
        showSearchHelp: false
    }));

    const handleSearchHelpShow = () => setState(prevState => ({
        ...prevState,
        showSearchHelp: true
    }));

    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };

    // Closure form state
    const [closureForm, setClosureForm] = useState({
        category: '',
        reason: ''
    });

    // Handle closure form submission
    const handleClosureSubmit = async () => {
        if (!closureForm.category || !closureForm.reason) {
            alert('Please fill in both Closure Category and Closure Reason');
            return;
        }

        if (selectedTickets.size === 0) {
            alert('Please select at least one ticket');
            return;
        }

        try {
            const ticketIds = Array.from(selectedTickets);
            const { error } = await supabase
                .from('tickets')
                .update({
                    closure_category: closureForm.category,
                    closure_reason: closureForm.reason,
                    updated_at: new Date().toISOString()
                })
                .in('id', ticketIds);

            if (error) {
                console.error('Error updating tickets:', error);
                alert('Error updating tickets. Please try again.');
                return;
            }

            // Clear form and close modal
            setClosureForm({ category: '', reason: '' });
            handleClosureModalClose();
            
            // Clear selection
            setSelectedTickets(new Set());
            setSelectAll(false);

            alert(`Successfully updated ${ticketIds.length} ticket(s)`);
        } catch (error) {
            console.error('Error updating tickets:', error);
            alert('Error updating tickets. Please try again.');
        }
    };

    // Fetch available columns from tickets table
    const fetchAvailableColumns = useCallback(async () => {
        try {
            // Get all tickets to ensure we capture all possible columns
            const { data, error } = await supabase
                .from('tickets')
                .select('*')
                .limit(10); // Get more tickets to ensure we capture all columns

            if (error) {
                console.error('Error fetching table schema:', error);
                return;
            }

            if (data && data.length > 0) {
                // Collect all unique column names from all tickets (actual DB columns only)
                const allColumns = new Set<string>();
                data.forEach(ticket => {
                    Object.keys(ticket).forEach(key => {
                        allColumns.add(key);
                    });
                });


                // Define column mappings with user-friendly titles
                const columnMappings: { [key: string]: string } = {
                    'id': 'ID',
                    'title': 'Title',
                    'name': 'Name',
                    'status': 'Status',
                    'priority': 'Priority',
                    'severity': 'Severity',
                    'tenant_id': 'Tenant ID',
                    'tenant_name': 'Tenant Name',
                    'status_color': 'Status Color',
                    'priority_color': 'Priority Color',
                    'created_at': 'Created At',
                    'occurred_at': 'Occurred At',
                    'updated_at': 'Updated At',
                    'ai_status': 'Investigation Status',
                    'source_id': 'Source ID',
                    'alert_source': 'Alert Source',
                    'mitre': 'MITRE ATT&CK',
                    'assigned_to': 'Assigned To',
                    'closure_category': 'Closure Category',
                    'closure_reason': 'Closure Reason',
                    'artifacts_and_assets': 'Scope'
                };

                const columns: ColumnConfig[] = [];

                // Add default selected columns in order (only if they exist in database)
                DEFAULT_SELECTED_COLUMNS.forEach((key, index) => {
                    if (allColumns.has(key)) {
                        columns.push({
                            key: key,
                            title: columnMappings[key] || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                            visible: true,
                            order: index + 1
                        });
                    }
                });

                // Add additional available columns (not selected by default, only if they exist in database)
                ADDITIONAL_AVAILABLE_COLUMNS.forEach((key, index) => {
                    if (allColumns.has(key)) {
                        columns.push({
                            key: key,
                            title: columnMappings[key] || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                            visible: false,
                            order: DEFAULT_SELECTED_COLUMNS.length + index + 1
                        });
                    }
                });

                setAvailableColumns(columns);
                
                // Try to load saved column settings, otherwise use default
                const savedSettings = loadColumnSettings();
                if (savedSettings && savedSettings.length > 0) {
                    // Filter saved settings to only include predefined columns
                    const validSavedSettings = savedSettings.filter(saved => 
                        DEFAULT_SELECTED_COLUMNS.includes(saved.key) || 
                        ADDITIONAL_AVAILABLE_COLUMNS.includes(saved.key)
                    );
                    
                    // Merge saved settings with available columns (only predefined columns)
                    const mergedConfig = columns.map(col => {
                        const saved = validSavedSettings.find(s => s.key === col.key);
                        return saved ? { ...col, visible: saved.visible, order: saved.order } : col;
                    });
                    setColumnConfig(mergedConfig);
                } else {
                    setColumnConfig(columns);
                }
            }
        } catch (error) {
            console.error('Error fetching available columns:', error);
        }
    }, []);

    // Handle search execution
    const handleSearch = () => {
        setActiveSearchQuery(searchQuery);
        setCurrentPage(1); // Reset to first page when searching
    };

    // Handle Enter key press in search input
    const handleSearchKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Helper function to apply a search condition to a query
    const applySearchCondition = (query: any, condition: SearchCondition, forOrString: boolean = false): any => {
        if (condition.field === 'id') {
            const idValue = parseInt(condition.value);
            if (!isNaN(idValue)) {
                if (forOrString) {
                    if (condition.operator === 'ilike') {
                        return `${condition.field}.eq.${idValue}`;
                    }
                    return null; // OR with negation for id not supported
                }
                if (condition.operator === 'ilike') {
                    return query.eq(condition.field, idValue);
                } else if (condition.operator === 'not.ilike') {
                    return query.neq(condition.field, idValue);
                }
            }
        } else {
            if (forOrString) {
                if (condition.operator === 'ilike') {
                    return `${condition.field}.ilike.%${condition.value}%`;
                }
                return null; // OR with negation not supported in string format
            }
            if (condition.operator === 'ilike') {
                return query.ilike(condition.field, `%${condition.value}%`);
            } else if (condition.operator === 'not.ilike') {
                return query.not(condition.field, 'ilike', `%${condition.value}%`);
            }
        }
        return query;
    };

    // Fetch tickets from Supabase with pagination and search
    const fetchTickets = useCallback(async (page: number = 1) => {
        try {
            setLoading(true);
            setSearchError('');
            const pageSize = 50;
            const from = (page - 1) * pageSize;
            const to = from + pageSize - 1;

            const allowedFields = SEARCHABLE_FIELDS;
            const parsedQuery = parseSearchQuery(activeSearchQuery, allowedFields);

            // Check for invalid fields or invalid search format
            if (parsedQuery.invalidFields.length > 0) {
                setSearchError(`Invalid search: ${parsedQuery.invalidFields.join(', ')}. Please use field:value format (e.g., status:Active). Allowed fields: ${allowedFields.join(', ')}`);
                setTickets([]);
                setTotalCount(0);
                setTotalPages(1);
                setLoading(false);
                return;
            }

            // Require at least one valid condition
            if (parsedQuery.conditions.length === 0 && activeSearchQuery.trim()) {
                setSearchError(`Invalid search format. Please use field:value format (e.g., status:Active). Allowed fields: ${allowedFields.join(', ')}`);
                setTickets([]);
                setTotalCount(0);
                setTotalPages(1);
                setLoading(false);
                return;
            }

            // Build query with tenant and date range filters
            let query = supabase.from('tickets').select('*', { count: 'exact' });

            // Apply tenant filter
            if (selectedTenantIds === 'all') {
                // Show tickets from all tenants the user is assigned to
                const tenantIds = assignedTenants.map(tenant => tenant.id);
                if (tenantIds.length > 0) {
                    query = query.in('tenant_id', tenantIds);
                }
            } else if (Array.isArray(selectedTenantIds) && selectedTenantIds.length > 0) {
                // Show tickets from specifically selected tenants
                query = query.in('tenant_id', selectedTenantIds);
            } else if (typeof selectedTenantIds === 'string' && selectedTenantIds !== 'all') {
                // Show tickets from a single selected tenant
                query = query.eq('tenant_id', selectedTenantIds);
            }

            // Apply date range filter with time precision
            // Convert user's timezone time to UTC for database query
            if (dateRange && dateRange[0] && dateRange[1] && userData?.timezone) {
                const startDate = new Date(dateRange[0].getTime());
                const endDate = new Date(dateRange[1].getTime());
                
                console.log('Query Filter - Before Conversion:', {
                    'Start Date from dateRange': startDate.toString(),
                    'Start Date Local': startDate.toLocaleString(),
                    'Start Date ISO': startDate.toISOString(),
                    'End Date from dateRange': endDate.toString(),
                    'End Date Local': endDate.toLocaleString(),
                    'End Date ISO': endDate.toISOString(),
                    'User Timezone': userData.timezone
                });
                
                const startUTC = convertUserTimezoneToUTC(startDate, userData.timezone);
                const endUTC = convertUserTimezoneToUTC(endDate, userData.timezone);
                
                console.log('Query Filter - Final UTC Values:', {
                    'Start UTC (for DB query)': startUTC,
                    'End UTC (for DB query)': endUTC,
                    'Start UTC displays in User TZ': new Date(startUTC).toLocaleString('en-US', { timeZone: userData.timezone, hour12: false }),
                    'End UTC displays in User TZ': new Date(endUTC).toLocaleString('en-US', { timeZone: userData.timezone, hour12: false })
                });
                
                query = query.gte('created_at', startUTC).lte('created_at', endUTC);
            }

            // Apply search conditions
            if (parsedQuery.conditions.length > 0) {
                const isAndOperation = parsedQuery.logicalOperators.length === 0 || parsedQuery.logicalOperators.every(op => op === 'AND');
                
                if (isAndOperation) {
                    // AND operations: chain conditions
                    parsedQuery.conditions.forEach(condition => {
                        query = applySearchCondition(query, condition);
                    });
                } else {
                    // OR operations
                    const hasNegation = parsedQuery.conditions.some(c => c.operator === 'not.ilike');
                    
                    if (hasNegation) {
                        // Convert to AND logic (Supabase limitation with OR + negation)
                        parsedQuery.conditions.forEach(condition => {
                            query = applySearchCondition(query, condition);
                        });
                    } else {
                        // Use OR syntax
                        const orConditions = parsedQuery.conditions
                            .map(condition => applySearchCondition(query, condition, true))
                            .filter((condition): condition is string => condition !== null);
                        
                        if (orConditions.length > 0) {
                            query = query.or(orConditions.join(','));
                        }
                    }
                }
            }


            // Get total count
            const { count, error: countError } = await query;

            setTotalCount(count || 0);
            setTotalPages(Math.ceil((count || 0) / pageSize));

            // Get paginated data with same filters
            let dataQuery = supabase.from('tickets').select('*');

            // Apply same tenant filter
            if (selectedTenantIds === 'all') {
                // Show tickets from all tenants the user is assigned to
                const tenantIds = assignedTenants.map(tenant => tenant.id);
                if (tenantIds.length > 0) {
                    dataQuery = dataQuery.in('tenant_id', tenantIds);
                }
            } else if (Array.isArray(selectedTenantIds) && selectedTenantIds.length > 0) {
                // Show tickets from specifically selected tenants
                dataQuery = dataQuery.in('tenant_id', selectedTenantIds);
            } else if (typeof selectedTenantIds === 'string' && selectedTenantIds !== 'all') {
                // Show tickets from a single selected tenant
                dataQuery = dataQuery.eq('tenant_id', selectedTenantIds);
            }

            // Apply same date range filter with time precision
            if (dateRange && dateRange[0] && dateRange[1] && userData?.timezone) {
                const startDate = new Date(dateRange[0].getTime());
                const endDate = new Date(dateRange[1].getTime());
                const startUTC = convertUserTimezoneToUTC(startDate, userData.timezone);
                const endUTC = convertUserTimezoneToUTC(endDate, userData.timezone);
                dataQuery = dataQuery.gte('created_at', startUTC).lte('created_at', endUTC);
            }

            // Apply same search conditions
            if (parsedQuery.conditions.length > 0) {
                const isAndOperation = parsedQuery.logicalOperators.length === 0 || parsedQuery.logicalOperators.every(op => op === 'AND');
                
                if (isAndOperation) {
                    // AND operations: chain conditions
                    parsedQuery.conditions.forEach(condition => {
                        dataQuery = applySearchCondition(dataQuery, condition);
                    });
                } else {
                    // OR operations
                    const hasNegation = parsedQuery.conditions.some(c => c.operator === 'not.ilike');
                    
                    if (hasNegation) {
                        // Convert to AND logic (Supabase limitation with OR + negation)
                        parsedQuery.conditions.forEach(condition => {
                            dataQuery = applySearchCondition(dataQuery, condition);
                        });
                    } else {
                        // Use OR syntax
                        const orConditions = parsedQuery.conditions
                            .map(condition => applySearchCondition(dataQuery, condition, true))
                            .filter((condition): condition is string => condition !== null);
                        
                        if (orConditions.length > 0) {
                            dataQuery = dataQuery.or(orConditions.join(','));
                        }
                    }
                }
            }


            const { data, error } = await dataQuery
                .order('id', { ascending: false })
                .range(from, to);

            if (error) {
                console.error('Error fetching tickets:', error);
                setSearchError('Search query error. Please check your syntax.');
                return;
            }

            setTickets(data || []);
        } catch (error) {
            console.error('Error fetching tickets:', error);
            setSearchError('An error occurred while searching.');
        } finally {
            setLoading(false);
        }
    }, [selectedTenantIds, dateRange, assignedTenants, activeSearchQuery, dateRangeLoading, userData]);

    // Load next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            fetchTickets(nextPage);
        }
    };

    // Load previous page
    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            fetchTickets(prevPage);
        }
    };

    // Handle select all
    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        
        if (newSelectAll && tickets && tickets.length > 0) {
            const allIds = new Set(tickets.map(ticket => ticket.id));
            setSelectedTickets(allIds);
        } else {
            setSelectedTickets(new Set());
        }
    };

    // Handle individual checkbox toggle
    const handleCheckboxToggle = (id: number) => {
        const newSelected = new Set(selectedTickets);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedTickets(newSelected);
        setSelectAll(newSelected.size === (tickets?.length || 0));
    };

    // Handle column visibility toggle
    const handleColumnToggle = (key: string) => {
        setColumnConfig(prev => {
            const newConfig = (prev || []).map(col => 
                col.key === key ? { ...col, visible: !col.visible } : col
            );
            saveColumnSettings(newConfig);
            return newConfig;
        });
    };

    // Handle column reordering
    const handleColumnReorder = (fromIndex: number, toIndex: number) => {
        setColumnConfig(prev => {
            const newConfig = [...(prev || [])];
            const [movedItem] = newConfig.splice(fromIndex, 1);
            newConfig.splice(toIndex, 0, movedItem);
            const reorderedConfig = newConfig.map((col, index) => ({ ...col, order: index + 1 }));
            saveColumnSettings(reorderedConfig);
            return reorderedConfig;
        });
    };

    // Handle ticket removal
    const handleRemove = async (id: number) => {
        try {
            const { error } = await supabase
                .from('tickets')
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Error deleting ticket:', error);
                return;
            }

            // Remove from local state
            setTickets(prev => (prev || []).filter(ticket => ticket.id !== id));
            setSelectedTickets(prev => {
                const newSet = new Set(prev);
                newSet.delete(id);
                return newSet;
            });
        } catch (error) {
            console.error('Error deleting ticket:', error);
        }
    };

    // Set up realtime subscription
    useEffect(() => {
        const channel = supabase
            .channel('tickets-changes')
            .on('postgres_changes', 
                { 
                    event: '*', 
                    schema: 'public', 
                    table: 'tickets' 
                }, 
                (payload) => {
                    
                    if (payload.eventType === 'INSERT' && payload.new) {
                        // Add new ticket to the beginning of the list
                        setTickets(prev => [payload.new as SupabaseTicket, ...(prev || [])]);
                    } else if (payload.eventType === 'UPDATE' && payload.new) {
                        // Update existing ticket
                        setTickets(prev => 
                            (prev || []).map(ticket => 
                                ticket.id === payload.new.id ? payload.new as SupabaseTicket : ticket
                            )
                        );
                    } else if (payload.eventType === 'DELETE' && payload.old) {
                        // Remove deleted ticket
                        setTickets(prev => 
                            (prev || []).filter(ticket => ticket.id !== payload.old.id)
                        );
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    // Initial data fetch
    useEffect(() => {
        fetchAvailableColumns();
    }, [fetchAvailableColumns]);

    // Fetch tickets when context values or search query change
    // Use dateRange ISO strings in dependency to ensure re-fetch when dates change
    const dateRangeKey = dateRange && dateRange[0] && dateRange[1] 
        ? `${dateRange[0].toISOString()}-${dateRange[1].toISOString()}` 
        : '';
    
    useEffect(() => {
        if (!tenantLoading && !dateRangeLoading) {
            fetchTickets(1);
            setCurrentPage(1);
        }
    }, [fetchTickets, tenantLoading, dateRangeLoading, dateRangeKey]);

    // Get visible columns sorted by order
    const visibleColumns = (columnConfig || [])
        .filter(col => col.visible)
        .sort((a, b) => a.order - b.order);
    return (
        <Fragment>
            <Seo title="Tickets Management" />
            
            {/* Custom styles for column settings */}
            <style jsx>{`
                .column-setting-item {
                    transition: all 0.2s ease;
                    cursor: grab;
                }
                .column-setting-item:hover {
                    background-color: rgba(0, 123, 255, 0.08);
                    border-color: rgba(0, 123, 255, 0.3);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
                }
                [data-bs-theme="dark"] .column-setting-item:hover {
                    background-color: rgba(0, 123, 255, 0.12);
                    border-color: rgba(0, 123, 255, 0.4);
                    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.25);
                }
                .column-setting-item:active {
                    cursor: grabbing;
                }
                .column-setting-item.dragging {
                    opacity: 0.5;
                    transform: rotate(2deg);
                }
                .column-settings-list {
                    max-height: 400px;
                    overflow-y: auto;
                }
                .table-responsive {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    min-height: 50vh;
                }
                .table-responsive::-webkit-scrollbar {
                    height: 4px;
                }
                .table-responsive::-webkit-scrollbar-track {
                    background: transparent;
                }
                .table-responsive::-webkit-scrollbar-thumb {
                    background: linear-gradient(90deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .table-responsive::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(90deg, #e9ecef 0%, #dee2e6 50%, #ced4da 100%);
                    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
                }
                .table-responsive::-webkit-scrollbar-thumb:active {
                    background: linear-gradient(90deg, #dee2e6 0%, #ced4da 50%, #adb5bd 100%);
                }
                .table-responsive table {
                    min-width: max-content;
                    white-space: nowrap;
                }
                .pagination .page-link {
                    border-radius: 6px;
                    margin: 0 2px;
                    border: 1px solid #e9ecef;
                    color: #495057;
                    transition: all 0.2s ease;
                }
                .pagination .page-link:hover {
                    background-color: #007bff;
                    border-color: #007bff;
                    color: white;
                    transform: translateY(-1px);
                }
                .pagination .page-item.active .page-link {
                    background-color: #007bff;
                    border-color: #007bff;
                    box-shadow: 0 2px 4px rgba(0,123,255,0.3);
                }
                .pagination .page-item.disabled .page-link {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `}</style>
            
            {/* Tickets Table */}
            <Row className="g-0" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
                <Col xxl={12} xl={12}>
                    <Card className="custom-card" style={{ marginBottom: 0 }}>
                        <Card.Header className="d-flex align-items-center justify-content-between" style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
                            <Card.Title className="mb-0">
                                Investigations
                            </Card.Title>
                            <SpkButton 
                                Customclass="btn btn-wave" 
                                Buttonvariant='primary-light'
                            >
                                <i className="ri-upload-cloud-line align-middle me-1"></i> Export report
                            </SpkButton>
                        </Card.Header>
                        
                        {/* Search Bar */}
                        <Card.Body className="border-bottom">
                            <Row className="mb-3">
                                <Col md={8}>
                                    <InputGroup>
                                        <Button 
                                            variant="outline-info" 
                                            onClick={handleSearchHelpShow}
                                            title="Search Help"
                                        >
                                            <i className="ri-question-line"></i>
                                        </Button>
                                        <Form.Control
                                            id="search-input"
                                            type="text"
                                            placeholder="Search by field (e.g., status:Active, -severity:Low, status:Open AND severity:High)..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyPress={handleSearchKeyPress}
                                            className={searchError ? 'is-invalid' : ''}
                                        />
                                        <Button 
                                            variant="primary" 
                                            onClick={handleSearch}
                                            disabled={!searchQuery.trim()}
                                        >
                                            <i className="ri-search-line"></i>
                                        </Button>
                                        <Button 
                                            variant="outline-secondary" 
                                            onClick={() => {
                                                setSearchQuery('');
                                                setActiveSearchQuery('');
                                                setSearchError('');
                                            }}
                                            disabled={!searchQuery && !activeSearchQuery}
                                        >
                                            <i className="ri-close-line"></i>
                                        </Button>
                                    </InputGroup>
                                    {searchError && (
                                        <div className="invalid-feedback d-block">
                                            {searchError}
                                        </div>
                                    )}
                                </Col>
                                <Col md={4} className="d-flex align-items-end justify-content-end">
                                </Col>
                            </Row>
                            
                            {/* Action Buttons */}
                            <Row className="mb-0">
                                <Col md={12}>
                                    <div className="d-flex gap-2 justify-content-between align-items-center">
                                        <SpkButton 
                                            Buttonvariant="outline-primary" 
                                            Customclass="btn btn-sm btn-wave waves-light rounded-pill" 
                                            onClickfunc={handleClosureModalShow}
                                            Disabled={selectedTickets.size === 0}
                                        >
                                            <i className="ri-check-line fw-medium align-middle me-1"></i> Closure ({selectedTickets.size})
                                        </SpkButton>
                                        <Button 
                                            variant="outline-secondary" 
                                            className="btn btn-sm" 
                                            onClick={handleColumnSettingsShow}
                                            title="Column Settings"
                                        >
                                            <i className="ri-settings-3-line"></i>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="p-0" style={{ minHeight: '65vh' }}>
                            {(loading || tenantLoading || dateRangeLoading) ? (
                                <div className="d-flex justify-content-center align-items-center p-4">
                                    <Spinner animation="border" variant="primary" />
                                    <span className="ms-2">Loading tickets...</span>
                                </div>
                            ) : (
                                <div className="table-responsive" style={{ overflowX: 'auto', minWidth: '100%', minHeight: '65vh' }}>
                                    <SpkTables 
                                        tableClass="table text-nowrap" 
                                        checked={selectAll} 
                                        onChange={handleSelectAll} 
                                        showCheckbox={true} 
                                        header={[
                                            ...(visibleColumns || []).map(col => ({ title: col.title }))
                                        ]}
                                    >
                                        {tickets && tickets.length > 0 ? tickets.map((ticket) => (
                                            <tr className="task-list" key={ticket.id}>
                                                <td className="task-checkbox">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        aria-label="..." 
                                                        checked={selectedTickets.has(ticket.id)} 
                                                        onChange={() => handleCheckboxToggle(ticket.id)} 
                                                    />
                                                </td>
                                                {(visibleColumns || []).map((col) => (
                                                    <td key={col.key} style={col.key === 'name' ? { maxWidth: '300px' } : {}}>
                                                        {col.key === 'id' && (
                                                            <Link 
                                                                href={`/tickets/details?id=${ticket.id}`}
                                                                className="fw-medium text-primary text-decoration-none"
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                {ticket.id}
                                                            </Link>
                                                        )}
                                                        {col.key === 'title' && (
                                                            <span className="fw-medium">{ticket.title}</span>
                                                        )}
                                                        {col.key === 'name' && (
                                                            <span className="fw-medium" style={{ display: 'block', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={ticket.name || ticket.title || '-'}>{ticket.name || ticket.title || '-'}</span>
                                                        )}
                                                        {col.key === 'status' && (
                                                            <SpkButton 
                                                                Buttontype="button"
                                                                Buttonvariant={
                                                                    ticket.status.toLowerCase() === 'open' ? 'light' :
                                                                    ticket.status.toLowerCase() === 'closed' ? 'dark' :
                                                                    ticket.status.toLowerCase() === 'in progress' ? 'warning-light' :
                                                                    'primary-light'
                                                                }
                                                                Customclass="btn-sm"
                                                                Style={{ minWidth: '70px', width: '70px' }}
                                                            >
                                                                {ticket.status}
                                                            </SpkButton>
                                                        )}
                                                        {col.key === 'priority' && (
                                                            <SpkBadge variant={`${ticket.priority_color || 'secondary'}-transparent`}>{ticket.priority}</SpkBadge>
                                                        )}
                                                        {col.key === 'severity' && (
                                                            <SpkButton 
                                                                Buttontype="button"
                                                                Buttonvariant={
                                                                    (ticket.severity || '').toLowerCase() === 'critical' ? 'danger' :
                                                                    (ticket.severity || '').toLowerCase() === 'high' ? 'danger' :
                                                                    (ticket.severity || '').toLowerCase() === 'medium' ? 'orange' :
                                                                    (ticket.severity || '').toLowerCase() === 'low' ? 'success' :
                                                                    'secondary'
                                                                }
                                                                Customclass="btn-sm"
                                                                Style={{ minWidth: '70px', width: '70px' }}
                                                            >
                                                                {ticket.severity || '-'}
                                                            </SpkButton>
                                                        )}
                                                        {col.key === 'tenant_id' && (
                                                            <span className="fw-medium">{ticket.tenant_id || '-'}</span>
                                                        )}
                                                        {col.key === 'tenant_name' && (
                                                            <span className="fw-medium">{ticket.tenant_name || '-'}</span>
                                                        )}
                                                        {col.key === 'assigned_to' && (
                                                            <span className="fw-medium">{ticket.assigned_to || '-'}</span>
                                                        )}
                                                        {col.key === 'status_color' && (
                                                            <span className="text-muted">{ticket.status_color || '-'}</span>
                                                        )}
                                                        {col.key === 'priority_color' && (
                                                            <span className="text-muted">{ticket.priority_color || '-'}</span>
                                                        )}
                                                        {col.key === 'created_at' && (
                                                            <span>{formatUtcToUserTimezone(ticket.created_at, userData?.timezone || 'UTC')}</span>
                                                        )}
                                                        {col.key === 'occurred_at' && (
                                                            <span>{formatUtcToUserTimezone(ticket.occurred_at, userData?.timezone || 'UTC')}</span>
                                                        )}
                                                        {col.key === 'updated_at' && (
                                                            <span>{formatUtcToUserTimezone(ticket.updated_at, userData?.timezone || 'UTC')}</span>
                                                        )}
                                                        {col.key === 'alert_source' && (
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                {ticket.alert_source ? (
                                                                    <img
                                                                        src={ticket.alert_source}
                                                                        alt="Source logo"
                                                                        style={{ 
                                                                            width: '78px', 
                                                                            height: '38px', 
                                                                            objectFit: 'contain',
                                                                            maxWidth: '78px',
                                                                            maxHeight: '38px'
                                                                        }}
                                                                        onError={(e) => {
                                                                            e.currentTarget.style.display = 'none';
                                                                        }}
                                                                    />
                                                                ) : (
                                                                    <span className="text-muted">-</span>
                                                                )}
                                                            </div>
                                                        )}
                                                        {col.key === 'mitre' && (
                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', minWidth: '200px' }}>
                                                                {(() => {
                                                                    try {
                                                                        let mitreData: any[] = [];
                                                                        const mitreValue = ticket.mitre;
                                                                        
                                                                        if (typeof mitreValue === 'string') {
                                                                            mitreData = JSON.parse(mitreValue);
                                                                        } else if (Array.isArray(mitreValue)) {
                                                                            mitreData = mitreValue;
                                                                        }
                                                                        
                                                                        if (!mitreData || mitreData.length === 0) {
                                                                            return <span className="text-muted">-</span>;
                                                                        }
                                                                        
                                                                        // Ensure all 12 tactics are present
                                                                        const allTactics = [
                                                                            'Initial Access', 'Execution', 'Persistence', 'Privilege Escalation',
                                                                            'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement',
                                                                            'Collection', 'Command and Control', 'Exfiltration', 'Impact'
                                                                        ];
                                                                        
                                                                        const mitreMap = new Map(mitreData.map((t: any) => [t.name, t]));
                                                                        const completeMitreData = allTactics.map(name => {
                                                                            const existing = mitreMap.get(name);
                                                                            return existing || { name, count: 0, active: false };
                                                                        });
                                                                        
                                                                        // Find all active tactics for display
                                                                        const activeTactics = completeMitreData.filter(t => t.active);
                                                                        
                                                                        return (
                                                                            <>
                                                                                {/* Connected dots line */}
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', width: '100%', justifyContent: 'center' }}>
                                                                                    {completeMitreData.map((phase, index) => (
                                                                                        <React.Fragment key={phase.name}>
                                                                                            <div
                                                                                                style={{
                                                                                                    width: phase.active ? '10px' : '6px',
                                                                                                    height: phase.active ? '10px' : '6px',
                                                                                                    borderRadius: '50%',
                                                                                                    backgroundColor: phase.active ? '#dc3545' : '#6c757d',
                                                                                                    border: phase.active ? '2px solid #dc3545' : '1px solid #6c757d',
                                                                                                    flexShrink: 0
                                                                                                }}
                                                                                                title={phase.name}
                                                                                            />
                                                                                            {index < completeMitreData.length - 1 && (
                                                                                                <div
                                                                                                    style={{
                                                                                                        width: '8px',
                                                                                                        height: '1px',
                                                                                                        backgroundColor: '#dee2e6',
                                                                                                        flexShrink: 0
                                                                                                    }}
                                                                                                />
                                                                                            )}
                                                                                        </React.Fragment>
                                                                                    ))}
                                                                                </div>
                                                                                {/* All active tactic names below */}
                                                                                {activeTactics.length > 0 && (
                                                                                    <span 
                                                                                        className="fs-12 fw-medium text-center" 
                                                                                        style={{ 
                                                                                            color: '#dc3545',
                                                                                            width: '100%',
                                                                                            display: 'block',
                                                                                            overflow: 'hidden',
                                                                                            textOverflow: 'ellipsis',
                                                                                            whiteSpace: 'nowrap'
                                                                                        }}
                                                                                        title={activeTactics.map(t => t.name).join(', ')}
                                                                                    >
                                                                                        {activeTactics.map(t => t.name).join(', ')}
                                                                                    </span>
                                                                                )}
                                                                            </>
                                                                        );
                                                                    } catch (error) {
                                                                        return <span className="text-muted">-</span>;
                                                                    }
                                                                })()}
                                                            </div>
                                                        )}
                                                        {col.key === 'ai_status' && (
                                                            <SpkButton 
                                                                Buttontype="button"
                                                                Buttonvariant={
                                                                    (ticket.ai_status || '').toLowerCase() === 'queued' ? 'light' :
                                                                    (ticket.ai_status || '').toLowerCase() === 'investigating' ? 'primary' :
                                                                    (ticket.ai_status || '').toLowerCase() === 'completed' ? 'dark' :
                                                                    'secondary'
                                                                }
                                                                Customclass={
                                                                    (ticket.ai_status || '').toLowerCase() === 'investigating' 
                                                                        ? 'btn-sm btn-loader' 
                                                                        : 'btn-sm'
                                                                }
                                                                Style={{ minWidth: '120px', width: '120px' }}
                                                            >
                                                                {(ticket.ai_status || '').toLowerCase() === 'investigating' ? (
                                                                    <>
                                                                        <span className="me-2">{ticket.ai_status || '-'}</span>
                                                                        <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
                                                                    </>
                                                                ) : (
                                                                    <span>{ticket.ai_status || '-'}</span>
                                                                )}
                                                            </SpkButton>
                                                        )}
                                                        {col.key === 'source_id' && (
                                                            <span>{ticket.source_id ?? '-'}</span>
                                                        )}
                                                        {col.key === 'closure_category' && (
                                                            <span className="fw-medium">{ticket.closure_category || '-'}</span>
                                                        )}
                                                        {col.key === 'closure_reason' && (
                                                            <span className="text-muted">{ticket.closure_reason || '-'}</span>
                                                        )}
                                                        {col.key === 'artifacts_and_assets' && (
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                                {(() => {
                                                                    try {
                                                                        let artifactsData: any = null;
                                                                        const artifactsValue = ticket.artifacts_and_assets;
                                                                        
                                                                        if (typeof artifactsValue === 'string') {
                                                                            artifactsData = JSON.parse(artifactsValue);
                                                                        } else if (typeof artifactsValue === 'object' && artifactsValue !== null) {
                                                                            artifactsData = artifactsValue;
                                                                        }
                                                                        
                                                                        if (!artifactsData) {
                                                                            return (
                                                                                <>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                                        <i className="ri-user-line fs-16 text-primary"></i>
                                                                                        <span className="fw-medium">0</span>
                                                                                    </div>
                                                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                                        <i className="ri-computer-line fs-16 text-info"></i>
                                                                                        <span className="fw-medium">0</span>
                                                                                    </div>
                                                                                </>
                                                                            );
                                                                        }
                                                                        
                                                                        const usersCount = Array.isArray(artifactsData.users) ? artifactsData.users.length : 0;
                                                                        const assetsCount = Array.isArray(artifactsData.assets) ? artifactsData.assets.length : 0;
                                                                        
                                                                        return (
                                                                            <>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                                    <i className="ri-user-line fs-16 text-primary"></i>
                                                                                    <span className="fw-medium">{usersCount}</span>
                                                                                </div>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                                    <i className="ri-computer-line fs-16 text-info"></i>
                                                                                    <span className="fw-medium">{assetsCount}</span>
                                                                                </div>
                                                                            </>
                                                                        );
                                                                    } catch (error) {
                                                                        return (
                                                                            <>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                                    <i className="ri-user-line fs-16 text-primary"></i>
                                                                                    <span className="fw-medium">0</span>
                                                                                </div>
                                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                                                    <i className="ri-computer-line fs-16 text-info"></i>
                                                                                    <span className="fw-medium">0</span>
                                                                                </div>
                                                                            </>
                                                                        );
                                                                    }
                                                                })()}
                                                            </div>
                                                        )}
                                                        {/* Handle any other columns dynamically */}
                                                        {!['id', 'title', 'name', 'status', 'priority', 'severity', 'alert_source', 'mitre', 'ai_status', 'tenant_id', 'tenant_name', 'assigned_to', 'source_id', 'closure_category', 'closure_reason', 'artifacts_and_assets', 'status_color', 'priority_color', 'created_at', 'occurred_at', 'updated_at'].includes(col.key) && (
                                                            <span>
                                                                {/* Check if this column contains severity-like values */}
                                                                {(() => {
                                                                    const value = ticket[col.key];
                                                                    if (value && typeof value === 'string') {
                                                                        const lowerValue = value.toLowerCase();
                                                                        if (['critical', 'high', 'medium', 'low'].includes(lowerValue)) {
                                                                            return (
                                                                                <SpkButton 
                                                                                    Buttontype="button"
                                                                                    Buttonvariant={
                                                                                        lowerValue === 'critical' ? 'danger' :
                                                                                        lowerValue === 'high' ? 'danger' :
                                                                                        lowerValue === 'medium' ? 'orange' :
                                                                                        lowerValue === 'low' ? 'success' :
                                                                                        'secondary'
                                                                                    }
                                                                                    Customclass="btn-sm"
                                                                                    Style={{ minWidth: '80px', width: '80px' }}
                                                                                >
                                                                                    {value}
                                                                                </SpkButton>
                                                                            );
                                                                        }
                                                                    }
                                                                    return value || '-';
                                                                })()}
                                                            </span>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={visibleColumns.length + 1} className="text-center py-4">
                                                    <div className="text-muted">
                                                        <i className="ri-inbox-line fs-48 mb-3 d-block"></i>
                                                        No tickets found
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </SpkTables>
                                </div>
                            )}
                        </Card.Body>
                        <Card.Footer className="border-top-0" style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0 float-end">
                                    <Pagination.Prev 
                                        disabled={currentPage === 1}
                                        onClick={handlePrevPage}
                                    >
                                        Previous
                                    </Pagination.Prev>
                                    
                                    {/* Show page numbers */}
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        let pageNum;
                                        if (totalPages <= 5) {
                                            pageNum = i + 1;
                                        } else if (currentPage <= 3) {
                                            pageNum = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i;
                                        } else {
                                            pageNum = currentPage - 2 + i;
                                        }
                                        
                                        return (
                                            <Pagination.Item
                                                key={pageNum}
                                                active={pageNum === currentPage}
                                                onClick={() => {
                                                    if (pageNum !== currentPage) {
                                                        setCurrentPage(pageNum);
                                                        fetchTickets(pageNum);
                                                    }
                                                }}
                                            >
                                                {pageNum}
                                            </Pagination.Item>
                                        );
                                    })}
                                    
                                    <Pagination.Next 
                                        disabled={currentPage === totalPages}
                                        onClick={handleNextPage}
                                    >
                                        Next
                                    </Pagination.Next>
                                </Pagination>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {/* Create Task Modal */}
                                <Modal show={state.show} centered onHide={handleClose} className="modal fade" id="create-task" tabIndex={-1}>
                                    <Modal.Header className="modal-header">
                                        <Modal.Title className="modal-title h6">Add Task</Modal.Title>
                                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close" onClickfunc={handleClose} ></SpkButton>
                                    </Modal.Header>
                                    <Modal.Body className="modal-body px-4">
                                        <Row className="gy-2">
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-name" >Task Name</Form.Label>
                                                <Form.Control type="text" id="task-name" placeholder="Task Name" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-id">Task ID</Form.Label>
                                                <Form.Control type="text" id="task-id" placeholder="Task ID" />
                                            </Col>
                                            <Col className="col-xl-6">
                                                <Form.Label>Assigned Date</Form.Label>
                                                <div className="form-group">
                                                    <div className="input-group flex-nowrap datepicker-inputwraper">
                                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                        <SpkDatepickr className="form-control" selected={dates["AssignedDate"] ? new Date(dates["AssignedDate"]) : null} onChange={(date: Date | null) => handleDateChange("AssignedDate", date)} dateFormat="yy/MM/dd h:mm aa" showTimeInput placeholderText="Choose date and time" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <label className="form-label">Due Date</label>
                                                <div className="form-group">
                                                    <div className="input-group flex-nowrap datepicker-inputwraper">
                                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                        <SpkDatepickr className="form-control" selected={dates["DueDate"] ? new Date(dates["DueDate"]) : null} onChange={(date: Date | null) => handleDateChange("DueDate", date)} showTimeInput dateFormat="yy/MM/dd h:mm aa" placeholderText="Choose date and time" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Status</Form.Label>
                                                <SpkSelect name="state" option={Status} mainClass="js-example-placeholder-multiple w-full js-states"
                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Status[0]]}
                                                />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Priority</Form.Label>
                                                <SpkSelect name="state" option={Priority} mainClass="js-example-placeholder-multiple w-full js-states"
                                                    menuplacement='auto' classNameprefix="Select2"
                                                />
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label>Assigned To</Form.Label>
                                                <SpkSelect name="state" multi option={tags} mainClass="js-example-placeholder-multiple w-full js-states"
                                                    menuplacement='auto' classNameprefix="Select2"
                                                />
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer className="modal-footer">
                                        <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn btn-light"
                                            data-bs-dismiss="modal" onClickfunc={handleClose} >Cancel</SpkButton>
                                        <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn btn-primary" >Add Task</SpkButton>
                                    </Modal.Footer>
                                </Modal>

            {/* Column Settings Modal */}
            <Modal show={state.showColumnSettings} centered onHide={handleColumnSettingsClose} className="modal fade" id="column-settings" tabIndex={-1}>
                <Modal.Header className="modal-header">
                    <Modal.Title className="modal-title h6">Column Settings</Modal.Title>
                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                        aria-label="Close" onClickfunc={handleColumnSettingsClose} ></SpkButton>
                </Modal.Header>
                <Modal.Body className="modal-body px-4">
                    <div className="mb-3">
                        <p className="text-muted small mb-3">Drag to reorder columns and toggle visibility</p>
                        <div className="column-settings-list">
                            {(columnConfig || []).map((col, index) => (
                                <div 
                                    key={col.key} 
                                    className="column-setting-item d-flex align-items-center justify-content-between p-2 mb-2 border rounded"
                                    draggable
                                    onDragStart={(e) => {
                                        e.dataTransfer.setData('text/plain', index.toString());
                                        e.currentTarget.classList.add('dragging');
                                    }}
                                    onDragOver={(e) => {
                                        e.preventDefault();
                                        e.currentTarget.style.borderColor = 'rgba(0, 123, 255, 0.5)';
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.2)';
                                    }}
                                    onDragLeave={(e) => {
                                        e.currentTarget.style.borderColor = '';
                                        e.currentTarget.style.backgroundColor = '';
                                        e.currentTarget.style.boxShadow = '';
                                    }}
                                    onDragEnd={(e) => {
                                        e.currentTarget.classList.remove('dragging');
                                        e.currentTarget.style.borderColor = '';
                                        e.currentTarget.style.backgroundColor = '';
                                        e.currentTarget.style.boxShadow = '';
                                    }}
                                    onDrop={(e) => {
                                        e.preventDefault();
                                        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
                                        const dropIndex = index;
                                        if (dragIndex !== dropIndex) {
                                            handleColumnReorder(dragIndex, dropIndex);
                                        }
                                        e.currentTarget.style.borderColor = '';
                                        e.currentTarget.style.backgroundColor = '';
                                        e.currentTarget.style.boxShadow = '';
                                    }}
                                >
                                    <div className="d-flex align-items-center">
                                        <i className="ri-drag-move-2-line me-2 text-muted" style={{ cursor: 'grab' }}></i>
                                        <div className="form-check mb-0">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id={`col-${col.key}`}
                                                checked={col.visible}
                                                onChange={() => handleColumnToggle(col.key)}
                                            />
                                            <label className="form-check-label fw-medium" htmlFor={`col-${col.key}`}>
                                                {col.title}
                                            </label>
                                        </div>
                            </div>
                                    <div className="d-flex align-items-center">
                                        <span className="badge bg-light text-dark me-2">#{col.order}</span>
                                        <span className={`badge ${col.visible ? 'bg-success' : 'bg-secondary'}`}>
                                            {col.visible ? 'Visible' : 'Hidden'}
                                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                                                </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <div className="d-flex justify-content-between w-100">
                        <SpkButton 
                            Buttonvariant="outline-secondary" 
                            Buttontype="button" 
                            Customclass="btn btn-outline-secondary"
                            onClickfunc={() => {
                                // Reset to default selected columns with their order
                                const resetConfig = columnConfig.map((col, index) => {
                                    const isDefaultSelected = DEFAULT_SELECTED_COLUMNS.includes(col.key);
                                    const defaultOrder = DEFAULT_SELECTED_COLUMNS.indexOf(col.key);
                                    
                                    return {
                                        ...col,
                                        visible: isDefaultSelected,
                                        order: isDefaultSelected ? (defaultOrder + 1) : (DEFAULT_SELECTED_COLUMNS.length + index + 1)
                                    };
                                });
                                
                                // Sort by order to maintain proper sequence
                                resetConfig.sort((a, b) => a.order - b.order);
                                
                                setColumnConfig(resetConfig);
                                saveColumnSettings(resetConfig);
                            }}
                        >
                            Reset to Default
                                                    </SpkButton>
                        <SpkButton 
                            Buttonvariant="light" 
                            Buttontype="button" 
                            Customclass="btn btn-light"
                            data-bs-dismiss="modal" 
                            onClickfunc={handleColumnSettingsClose}
                        >
                            Close
                                                    </SpkButton>
                                                </div>
                </Modal.Footer>
            </Modal>

            {/* Closure Modal */}
            <Modal show={state.showClosureModal} centered onHide={handleClosureModalClose} className="modal fade" id="closure-modal" tabIndex={-1}>
                <Modal.Header className="modal-header">
                    <Modal.Title className="modal-title h6">Close Tickets</Modal.Title>
                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                        aria-label="Close" onClickfunc={handleClosureModalClose} ></SpkButton>
                </Modal.Header>
                <Modal.Body className="modal-body px-4">
                    <div className="mb-3">
                        <p className="text-muted">You are closing <strong>{selectedTickets.size}</strong> ticket(s).</p>
                            </div>
                    <Row className="gy-3">
                        <Col xl={12}>
                            <Form.Label htmlFor="closure-category">Closure Category</Form.Label>
                            <Form.Select 
                                id="closure-category"
                                value={closureForm.category}
                                onChange={(e) => setClosureForm(prev => ({ ...prev, category: e.target.value }))}
                            >
                                <option value="">Select Category</option>
                                <option value="True Positive">True Positive</option>
                                <option value="False Positive">False Positive</option>
                            </Form.Select>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="closure-reason">Closure Reason</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3}
                                id="closure-reason"
                                placeholder="Enter closure reason..."
                                value={closureForm.reason}
                                onChange={(e) => setClosureForm(prev => ({ ...prev, reason: e.target.value }))}
                            />
                </Col>
            </Row>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <div className="d-flex justify-content-between w-100">
                        <SpkButton 
                            Buttonvariant="light" 
                            Buttontype="button" 
                            Customclass="btn btn-light"
                            data-bs-dismiss="modal" 
                            onClickfunc={handleClosureModalClose}
                        >
                            Cancel
                        </SpkButton>
                        <SpkButton 
                            Buttonvariant="success" 
                            Buttontype="button" 
                            Customclass="btn btn-success"
                            onClickfunc={handleClosureSubmit}
                        >
                            <i className="ri-check-line me-1"></i> Close Tickets
                        </SpkButton>
                    </div>
                </Modal.Footer>
            </Modal>
            {/* Search Help Modal */}
            <Modal show={state.showSearchHelp} centered onHide={handleSearchHelpClose} className="modal fade" id="search-help" tabIndex={-1}>
                <Modal.Header className="modal-header">
                    <Modal.Title className="modal-title h6">
                        <i className="ri-search-line me-2"></i>Search Help
                    </Modal.Title>
                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                        aria-label="Close" onClickfunc={handleSearchHelpClose} ></SpkButton>
                </Modal.Header>
                <Modal.Body className="modal-body px-4">
                    <div className="mb-4">
                        <h6 className="fw-medium mb-3">Search Syntax</h6>
                        <p className="text-muted mb-3">
                            Use <code>field:value</code> for matches, <code>-field:value</code> for exclusions. Only columns defined in column settings can be used for searches. All searches must use the <code>field:value</code> format.
                        </p>
                        
                        <h6 className="fw-medium mb-3">Examples</h6>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="border rounded p-3">
                                    <h6 className="text-primary mb-2">Basic Field Search</h6>
                                    <code>status:Active</code>
                                    <p className="text-muted small mb-0">Find tickets with status "Active"</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="border rounded p-3">
                                    <h6 className="text-danger mb-2">Negation Search</h6>
                                    <code>-severity:medium</code>
                                    <p className="text-muted small mb-0">Exclude medium severity tickets</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="border rounded p-3">
                                    <h6 className="text-success mb-2">AND Operation</h6>
                                    <code>status:Open AND -severity:low</code>
                                    <p className="text-muted small mb-0">Status is "Open" and not low severity</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="border rounded p-3">
                                    <h6 className="text-warning mb-2">OR Operation</h6>
                                    <code>status:Open OR severity:critical</code>
                                    <p className="text-muted small mb-0">Status is "Open" OR critical severity</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="alert alert-warning mt-4">
                            <h6 className="alert-heading">
                                <i className="ri-information-line me-1"></i>Important Notes
                            </h6>
                            <ul className="mb-0">
                                <li>All searches are <strong>case-insensitive</strong></li>
                                <li>Press <strong>Enter</strong> or click <strong>Search</strong> to execute</li>
                                <li>All searches must use <code>field:value</code> format - free text search is not supported</li>
                                <li>OR queries with negation fall back to AND logic due to Supabase limitations</li>
                                <li>Available searchable fields:
                                    <ul className="mt-2 mb-0">
                                        {SEARCHABLE_FIELDS.map((field, index) => (
                                            <li key={index}><code>{field}</code></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <SpkButton 
                        Buttonvariant="primary" 
                        Buttontype="button" 
                        Customclass="btn btn-primary"
                        onClickfunc={handleSearchHelpClose}
                    >
                        Got it!
                    </SpkButton>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default TicketsList;