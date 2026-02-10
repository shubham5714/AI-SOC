"use client"
// Ticket Details Page - Restructured based on wireframe
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import Seo from "@/shared/layouts-components/seo/seo";
import { supabase } from "@/shared/lib/supabase";
import { useTenantContext } from "@/shared/contextapi/TenantContext";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useState, useEffect } from "react";
import { Card, Col, Dropdown, ListGroup, Nav, Row, Tab, Spinner } from "react-bootstrap";

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
    [key: string]: any;
}

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
        await handleStatusChange({ value: newStatus });
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
                }
            } catch (error) {
                console.error('Error fetching ticket:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTicket();
    }, [ticketId, selectedTenantIds, assignedTenants]);

    // Initialize sample related alerts data
    useEffect(() => {
        const sampleData: RelatedAlertsData = {
            users: {
                shubham: [
                    {
                        time: "2026-02-06 10:22:42",
                        id: "11",
                        name: "GSOC-126-FW-Threat-Listed IP Initiated Inbound Connection",
                        severity: "high"
                    },
                    {
                        time: "2026-02-06 10:25:15",
                        id: "12",
                        name: "Multiple Failed Login Attempts",
                        severity: "high"
                    },
                    {
                        time: "2026-02-06 11:30:20",
                        id: "13",
                        name: "Unusual Access Pattern Detected",
                        severity: "medium"
                    },
                    {
                        time: "2026-02-06 12:15:45",
                        id: "14",
                        name: "Privilege Escalation Attempt",
                        severity: "critical"
                    }
                ],
                "john.doe@example.com": [
                    {
                        time: "2026-02-06 09:10:30",
                        id: "15",
                        name: "Data Exfiltration Attempt",
                        severity: "high"
                    },
                    {
                        time: "2026-02-06 14:20:10",
                        id: "16",
                        name: "Malware Detection",
                        severity: "high"
                    }
                ],
                "jane.smith@example.com": [
                    {
                        time: "2026-02-06 08:45:22",
                        id: "17",
                        name: "Suspicious Network Traffic",
                        severity: "medium"
                    }
                ]
            },
            "ip_addresses": {
                "192.168.1.100": [
                    {
                        time: "2026-02-06 10:30:00",
                        id: "18",
                        name: "Port Scan Detected",
                        severity: "high"
                    },
                    {
                        time: "2026-02-06 11:00:15",
                        id: "19",
                        name: "Brute Force Attack",
                        severity: "critical"
                    }
                ],
                "10.0.0.45": [
                    {
                        time: "2026-02-06 09:20:30",
                        id: "20",
                        name: "Suspicious Network Traffic",
                        severity: "medium"
                    }
                ]
            }
        };
        setRelatedAlertsData(sampleData);
    }, []);


    // Static data for dropdowns
    const assignedToOptions = [
        { value: 'user1', label: 'John Doe' },
        { value: 'user2', label: 'Jane Smith' },
        { value: 'user3', label: 'Mike Johnson' },
    ];

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
                                    option={assignedToOptions}
                                    defaultvalue={assignedToOptions[0]}
                                    placeholder="Select user..."
                                    searchable={true}
                                    clearable={false}
                                    mainClass="react-select-container"
                                    classNameprefix="react-select"
                                    styles={selectStyles}
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
                                                            <td><span className="fw-medium">Alert ID :</span></td>
                                                            <td>{ticket.name ? `INV-${ticket.id} : ${ticket.name}` : (ticket.id || '-')}</td>
                                    </tr>
                                    <tr>
                                                            <td><span className="fw-medium">Alert Tags :</span></td>
                                                            <td>{ticket.tags || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                                            <td><span className="fw-medium">Event Type :</span></td>
                                                            <td>{ticket.event_type || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                                            <td><span className="fw-medium">Assigned By :</span></td>
                                                            <td>{ticket.assigned_by || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                                            <td><span className="fw-medium">Progress :</span></td>
                                                            <td>{ticket.status || '-'}</td>
                                    </tr>
                                    <tr>
                                                            <td><span className="fw-medium">Alert Status :</span></td>
                                                            <td>{ticket.status || '-'}</td>
                                    </tr>
                                    <tr>
                                                            <td><span className="fw-medium">Alert Priority :</span></td>
                                                            <td>{ticket.priority || '-'}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">End Date :</span></td>
                                                            <td>{ticket.end_date ? new Date(ticket.end_date).toLocaleDateString() : 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Assigned To :</span></td>
                                                            <td>{ticket.assigned_to || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Last Updated Date :</span></td>
                                                            <td>{ticket.updated_at ? new Date(ticket.updated_at).toLocaleString() : 'N/A'}</td>
                                    </tr>
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
                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                    <h5 className="fw-semibold mb-0 related-alerts-text">
                                                        {entityType === 'ip_addresses' ? 'IP Addresses' : 
                                                         entityType.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                    </h5>
                                                    <SpkButton 
                                                        Buttontype="button"
                                                        Buttonvariant="dark"
                                                        Customclass="btn-sm"
                                                        Style={{ minWidth: '100px', width: '100px' }}
                                                    >
                                                        {Object.keys(entities).length} {Object.keys(entities).length === 1 ? 'Entity' : 'Entities'}
                                                    </SpkButton>
                                                </div>

                                                {/* Entities and their alerts */}
                                                {Object.entries(entities).map(([entityName, alerts]) => (
                                                    <div key={entityName} className="d-flex flex-column gap-2">
                                                        {/* Entity Name Header */}
                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                            <h6 className="fw-medium mb-0 related-alerts-text-secondary">
                                                                <i className="ri-user-line me-2"></i>
                                                                {entityName}
                                                            </h6>
                                                            <SpkButton 
                                                                Buttontype="button"
                                                                Buttonvariant="dark"
                                                                Customclass="btn-sm"
                                                                Style={{ minWidth: '100px', width: '100px' }}
                                                            >
                                                                {alerts.length} Alert{alerts.length !== 1 ? 's' : ''}
                                                            </SpkButton>
                                                        </div>

                                                        {/* Alerts Cards for this entity - Two Column Split View */}
                                                        {alerts.length > 0 ? (
                                                            <Row className="ms-4">
                                                                {alerts.map((alert, index) => (
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
                                    {[
                                        {
                                            timestamp: "2024-06-18T10:30:45.123Z",
                                            level: "WARNING",
                                            source: "firewall",
                                            message: "Multiple failed login attempts detected",
                                            data: {
                                                "ip_address": "192.168.1.100",
                                                "username": "admin",
                                                "failed_attempts": 5,
                                                "event_type": "authentication_failure",
                                                "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                                                "geolocation": {
                                                    "country": "US",
                                                    "city": "New York",
                                                    "latitude": 40.7128,
                                                    "longitude": -74.0060
                                                }
                                            }
                                        },
                                        {
                                            timestamp: "2024-06-18T10:31:12.456Z",
                                            level: "ERROR",
                                            source: "ids",
                                            message: "Suspicious network traffic pattern detected",
                                            data: {
                                                "src_ip": "10.0.0.45",
                                                "dst_ip": "172.16.0.20",
                                                "protocol": "TCP",
                                                "port": 443,
                                                "bytes_sent": 1024000,
                                                "bytes_received": 512000,
                                                "duration_seconds": 45,
                                                "threat_score": 85,
                                                "signature": "ET MALWARE Known Malicious IP"
                                            }
                                        },
                                        {
                                            timestamp: "2024-06-18T10:32:05.789Z",
                                            level: "INFO",
                                            source: "endpoint",
                                            message: "File hash detected in threat intelligence database",
                                            data: {
                                                "file_path": "/var/tmp/suspicious_file.exe",
                                                "file_hash": "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
                                                "hash_type": "SHA256",
                                                "file_size": 2621440,
                                                "threat_intel_match": true,
                                                "threat_feed": "VirusTotal",
                                                "detection_count": 42,
                                                "severity": "HIGH"
                                            }
                                        }
                                    ].map((log, index) => (
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
                                                    {JSON.stringify(log, null, 2)}
                                                </pre>
                                            </Card.Body>
                                        </Card>
                                    ))}
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
                    padding-top: 0.15rem !important;
                    padding-bottom: 0.15rem !important;
                    line-height: 1.3 !important;
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
            `}} />
        </Fragment>
    );
};

export default TicketDetails;
