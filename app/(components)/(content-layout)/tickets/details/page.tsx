"use client"
// Ticket Details Page - Restructured based on wireframe
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
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

interface TicketData {
    id: number;
    title: string;
    status: string;
    priority: string;
    severity?: string;
    tenant_id: string;
    description?: string;
    mitre?: MitreTactic[] | string;
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
        if (severity === 'Medium') return 'warning';
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
                }
            } catch (error) {
                console.error('Error fetching ticket:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTicket();
    }, [ticketId, selectedTenantIds, assignedTenants]);
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
                                        Assets & Artifacts
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
                                                <h6 className="fw-medium">Alert Description</h6>
                                                <p className="op-9">We are seeking a skilled Frontend Developer to join our dynamic team. In this role, you will be responsible for implementing visual elements that users see and interact with in web applications. You will work closely with designers and backend developers to bridge the gap between graphical design and technical implementation, ensuring an optimized and responsive user experience.</p>
                                                <p className="mb-4 op-9">As a Frontend Developer, you will use your expertise in HTML, CSS, and JavaScript frameworks to translate UI/UX design wireframes into high-quality code. You will collaborate with cross-functional teams to deliver scalable and maintainable frontend solutions that meet business objectives and user needs.</p>

                                                <h6 className="fw-medium">Key Responsibilities</h6>
                                                <ListGroup as='ol' className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                                    <ListGroup.Item className="border-0 py-1">Develop responsive web pages and web applications based on provided designs and specifications.</ListGroup.Item>
                                                    <ListGroup.Item className="border-0 py-1">Collaborate with UX/UI designers and backend developers to deliver seamless user interfaces.</ListGroup.Item>
                                                    <ListGroup.Item className="border-0 py-1">Optimize application performance and ensure cross-browser compatibility.</ListGroup.Item>
                                                    <ListGroup.Item className="border-0 py-1">Implement front-end components and libraries using modern frameworks such as React, Angular, or Vue.js.</ListGroup.Item>
                                                    <ListGroup.Item className="border-0 py-1">Conduct thorough testing of user interfaces to identify and fix UI issues and bugs.</ListGroup.Item>
                                                </ListGroup>
                                                <h6 className="fw-medium">Requirements</h6>
                                                <ListGroup as='ul' className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                                    <ListGroup.Item className="border-0 py-1">Bachelor's degree in Computer Science, Engineering, or a related field, or equivalent practical experience.</ListGroup.Item>
                                                    <ListGroup.Item className="border-0 py-1">Proven experience as a Frontend Developer or similar role, with a strong portfolio demonstrating frontend development skills.</ListGroup.Item>
                                                    <ListGroup.Item className="border-0 py-1">Proficiency in HTML5, CSS3, JavaScript, and frontend frameworks/libraries (e.g., React, Angular, Vue.js).</ListGroup.Item>
                                                    <ListGroup.Item className="border-0 py-1">Experience with version control systems (e.g., Git) and modern development workflows.</ListGroup.Item>
                                                    <ListGroup.Item className="border-0 py-1">Understanding of responsive design principles and mobile-first approach.</ListGroup.Item>
                            </ListGroup>
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
                                                    {[
                                                        { value: '192.168.1.100', score: 85, color: 'danger', detail: 'Owner: Internal Network', alerts: 4 },
                                                        { value: '10.0.0.45', score: 45, color: 'warning', detail: 'Owner: External IP', alerts: 2 },
                                                        { value: '172.16.0.20', score: 25, color: 'success', detail: 'Owner: Private Range', alerts: 1 },
                                                    ].map((ip, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1">{ip.value}</p>
                                                                        <p className="fs-11 text-muted mb-0">{ip.detail}</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="text-center">
                                                                            <div className={`fs-14 fw-semibold text-${ip.color}`}>{ip.score}</div>
                                                                            <div className="fs-10 text-muted">Score</div>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <div className="fs-14 fw-semibold text-primary">{ip.alerts}</div>
                                                                            <div className="fs-10 text-muted">Alerts</div>
                                                                        </div>
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* URLs */}
                                            <div>
                                                <h6 className="mb-2 fw-semibold fs-13">URLs</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {[
                                                        { value: 'malicious-site.com/payload', score: 92, color: 'danger', detail: 'Signed by: Unknown Certificate', alerts: 6 },
                                                        { value: 'suspicious-domain.net/api', score: 60, color: 'warning', detail: 'Signed by: Self-Signed Cert', alerts: 3 },
                                                    ].map((url, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1 text-break">{url.value}</p>
                                                                        <p className="fs-11 text-muted mb-0">{url.detail}</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="text-center">
                                                                            <div className={`fs-14 fw-semibold text-${url.color}`}>{url.score}</div>
                                                                            <div className="fs-10 text-muted">Score</div>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <div className="fs-14 fw-semibold text-primary">{url.alerts}</div>
                                                                            <div className="fs-10 text-muted">Alerts</div>
                                                                        </div>
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Domains */}
                                            <div>
                                                <h6 className="mb-2 fw-semibold fs-13">Domains</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {[
                                                        { value: 'evil-domain.com', score: 88, color: 'danger', detail: 'Registrar: Unknown, Created: 2023', alerts: 9 },
                                                        { value: 'suspicious-site.net', score: 55, color: 'warning', detail: 'Registrar: GoDaddy, Created: 2022', alerts: 4 },
                                                    ].map((domain, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1">{domain.value}</p>
                                                                        <p className="fs-11 text-muted mb-0">{domain.detail}</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="text-center">
                                                                            <div className={`fs-14 fw-semibold text-${domain.color}`}>{domain.score}</div>
                                                                            <div className="fs-10 text-muted">Score</div>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <div className="fs-14 fw-semibold text-primary">{domain.alerts}</div>
                                                                            <div className="fs-10 text-muted">Alerts</div>
                                                                        </div>
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Hashes */}
                                                <div>
                                                <h6 className="mb-2 fw-semibold fs-13">Hashes</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {[
                                                        { value: 'a1b2c3d4e5f6...7890', score: 95, color: 'danger', detail: 'Type: SHA256, Size: 2.5MB', alerts: 11 },
                                                        { value: 'f6e5d4c3b2a1...0987', score: 50, color: 'warning', detail: 'Type: MD5, Size: 1.2MB', alerts: 5 },
                                                    ].map((hash, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1 font-monospace">{hash.value}</p>
                                                                        <p className="fs-11 text-muted mb-0">{hash.detail}</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="text-center">
                                                                            <div className={`fs-14 fw-semibold text-${hash.color}`}>{hash.score}</div>
                                                                            <div className="fs-10 text-muted">Score</div>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <div className="fs-14 fw-semibold text-primary">{hash.alerts}</div>
                                                                            <div className="fs-10 text-muted">Alerts</div>
                                                                        </div>
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Assets */}
                                            <div>
                                                <h6 className="mb-2 fw-semibold fs-13">Assets</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {[
                                                        { value: 'Server-Web-01', alerts: 5, detail: 'Type: Web Server, Location: Data Center A' },
                                                        { value: 'Workstation-Admin-02', alerts: 3, detail: 'Type: Workstation, Location: Office Floor 3' },
                                                        { value: 'Router-Main-Gateway', alerts: 8, detail: 'Type: Network Device, Location: Network Room' },
                                                    ].map((asset, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1">{asset.value}</p>
                                                                        <p className="fs-11 text-muted mb-0">{asset.detail}</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="text-center">
                                                                            <div className="fs-14 fw-semibold text-primary">{asset.alerts}</div>
                                                                            <div className="fs-10 text-muted">Alerts</div>
                                                                        </div>
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Users */}
                                            <div>
                                                <h6 className="mb-2 fw-semibold fs-13">Users</h6>
                                                <div className="d-flex flex-column gap-2">
                                                    {[
                                                        { value: 'john.doe@company.com', alerts: 12, detail: 'Role: Administrator, Department: IT' },
                                                        { value: 'jane.smith@company.com', alerts: 7, detail: 'Role: Analyst, Department: Security' },
                                                        { value: 'admin@company.com', alerts: 15, detail: 'Role: System Admin, Department: IT' },
                                                    ].map((user, index) => (
                                                        <Card key={index} className="border custom-card mb-0">
                                                            <Card.Body className="py-3 px-3">
                                                                <div className="d-flex justify-content-between align-items-start">
                                                                    <div className="flex-fill">
                                                                        <p className="fs-13 fw-medium mb-1 lh-1">{user.value}</p>
                                                                        <p className="fs-11 text-muted mb-0">{user.detail}</p>
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <div className="text-center">
                                                                            <div className="fs-14 fw-semibold text-primary">{user.alerts}</div>
                                                                            <div className="fs-10 text-muted">Alerts</div>
                                                                        </div>
                                                                        <i className="ri-add-line fs-18 text-muted"></i>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
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
            `}} />
        </Fragment>
    );
};

export default TicketDetails;
