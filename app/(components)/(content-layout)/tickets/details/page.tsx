"use client"
// Ticket Details Page - Restructured based on wireframe
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import Seo from "@/shared/layouts-components/seo/seo";
import { supabase } from "@/shared/lib/supabase";
import { useTenantContext } from "@/shared/contextapi/TenantContext";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Card, Col, Dropdown, ListGroup, Nav, Row, Tab, Spinner, Modal, Form } from "react-bootstrap";

interface TicketDetailsProps { }

interface MitreTactic {
    name: string;
    count: number;
    active: boolean;
    technique?: string;
}

interface ArtifactItem {
    value: string;
    score?: number;
    color?: string;
    detail?: string;
    alerts?: number;
}

interface ArtifactsData {
    ip_addresses?: ArtifactItem[];
    urls?: ArtifactItem[];
    domains?: ArtifactItem[];
    hashes?: ArtifactItem[];
}

interface AssetItem {
    value: string;
    alerts?: number;
    detail?: string;
}

interface ArtifactsAndAssets {
    artifacts?: ArtifactsData;
    assets?: AssetItem[];
    users?: AssetItem[];
}

interface RelatedAlert {
    time: string;
    id: string;
    name: string;
    severity: string;
    status?: string;
    closure_category?: string;
}

interface RelatedAlertsData {
    [entityType: string]: {
        [entityName: string]: RelatedAlert[];
    };
}

interface AlertAnalysisSection {
    type: 'paragraphs' | 'list';
    content: string[];
    heading: string;
}

interface AlertAnalysis {
    sections: AlertAnalysisSection[];
}

interface AlertFields {
    [key: string]: string | number | null | undefined;
}

interface TicketData {
    id: number;
    title: string;
    status: string;
    priority: string;
    severity?: string;
    tenant_id: string;
    description?: string;
    mitre?: MitreTactic[] | string;
    artifacts_and_assets?: ArtifactsAndAssets | string;
    alert_analysis?: AlertAnalysis | string;
    alert_fields?: AlertFields | string;
    related_alerts?: RelatedAlertsData | string;
    raw_logs?: unknown[] | string;
    [key: string]: any;
}

// Format a UTC datetime string to IST for display
const formatUtcToIst = (value?: string | null): string => {
    if (!value) return 'N/A';
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
        return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).replace(/\b(am|pm)\b/gi, (m) => m.toUpperCase());
    } catch {
        return value;
    }
};

// Normalize related alerts data from database format to display format
const normalizeRelatedAlerts = (data: any): RelatedAlertsData => {
    const normalized: RelatedAlertsData = {};
    
    // Iterate through each entity type (ips, urls, users, assets, hashes, domains)
    Object.keys(data).forEach((entityType) => {
        const entities = data[entityType];
        if (entities && typeof entities === 'object') {
            normalized[entityType] = {};
            
            // Iterate through each entity name
            Object.keys(entities).forEach((entityName) => {
                const alerts = entities[entityName];
                if (Array.isArray(alerts) && alerts.length > 0) {
                    normalized[entityType][entityName] = alerts.map((alert: any) => {
                        // Normalize time format (ISO to display format)
                        let timeStr = alert.time || '';
                        if (timeStr.includes('T')) {
                            // Convert ISO format (2026-02-13T15:31:32) to display format (2026-02-13 15:31:32)
                            timeStr = timeStr.replace('T', ' ').split('.')[0];
                        }
                        
                        // Normalize severity to lowercase
                        const severityStr = (alert.severity || '').toLowerCase();
                        
                        // Normalize closure_category (null to empty string)
                        const closureCategory = alert.closure_category || '';
                        
                        return {
                            time: timeStr,
                            id: String(alert.id || ''),
                            name: alert.name || '',
                            severity: severityStr,
                            status: alert.status || '',
                            closure_category: closureCategory
                        };
                    });
                }
            });
        }
    });
    
    return normalized;
};

const TicketDetails: React.FC<TicketDetailsProps> = () => {
    const searchParams = useSearchParams();
    const ticketId = searchParams.get('id');
    const { selectedTenantIds, assignedTenants } = useTenantContext();
    
    const [ticket, setTicket] = useState<TicketData | null>(null);
    const [loading, setLoading] = useState(true);
    const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('High');
    const [mitreStages, setMitreStages] = useState<MitreTactic[]>([]);
    const [status, setStatus] = useState<string>('');
    const [artifactsAndAssets, setArtifactsAndAssets] = useState<ArtifactsAndAssets | null>(null);
    const [relatedAlertsData, setRelatedAlertsData] = useState<RelatedAlertsData>({});
    const [alertAnalysis, setAlertAnalysis] = useState<AlertAnalysis | null>(null);
    const [alertFields, setAlertFields] = useState<AlertFields | null>(null);
    const [assignedToUsers, setAssignedToUsers] = useState<Array<{ value: string; label: string }>>([]);
    const [selectedAssignedTo, setSelectedAssignedTo] = useState<{ value: string; label: string } | null>(null);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [showClosureModal, setShowClosureModal] = useState(false);
    const [closureForm, setClosureForm] = useState({
        category: '',
        reason: ''
    });

    const handleSeverityChange = async (eventKey: string | null) => {
        if (!ticket || !eventKey) return;

        let newSeverity: 'Low' | 'Medium' | 'High';
        if (eventKey === 'low') {
            newSeverity = 'Low';
        } else if (eventKey === 'medium') {
            newSeverity = 'Medium';
        } else {
            newSeverity = 'High';
        }

        setSeverity(newSeverity);

        try {
            // Update severity in Supabase
            const { error } = await supabase
                .from('tickets')
                .update({ severity: newSeverity, updated_at: new Date().toISOString() })
                .eq('id', ticket.id)
                .eq('tenant_id', ticket.tenant_id);

            if (error) {
                console.error('Error updating severity:', error);
                // Revert severity on error
                if (ticket.severity) {
                    const sev = ticket.severity.toLowerCase();
                    if (sev === 'critical' || sev === 'high') {
                        setSeverity('High');
                    } else if (sev === 'medium') {
                        setSeverity('Medium');
                    } else {
                        setSeverity('Low');
                    }
                }
                alert('Failed to update severity. Please try again.');
            } else {
                // Update local ticket state
                setTicket({ ...ticket, severity: newSeverity, updated_at: new Date().toISOString() });
            }
        } catch (error) {
            console.error('Error updating severity:', error);
            // Revert severity on error
            if (ticket.severity) {
                const sev = ticket.severity.toLowerCase();
                if (sev === 'critical' || sev === 'high') {
                    setSeverity('High');
                } else if (sev === 'medium') {
                    setSeverity('Medium');
                } else {
                    setSeverity('Low');
                }
            }
            alert('Failed to update severity. Please try again.');
        }
    };

    const getSeverityVariant = () => {
        if (severity === 'High') return 'danger';
        if (severity === 'Medium') return 'orange';
        return 'success';
    };

    const getStatusVariant = () => {
        if (status.toLowerCase() === 'open') return 'light';
        return 'dark';
    };

    const handleStatusDropdownChange = async (eventKey: string | null) => {
        if (!ticket || !eventKey) return;

        const newStatus = eventKey === 'open' ? 'open' : 'closed';
        
        // If closing the ticket (or already closed and user wants to edit), show closure modal
        if (newStatus === 'closed') {
            // If ticket is already closed, populate form with existing values
            if (ticket.status === 'closed') {
                setClosureForm({
                    category: ticket.closure_category || '',
                    reason: ticket.closure_reason || ''
                });
            }
            setShowClosureModal(true);
        } else {
            // If opening, just update status directly
            await handleStatusChange({ value: newStatus });
        }
    };

    // Fetch ticket data from Supabase
    useEffect(() => {
        const fetchTicket = async () => {
            if (!ticketId) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                
                // Determine tenant filter
                let tenantFilter: string[] = [];
                if (selectedTenantIds === 'all') {
                    tenantFilter = assignedTenants.map(t => t.id);
                } else if (Array.isArray(selectedTenantIds)) {
                    tenantFilter = selectedTenantIds;
                } else if (typeof selectedTenantIds === 'string' && selectedTenantIds !== 'all') {
                    tenantFilter = [selectedTenantIds];
                }

                // Build query
                let query = supabase
                    .from('tickets')
                    .select('*')
                    .eq('id', parseInt(ticketId));

                // Apply tenant filter
                if (tenantFilter.length > 0) {
                    query = query.in('tenant_id', tenantFilter);
                }

                const { data, error } = await query.single();

                if (error) {
                    console.error('Error fetching ticket:', error);
                    setLoading(false);
                    return;
                }

                if (data) {
                    setTicket(data);
                    
                    // Set status from ticket data
                    if (data.status) {
                        setStatus(data.status);
                    }
                    
                    // Set severity from ticket data
                    if (data.severity) {
                        const sev = data.severity.toLowerCase();
                        if (sev === 'critical' || sev === 'high') {
                            setSeverity('High');
                        } else if (sev === 'medium') {
                            setSeverity('Medium');
                        } else {
                            setSeverity('Low');
                        }
                    }
                    
                    // Set initial assigned_to value
                    if (data.assigned_to) {
                        setSelectedAssignedTo({ value: data.assigned_to, label: data.assigned_to });
                    } else {
                        setSelectedAssignedTo(null);
                    }
                    
                    // Set initial closure form values if ticket is closed
                    if (data.status === 'closed') {
                        setClosureForm({
                            category: data.closure_category || '',
                            reason: data.closure_reason || ''
                        });
                    }

                    // Parse MITRE data
                    if (data.mitre) {
                        let mitreData: MitreTactic[] = [];
                        if (typeof data.mitre === 'string') {
                            try {
                                mitreData = JSON.parse(data.mitre);
                            } catch (e) {
                                console.error('Error parsing MITRE data:', e);
                            }
                        } else if (Array.isArray(data.mitre)) {
                            mitreData = data.mitre;
                        }

                        // Ensure all 12 tactics are present
                        const allTactics = [
                            'Initial Access',
                            'Execution',
                            'Persistence',
                            'Privilege Escalation',
                            'Defense Evasion',
                            'Credential Access',
                            'Discovery',
                            'Lateral Movement',
                            'Collection',
                            'Command and Control',
                            'Exfiltration',
                            'Impact'
                        ];

                        const mitreMap = new Map(mitreData.map(t => [t.name, t]));
                        const completeMitreData = allTactics.map(name => {
                            const existing = mitreMap.get(name);
                            return existing || { name, count: 0, active: false };
                        });

                        setMitreStages(completeMitreData);
                    } else {
                        // Default empty MITRE stages
                        setMitreStages([
                            { name: 'Initial Access', count: 0, active: false },
                            { name: 'Execution', count: 0, active: false },
                            { name: 'Persistence', count: 0, active: false },
                            { name: 'Privilege Escalation', count: 0, active: false },
                            { name: 'Defense Evasion', count: 0, active: false },
                            { name: 'Credential Access', count: 0, active: false },
                            { name: 'Discovery', count: 0, active: false },
                            { name: 'Lateral Movement', count: 0, active: false },
                            { name: 'Collection', count: 0, active: false },
                            { name: 'Command and Control', count: 0, active: false },
                            { name: 'Exfiltration', count: 0, active: false },
                            { name: 'Impact', count: 0, active: false }
                        ]);
                    }
                    
                    // Parse artifacts_and_assets data
                    if (data.artifacts_and_assets) {
                        let artifactsData: ArtifactsAndAssets | null = null;
                        if (typeof data.artifacts_and_assets === 'string') {
                            try {
                                artifactsData = JSON.parse(data.artifacts_and_assets);
                            } catch (e) {
                                console.error('Error parsing artifacts_and_assets data:', e);
                            }
                        } else if (typeof data.artifacts_and_assets === 'object') {
                            artifactsData = data.artifacts_and_assets;
                        }
                        setArtifactsAndAssets(artifactsData);
                    }
                    
                    // Parse alert_analysis data
                    if (data.alert_analysis) {
                        let analysisData: AlertAnalysis | null = null;
                        if (typeof data.alert_analysis === 'string') {
                            try {
                                analysisData = JSON.parse(data.alert_analysis);
                            } catch (e) {
                                console.error('Error parsing alert_analysis data:', e);
                            }
                        } else if (typeof data.alert_analysis === 'object') {
                            analysisData = data.alert_analysis;
                        }
                        setAlertAnalysis(analysisData);
                    } else {
                        setAlertAnalysis(null);
                    }
                    
                    // Parse alert_fields data
                    if (data.alert_fields) {
                        let fieldsData: AlertFields | null = null;
                        if (typeof data.alert_fields === 'string') {
                            try {
                                const parsed = JSON.parse(data.alert_fields);
                                // Only set if parsed result is an object with keys
                                if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
                                    fieldsData = parsed;
                                } else {
                                    fieldsData = null;
                                }
                            } catch (e) {
                                console.error('Error parsing alert_fields data:', e);
                                fieldsData = null;
                            }
                        } else if (typeof data.alert_fields === 'object' && Object.keys(data.alert_fields).length > 0) {
                            fieldsData = data.alert_fields;
                        } else {
                            fieldsData = null;
                        }
                        setAlertFields(fieldsData);
                    } else {
                        setAlertFields(null);
                    }
                    
                    // Parse related_alerts data
                    if (data.related_alerts) {
                        let relatedAlertsData: RelatedAlertsData = {};
                        if (typeof data.related_alerts === 'string') {
                            try {
                                const parsed = JSON.parse(data.related_alerts);
                                if (parsed && typeof parsed === 'object') {
                                    // Normalize the data structure
                                    relatedAlertsData = normalizeRelatedAlerts(parsed);
                                }
                            } catch (e) {
                                console.error('Error parsing related_alerts data:', e);
                            }
                        } else if (typeof data.related_alerts === 'object') {
                            relatedAlertsData = normalizeRelatedAlerts(data.related_alerts);
                        }
                        setRelatedAlertsData(relatedAlertsData);
                    } else {
                        setRelatedAlertsData({});
                    }
                }
            } catch (error) {
                console.error('Error fetching ticket:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTicket();
    }, [ticketId, selectedTenantIds, assignedTenants]);

    // Fetch users from user_tenants filtered by assignedTenants
    const fetchAssignedToUsers = useCallback(async () => {
        if (!assignedTenants || assignedTenants.length === 0) {
            setAssignedToUsers([]);
            return;
        }

        try {
            setLoadingUsers(true);
            const tenantIds = assignedTenants.map(t => t.id);

            // Fetch users from user_tenants where tenant_id matches assignedTenants
            const { data: userTenantsData, error: userTenantsError } = await supabase
                .from('user_tenants')
                .select('username')
                .in('tenant_id', tenantIds);

            if (userTenantsError) {
                console.error('Error fetching user tenants:', userTenantsError);
                setAssignedToUsers([]);
                return;
            }

            if (!userTenantsData || userTenantsData.length === 0) {
                setAssignedToUsers([]);
                return;
            }

            // Get unique usernames - filter out null, undefined, and empty strings
            const uniqueUsernames = [...new Set(
                userTenantsData
                    .map(ut => ut.username)
                    .filter(username => username && typeof username === 'string' && username.trim() !== '')
            )];

            // Map to options format
            const users = uniqueUsernames.map(username => ({
                value: username,
                label: username
            }));

            setAssignedToUsers(users);
        } catch (error) {
            console.error('Error fetching assigned to users:', error);
            setAssignedToUsers([]);
        } finally {
            setLoadingUsers(false);
        }
    }, [assignedTenants]);

    // Fetch users when assignedTenants changes
    useEffect(() => {
        if (assignedTenants && assignedTenants.length > 0) {
            fetchAssignedToUsers();
        } else {
            setAssignedToUsers([]);
        }
    }, [assignedTenants, fetchAssignedToUsers]);


    // Handle assigned to change
    const handleAssignedToChange = async (selectedOption: any) => {
        if (!ticket || !selectedOption) return;

        const selectedUsername = selectedOption.value;
        const previousOption = ticket.assigned_to 
            ? assignedToUsers.find(u => u.value === ticket.assigned_to) || null 
            : null;
        
        setSelectedAssignedTo(selectedOption);

        try {
            // Update assigned_to in Supabase
            const { error } = await supabase
                .from('tickets')
                .update({ assigned_to: selectedUsername, updated_at: new Date().toISOString() })
                .eq('id', ticket.id)
                .eq('tenant_id', ticket.tenant_id);

            if (error) {
                console.error('Error updating assigned_to:', error);
                setSelectedAssignedTo(previousOption);
                alert('Failed to update assigned to. Please try again.');
            } else {
                // Update local ticket state
                setTicket({ ...ticket, assigned_to: selectedUsername, updated_at: new Date().toISOString() });
            }
        } catch (error) {
            console.error('Error updating assigned_to:', error);
            setSelectedAssignedTo(previousOption);
            alert('Failed to update assigned to. Please try again.');
        }
    };

    const statusOptions = [
        { value: 'open', label: 'Open' },
        { value: 'closed', label: 'Closed' },
    ];

    // Handle status change
    const handleStatusChange = async (selectedOption: any) => {
        if (!ticket || !selectedOption) return;

        const newStatus = selectedOption.value;
        setStatus(newStatus);

        try {
            // Update status in Supabase
            const { error } = await supabase
                .from('tickets')
                .update({ status: newStatus, updated_at: new Date().toISOString() })
                .eq('id', ticket.id)
                .eq('tenant_id', ticket.tenant_id);

            if (error) {
                console.error('Error updating status:', error);
                // Revert status on error
                setStatus(ticket.status);
                alert('Failed to update status. Please try again.');
            } else {
                // Update local ticket state
                setTicket({ ...ticket, status: newStatus, updated_at: new Date().toISOString() });
            }
        } catch (error) {
            console.error('Error updating status:', error);
            setStatus(ticket.status);
            alert('Failed to update status. Please try again.');
        }
    };

    // Handle closure modal close
    const handleClosureModalClose = () => {
        setShowClosureModal(false);
        // Reset form to existing values if ticket is already closed, otherwise clear
        if (ticket && ticket.status === 'closed') {
            setClosureForm({
                category: ticket.closure_category || '',
                reason: ticket.closure_reason || ''
            });
        } else {
            setClosureForm({ category: '', reason: '' });
        }
    };

    // Handle closure form submission
    const handleClosureSubmit = async () => {
        if (!ticket) return;

        if (!closureForm.category || !closureForm.reason) {
            alert('Please fill in both Closure Category and Closure Reason');
            return;
        }

        try {
            // Update ticket with status, closure category, and reason
            const { error } = await supabase
                .from('tickets')
                .update({
                    status: 'closed',
                    closure_category: closureForm.category,
                    closure_reason: closureForm.reason,
                    updated_at: new Date().toISOString()
                })
                .eq('id', ticket.id)
                .eq('tenant_id', ticket.tenant_id);

            if (error) {
                console.error('Error closing ticket:', error);
                alert('Failed to close ticket. Please try again.');
            } else {
                // Update local ticket state
                setTicket({ 
                    ...ticket, 
                    status: 'closed',
                    closure_category: closureForm.category,
                    closure_reason: closureForm.reason,
                    updated_at: new Date().toISOString() 
                });
                setStatus('closed');
                
                // Close modal and clear form
                handleClosureModalClose();
                alert('Ticket closed successfully');
            }
        } catch (error) {
            console.error('Error closing ticket:', error);
            alert('Failed to close ticket. Please try again.');
        }
    };

    // Custom styles for smaller select boxes
    const selectStyles = {
        control: (base: any) => ({
            ...base,
            minHeight: '32px',
            height: '32px',
            fontSize: '0.75rem',
            width: '100%',
            maxWidth: '200px',
        }),
        valueContainer: (base: any) => ({
            ...base,
            height: '32px',
            padding: '0 8px',
            fontSize: '0.75rem',
        }),
        input: (base: any) => ({
            ...base,
            margin: '0px',
            padding: '0px',
            fontSize: '0.75rem',
        }),
        singleValue: (base: any) => ({
            ...base,
            fontSize: '0.75rem',
        }),
        placeholder: (base: any) => ({
            ...base,
            fontSize: '0.75rem',
        }),
        menu: (base: any) => ({
            ...base,
            fontSize: '0.75rem',
        }),
        option: (base: any) => ({
            ...base,
            fontSize: '0.75rem',
        }),
        indicatorsContainer: (base: any) => ({
            ...base,
            height: '32px',
        }),
    };

    const mitreAttackStages = [
        { value: 'initial-access', label: 'Initial Access' },
        { value: 'execution', label: 'Execution' },
        { value: 'persistence', label: 'Persistence' },
        { value: 'privilege-escalation', label: 'Privilege Escalation' },
        { value: 'defense-evasion', label: 'Defense Evasion' },
    ];

    // Calculate MITRE summary
    const activeTacticsCount = mitreStages.filter(t => t.active).length;
    const activeTechniquesCount = mitreStages.filter(t => t.active && t.count > 0).reduce((sum, t) => sum + t.count, 0);

    if (loading) {
        return (
            <Fragment>
                <Seo title="Ticket Details" />
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                    <Spinner animation="border" variant="primary" />
                </div>
            </Fragment>
        );
    }

    if (!ticket) {
        return (
            <Fragment>
                <Seo title="Ticket Details" />
                <Card className="custom-card mb-3 mt-3">
                    <Card.Body>
                        <div className="text-center py-4">
                            <p className="text-muted">Ticket not found</p>
                        </div>
                    </Card.Body>
                </Card>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Seo title="Ticket Details" />
            
            {/* Header Section */}
            <Card className="custom-card mb-3 mt-3">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col xl={8}>
                            <div className="mb-2 d-flex align-items-center gap-2">
                                <SpkButtongroup>
                                    <SpkDropdown 
                                        Togglevariant={getSeverityVariant()}
                                        Toggletext={severity}
                                        Customtoggleclass={`shadow-${getSeverityVariant()} btn-sm`}
                                        Customclass="severity-dropdown-wrapper"
                                        Size="sm"
                                        Menuas="ul"
                                        onSelectfunc={handleSeverityChange}
                                        Id="severity-dropdown"
                                    >
                                        <Dropdown.Item as="li" eventKey="high">High</Dropdown.Item>
                                        <Dropdown.Item as="li" eventKey="medium">Medium</Dropdown.Item>
                                        <Dropdown.Item as="li" eventKey="low">Low</Dropdown.Item>
                                    </SpkDropdown>
                                </SpkButtongroup>
                                <h5 className="fw-semibold mb-0">
                                    {ticket.name ? `INV-${ticket.id} : ${ticket.name}` : (ticket.title || `INV-${ticket.id}`)}
                                </h5>
                            </div>
                            <div className="mb-2">
                                <div className="fs-15 fw-medium mb-1">Description</div>
                                <p className="text-muted mb-0">
                                    {ticket.description || 'No description available.'}
                                </p>
                            </div>
                        </Col>
                        <Col xl={4} className="d-flex flex-column align-items-end pe-3">
                            <div className="mb-2" style={{ width: '150px' }}>
                                <div className="fs-13 fw-medium mb-1">Assigned To</div>
                                <SpkSelect
                                    option={assignedToUsers}
                                    getValue={selectedAssignedTo}
                                    placeholder={loadingUsers ? "Loading users..." : "Select user..."}
                                    searchable={true}
                                    clearable={false}
                                    disabled={loadingUsers || assignedToUsers.length === 0}
                                    mainClass="react-select-container"
                                    classNameprefix="react-select"
                                    styles={selectStyles}
                                    onfunchange={handleAssignedToChange}
                                />
                            </div>
                            <div style={{ width: '150px' }}>
                                <div className="fs-13 fw-medium mb-1">Status</div>
                                <SpkButtongroup>
                                    <SpkDropdown 
                                        Togglevariant={getStatusVariant()}
                                        Toggletext={status ? status.charAt(0).toUpperCase() + status.slice(1).toLowerCase() : 'Open'}
                                        Customtoggleclass={`shadow-${getStatusVariant()} btn-sm`}
                                        Customclass="status-dropdown-wrapper"
                                        Size="sm"
                                        Menuas="ul"
                                        onSelectfunc={handleStatusDropdownChange}
                                        Id="status-dropdown"
                                    >
                                        <Dropdown.Item as="li" eventKey="open">Open</Dropdown.Item>
                                        <Dropdown.Item as="li" eventKey="closed">Closed</Dropdown.Item>
                                    </SpkDropdown>
                                </SpkButtongroup>
                            </div>
                                </Col>
                    </Row>
                    <Row>
                                <Col xl={12}>
                            <div className="fs-14 fw-medium mb-2">MITRE ATT&CK® <span className="fs-11">{activeTacticsCount} Tactics and {activeTechniquesCount} Techniques</span></div>
                            <div className="d-flex align-items-center gap-0 border rounded p-2" style={{ overflowX: 'auto', width: '100%' }}>
                                {mitreStages.map((phase, index, array) => (
                                    <React.Fragment key={phase.name}>
                                        <div 
                                            className="text-center px-2" 
                                            style={{ 
                                                minWidth: phase.active ? '120px' : '80px',
                                                color: phase.active ? '#dc3545' : '#6c757d',
                                                flex: '1 1 auto'
                                            }}
                                        >
                                            <div 
                                                className="fw-semibold mb-1" 
                                                style={{ 
                                                    fontSize: '0.95rem',
                                                    color: phase.active ? '#dc3545' : '#6c757d'
                                                }}
                                            >
                                                {phase.count}
                                            </div>
                                            <div 
                                                className="fs-12 text-nowrap" 
                                                style={{ 
                                                    color: phase.active ? '#dc3545' : '#6c757d',
                                                    fontWeight: phase.active ? '500' : '400'
                                                }}
                                            >
                                                {phase.name}
                                            </div>
                                            {phase.active && phase.technique && (
                                                <div 
                                                    className="fs-10 mt-1 text-nowrap" 
                                                    style={{ 
                                                        color: '#dc3545',
                                                        fontWeight: '400'
                                                    }}
                                                >
                                                    {phase.technique}
                                                </div>
                                            )}
                                        </div>
                                        {index < array.length - 1 && (
                                            <div 
                                                className="border-start" 
                                                style={{ 
                                                    height: '40px',
                                                    borderColor: '#dee2e6'
                                                }}
                                            />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </Col>
                    </Row>
                        </Card.Body>
                    </Card>

            {/* Navigation Tabs */}
            <Card className="custom-card mb-3 overflow-hidden">
                <Tab.Container defaultActiveKey='overview'>
                    <Card.Header className="d-flex justify-content-between align-items-center p-0 border-bottom" style={{ position: 'relative', zIndex: 1, overflow: 'hidden', width: '100%' }}>
                        <div className="d-flex align-items-center flex-fill">
                            <Nav as='ul' variant="tabs" className="nav-tabs tab-style-6 border-0 d-flex" role="tablist" style={{ position: 'relative', zIndex: 1, marginBottom: 0, marginLeft: '1rem' }}>
                                <Nav.Item as='li' role="presentation">
                                    <Nav.Link as='button' eventKey='overview' className="px-4 py-2" role="tab" aria-selected="true">
                                        Overview
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' role="presentation">
                                    <Nav.Link as='button' eventKey='assets' className="px-4 py-2" role="tab" aria-selected="false">
                                        Related Alerts
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' role="presentation">
                                    <Nav.Link as='button' eventKey='logs' className="px-4 py-2" role="tab" aria-selected="false">
                                        Raw Logs
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' role="presentation">
                                    <Nav.Link as='button' eventKey='graph' className="px-4 py-2" role="tab" aria-selected="false">
                                        Alert Graph
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' role="presentation">
                                    <Nav.Link as='button' eventKey='insights' className="px-4 py-2" role="tab" aria-selected="false">
                                        Insights
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="btn-list flex-shrink-0 ms-auto pe-3">
                                <SpkButton 
                                    Buttonvariant="primary-light" 
                                    Buttontype="button" 
                                    Customclass="btn btn-wave"
                                >
                                    <i className="ri-upload-cloud-line align-middle me-1"></i>Export Logs
                                </SpkButton>
                                        </div>
                                    </div>
                    </Card.Header>
                    <Card.Body className="p-0" style={{ position: 'relative', zIndex: 0 }}>
                        <Tab.Content style={{ position: 'relative' }}>
                            <Tab.Pane eventKey='overview' className="pt-3 px-4 pb-4" role="tabpanel">
                                {/* Three Column Layout for Overview Tab */}
                                <Row>
                                    <Col xl={5}>
                                        <Card className="custom-card">
                                            <Card.Header className="py-2">
                                                <Card.Title className="mb-0">Alert Analysis</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                {alertAnalysis && alertAnalysis.sections && alertAnalysis.sections.length > 0 ? (
                                                    alertAnalysis.sections.map((section, sectionIndex) => (
                                                        <div key={sectionIndex} className={sectionIndex < alertAnalysis.sections.length - 1 ? 'mb-4' : ''}>
                                                            <h6 className="fw-medium">{section.heading}</h6>
                                                            {section.type === 'paragraphs' ? (
                                                                section.content.map((paragraph, paraIndex) => (
                                                                    <p key={paraIndex} className={paraIndex < section.content.length - 1 ? 'op-9 mb-2' : 'op-9 mb-0'}>
                                                                        {paragraph}
                                                                    </p>
                                                                ))
                                                            ) : section.type === 'list' ? (
                                                                <ListGroup as='ul' className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                                                    {section.content.map((item, itemIndex) => (
                                                                        <ListGroup.Item key={itemIndex} className="border-0 py-1">
                                                                            {item}
                                                                        </ListGroup.Item>
                                                                    ))}
                                                                </ListGroup>
                                                            ) : null}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="text-muted mb-0">No alert analysis available.</p>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3}>
                    <Card className="custom-card">
                                            <Card.Header className="py-2">
                                                <Card.Title className="mb-0">Artifacts & Assets</Card.Title>
                            </Card.Header>
                                            <Card.Body>
                                                <div className="d-flex flex-column gap-2">
                                                    {/* IP Addresses */}
                                            <div>
                                                        <h6 className="mb-2 fw-semibold fs-13">IP Addresses</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {artifactsAndAssets?.artifacts?.ip_addresses && artifactsAndAssets.artifacts.ip_addresses.length > 0 ? (
                                                        artifactsAndAssets.artifacts.ip_addresses.map((ip, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1">{ip.value}</p>
                                                                        {ip.detail && <p className="fs-11 text-muted mb-0">{ip.detail}</p>}
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        {ip.score !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className={`fs-14 fw-semibold text-${ip.color || 'primary'}`}>{ip.score}</div>
                                                                                <div className="fs-10 text-muted">Score</div>
                                                                            </div>
                                                                        )}
                                                                        {ip.alerts !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className="fs-14 fw-semibold text-primary">{ip.alerts}</div>
                                                                                <div className="fs-10 text-muted">Alerts</div>
                                                                            </div>
                                                                        )}
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                        ))
                                                    ) : (
                                                        <p className="fs-12 text-muted mb-0">No IP addresses</p>
                                                    )}
                                                </div>
                                            </div>
                                            {/* URLs */}
                                            <div>
                                                <h6 className="mb-2 fw-semibold fs-13">URLs</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {artifactsAndAssets?.artifacts?.urls && artifactsAndAssets.artifacts.urls.length > 0 ? (
                                                        artifactsAndAssets.artifacts.urls.map((url, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1 text-break">{url.value}</p>
                                                                        {url.detail && <p className="fs-11 text-muted mb-0">{url.detail}</p>}
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        {url.score !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className={`fs-14 fw-semibold text-${url.color || 'primary'}`}>{url.score}</div>
                                                                                <div className="fs-10 text-muted">Score</div>
                                                                            </div>
                                                                        )}
                                                                        {url.alerts !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className="fs-14 fw-semibold text-primary">{url.alerts}</div>
                                                                                <div className="fs-10 text-muted">Alerts</div>
                                                                            </div>
                                                                        )}
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                        ))
                                                    ) : (
                                                        <p className="fs-12 text-muted mb-0">No URLs</p>
                                                    )}
                                                </div>
                                            </div>
                                            {/* Domains */}
                                            <div>
                                                <h6 className="mb-2 fw-semibold fs-13">Domains</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {artifactsAndAssets?.artifacts?.domains && artifactsAndAssets.artifacts.domains.length > 0 ? (
                                                        artifactsAndAssets.artifacts.domains.map((domain, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1">{domain.value}</p>
                                                                        {domain.detail && <p className="fs-11 text-muted mb-0">{domain.detail}</p>}
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        {domain.score !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className={`fs-14 fw-semibold text-${domain.color || 'primary'}`}>{domain.score}</div>
                                                                                <div className="fs-10 text-muted">Score</div>
                                                                            </div>
                                                                        )}
                                                                        {domain.alerts !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className="fs-14 fw-semibold text-primary">{domain.alerts}</div>
                                                                                <div className="fs-10 text-muted">Alerts</div>
                                                                            </div>
                                                                        )}
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                        ))
                                                    ) : (
                                                        <p className="fs-12 text-muted mb-0">No domains</p>
                                                    )}
                                                </div>
                                            </div>
                                            {/* Hashes */}
                                                <div>
                                                <h6 className="mb-2 fw-semibold fs-13">Hashes</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {artifactsAndAssets?.artifacts?.hashes && artifactsAndAssets.artifacts.hashes.length > 0 ? (
                                                        artifactsAndAssets.artifacts.hashes.map((hash, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1 font-monospace">{hash.value}</p>
                                                                        {hash.detail && <p className="fs-11 text-muted mb-0">{hash.detail}</p>}
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        {hash.score !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className={`fs-14 fw-semibold text-${hash.color || 'primary'}`}>{hash.score}</div>
                                                                                <div className="fs-10 text-muted">Score</div>
                                                                            </div>
                                                                        )}
                                                                        {hash.alerts !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className="fs-14 fw-semibold text-primary">{hash.alerts}</div>
                                                                                <div className="fs-10 text-muted">Alerts</div>
                                                                            </div>
                                                                        )}
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                        ))
                                                    ) : (
                                                        <p className="fs-12 text-muted mb-0">No hashes</p>
                                                    )}
                                                </div>
                                            </div>
                                            {/* Assets */}
                                            <div>
                                                <h6 className="mb-2 fw-semibold fs-13">Assets</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {artifactsAndAssets?.assets && artifactsAndAssets.assets.length > 0 ? (
                                                        artifactsAndAssets.assets.map((asset, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1">{asset.value}</p>
                                                                        {asset.detail && <p className="fs-11 text-muted mb-0">{asset.detail}</p>}
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        {asset.alerts !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className="fs-14 fw-semibold text-primary">{asset.alerts}</div>
                                                                                <div className="fs-10 text-muted">Alerts</div>
                                                                            </div>
                                                                        )}
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                        ))
                                                    ) : (
                                                        <p className="fs-12 text-muted mb-0">No URLs</p>
                                                    )}
                                                </div>
                                            </div>
                                            {/* Users */}
                                            <div>
                                                <h6 className="mb-2 fw-semibold fs-13">Users</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {artifactsAndAssets?.users && artifactsAndAssets.users.length > 0 ? (
                                                        artifactsAndAssets.users.map((user, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1">{user.value}</p>
                                                                        {user.detail && <p className="fs-11 text-muted mb-0">{user.detail}</p>}
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        {user.alerts !== undefined && (
                                                                            <div className="text-center">
                                                                                <div className="fs-14 fw-semibold text-primary">{user.alerts}</div>
                                                                                <div className="fs-10 text-muted">Alerts</div>
                                                                            </div>
                                                                        )}
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                        ))
                                                    ) : (
                                                        <p className="fs-12 text-muted mb-0">No users</p>
                                                    )}
                                                </div>
                                            </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={4}>
                    <Card className="custom-card overflow-hidden">
                                            <Card.Header className="py-2">
                                                <Card.Title className="mb-0">Alert Details</Card.Title>
                        </Card.Header>
                                            <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap">
                                    <tr>
                                        <td><span className="fw-medium">ID :</span></td>
                                        <td>{ticket.id || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Source ID :</span></td>
                                        <td>{ticket.source_id || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Occurred At :</span></td>
                                        <td>{formatUtcToIst(ticket.occurred_at)}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Name :</span></td>
                                        <td>{ticket.name || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Severity :</span></td>
                                        <td>{ticket.severity || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Instance Name :</span></td>
                                        <td>{ticket.instance_name || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Tenant Name :</span></td>
                                        <td>{ticket.tenant_name || 'N/A'}</td>
                                    </tr>
                                    {/* Dynamic fields from alert_fields JSONB column */}
                                    {alertFields && Object.keys(alertFields).length > 0 && Object.entries(alertFields).map(([key, value]) => (
                                        <tr key={key}>
                                            <td><span className="fw-medium">{key} :</span></td>
                                            <td>
                                                {value === null || value === undefined || value === '' 
                                                    ? 'N/A' 
                                                    : typeof value === 'string' && (value.includes('T') || value.includes('-')) && !isNaN(Date.parse(value))
                                                        ? new Date(value).toLocaleString()
                                                        : String(value)
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='assets' className="pt-3 px-4 pb-4" role="tabpanel">
                                <div className="d-flex flex-column gap-4">
                                    {Object.keys(relatedAlertsData).length > 0 ? (
                                        Object.entries(relatedAlertsData).map(([entityType, entities]) => (
                                            <div key={entityType} className="d-flex flex-column gap-3">
                                                {/* Entity Type Header */}
                                                <div className="d-flex align-items-center mb-2">
                                                    <p className="mb-0 text-badge">
                                                        <span className="text fw-semibold related-alerts-text" style={{ fontSize: '1.125rem' }}>
                                                            {entityType === 'ips' ? 'IPs' : 
                                                             entityType.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                        </span>
                                                        {Object.keys(entities).length === 0 ? (
                                                            <span className="ms-2 badge rounded-pill" style={{ backgroundColor: '#6c757d', color: '#fff' }}>
                                                                {Object.keys(entities).length}
                                                            </span>
                                                        ) : (
                                                            <SpkBadge variant="danger" Pill={true} Customclass="ms-2">
                                                                {Object.keys(entities).length}
                                                            </SpkBadge>
                                                        )}
                                                    </p>
                                                </div>

                                                {/* Entities and their alerts */}
                                                {Object.entries(entities).map(([entityName, alerts]) => (
                                                    <div key={entityName} className="d-flex flex-column gap-2">
                                                        {/* Entity Name Header */}
                                                        <div className="d-flex align-items-center mb-2">
                                                            <p className="mb-0 text-badge">
                                                                <span className="text fw-medium related-alerts-text-secondary">
                                                                    <i className="ri-user-line me-2"></i>
                                                                    {entityName}
                                                                </span>
                                                                {alerts.length === 0 ? (
                                                                    <span className="ms-2 badge rounded-pill" style={{ backgroundColor: '#6c757d', color: '#fff' }}>
                                                                        {alerts.length}
                                                                    </span>
                                                                ) : (
                                                                    <SpkBadge variant="danger" Pill={true} Customclass="ms-2">
                                                                        {alerts.length}
                                                                    </SpkBadge>
                                                                )}
                                                            </p>
                                                        </div>

                                                        {/* Alerts Cards for this entity - Two Column Split View */}
                                                        {alerts.length > 0 ? (
                                                            <Row className="ms-4">
                                                                {alerts.map((alert) => (
                                                                    <Col key={alert.id} md={6} className="mb-2">
                                                                        <Card className="custom-card mb-0" style={{ 
                                                                            borderLeft: alert.severity === 'critical' ? '4px solid #dc3545' : 
                                                                                      alert.severity === 'high' ? '4px solid #dc3545' : 
                                                                                      alert.severity === 'medium' ? '4px solid #0dcaf0' : 
                                                                                      '4px solid #6c757d',
                                                                            borderTop: '1px solid #9ca3af',
                                                                            borderRight: '1px solid #9ca3af',
                                                                            borderBottom: '1px solid #9ca3af'
                                                                        }}>
                                                                            <Card.Body className="p-3">
                                                                                <div className="d-flex flex-column gap-2">
                                                                                    <div className="d-flex align-items-center gap-2 mb-2">
                                                                                        <SpkButton 
                                                                                            Buttontype="button"
                                                                                            Buttonvariant="primary"
                                                                                            Customclass="btn-sm"
                                                                                        >
                                                                                            ID: {alert.id}
                                                                                        </SpkButton>
                                                                                        <span className="text-muted fs-12">{alert.time}</span>
                                                                                        <div className="d-flex align-items-center gap-2 ms-auto">
                                                                                            {alert.status && (
                                                                                                <SpkButton 
                                                                                                    Buttontype="button"
                                                                                                    Buttonvariant="outline-light"
                                                                                                    Customclass="rounded-pill btn-sm"
                                                                                                >
                                                                                                    {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                                                                                                </SpkButton>
                                                                                            )}
                                                                                            {alert.closure_category && alert.closure_category !== '' && (
                                                                                                <SpkButton 
                                                                                                    Buttontype="button"
                                                                                                    Buttonvariant="outline-light"
                                                                                                    Customclass="rounded-pill btn-sm"
                                                                                                >
                                                                                                    {alert.closure_category}
                                                                                                </SpkButton>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                    <h6 className="fw-semibold mb-0 related-alerts-text" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{alert.name}</h6>
                                                                                </div>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Col>
                                                                ))}
                                                            </Row>
                                                        ) : (
                                                            <div className="ms-4 text-muted fs-13 py-2">
                                                                No alerts found for this entity
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-5">
                                            <i className="ri-inbox-line fs-48 text-muted mb-3 d-block"></i>
                                            <p className="text-muted mb-0">No related alerts data available</p>
                                        </div>
                                    )}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='logs' className="pt-3 px-4 pb-4" role="tabpanel">
                                <div className="d-flex flex-column gap-3">
                                    {(() => {
                                        const rawLogs = (() => {
                                            const val = ticket?.raw_logs;
                                            if (val == null) return [];
                                            if (Array.isArray(val)) return val;
                                            if (typeof val === 'string') {
                                                try { return JSON.parse(val) as unknown[]; } catch { return []; }
                                            }
                                            return [];
                                        })();
                                        if (rawLogs.length === 0) {
                                            return (
                                                <p className="text-muted mb-0">No raw logs available for this ticket.</p>
                                            );
                                        }
                                        return rawLogs.map((log, index) => (
                                            <Card key={index} className="custom-card mb-0" style={{ backgroundColor: '#000', borderColor: '#333' }}>
                                                <Card.Body className="p-3">
                                                    <pre style={{
                                                        margin: 0,
                                                        color: '#0f0',
                                                        backgroundColor: '#000',
                                                        fontFamily: 'monospace',
                                                        fontSize: '0.875rem',
                                                        whiteSpace: 'pre-wrap',
                                                        wordBreak: 'break-word',
                                                        overflowX: 'auto'
                                                    }}>
                                                        {typeof log === 'string' ? log : JSON.stringify(log, null, 2)}
                                                    </pre>
                                                </Card.Body>
                                            </Card>
                                        ));
                                    })()}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='graph' className="pt-3 px-4 pb-4" role="tabpanel">
                            </Tab.Pane>
                            <Tab.Pane eventKey='insights' className="pt-3 px-4 pb-4" role="tabpanel">
                            </Tab.Pane>
                        </Tab.Content>
                    </Card.Body>
                </Tab.Container>
            </Card>
            <style dangerouslySetInnerHTML={{__html: `
                #severity-dropdown.dropdown-toggle {
                    padding-top: 0.25rem !important;
                    padding-bottom: 0.25rem !important;
                    line-height: 1.4 !important;
                    min-height: 28px !important;
                }
                /* Related Alerts Text Colors - Light Mode (default) */
                .related-alerts-text {
                    color: #000 !important;
                }
                .related-alerts-text-secondary {
                    color: #333 !important;
                }
                /* Related Alerts Text Colors - Dark Mode */
                [data-theme-mode="dark"] .related-alerts-text {
                    color: #fff !important;
                }
                [data-theme-mode="dark"] .related-alerts-text-secondary {
                    color: rgba(255, 255, 255, 0.7) !important;
                }
                /* Assigned To Dropdown Dark Mode Styles */
                [data-theme-mode="dark"] .react-select-container .react-select__control {
                    background-color: #1e293b !important;
                    border-color: #334155 !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__control:hover {
                    border-color: #475569 !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__single-value {
                    color: #fff !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__placeholder {
                    color: #94a3b8 !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__input-container {
                    color: #fff !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__menu {
                    background-color: #1e293b !important;
                    border-color: #334155 !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__menu-list {
                    background-color: #1e293b !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__option {
                    background-color: #1e293b !important;
                    color: #fff !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__option:hover {
                    background-color: #334155 !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__option--is-focused {
                    background-color: #334155 !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__option--is-selected {
                    background-color: #3b82f6 !important;
                    color: #fff !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__indicator {
                    color: #94a3b8 !important;
                }
                [data-theme-mode="dark"] .react-select-container .react-select__indicator:hover {
                    color: #fff !important;
                }
            `}} />
            
            {/* Closure Modal */}
            <Modal show={showClosureModal} centered onHide={handleClosureModalClose} className="modal fade" id="closure-modal" tabIndex={-1}>
                <Modal.Header className="modal-header">
                    <Modal.Title className="modal-title h6">Close Ticket</Modal.Title>
                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                        aria-label="Close" onClickfunc={handleClosureModalClose} ></SpkButton>
                </Modal.Header>
                <Modal.Body className="modal-body px-4">
                    <div className="mb-3">
                        <p className="text-muted">You are closing ticket <strong>INV-{ticket?.id}</strong>.</p>
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
                            <i className="ri-check-line me-1"></i> Close Ticket
                        </SpkButton>
                    </div>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default TicketDetails;
