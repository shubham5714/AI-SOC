import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, Form, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const SpkSelect = dynamic(() => import('@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect'), { ssr: false });
const SpkMultiselect = dynamic(() => import('@/shared/@spk-reusable-components/reusable-plugins/spk-multiselect'), { ssr: false });
import { supabase } from '@/shared/lib/supabase';
import { useTenantContext } from '@/shared/contextapi/TenantContext';
import Swal from 'sweetalert2';

// Industry options
const IndustryOptions = [
    { value: "Technology", label: "Technology" },
    { value: "Finance", label: "Finance" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Retail", label: "Retail" },
    { value: "Education", label: "Education" },
    { value: "Government", label: "Government" },
    { value: "Energy", label: "Energy" },
    { value: "Telecommunications", label: "Telecommunications" },
    { value: "Other", label: "Other" },
];

// Business locations options - Well-known countries
const BusinessLocationsOptions = [
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Canada", label: "Canada" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
    { value: "Italy", label: "Italy" },
    { value: "Spain", label: "Spain" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Belgium", label: "Belgium" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Austria", label: "Austria" },
    { value: "Sweden", label: "Sweden" },
    { value: "Norway", label: "Norway" },
    { value: "Denmark", label: "Denmark" },
    { value: "Finland", label: "Finland" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Ireland", label: "Ireland" },
    { value: "Japan", label: "Japan" },
    { value: "China", label: "China" },
    { value: "India", label: "India" },
    { value: "South Korea", label: "South Korea" },
    { value: "Singapore", label: "Singapore" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Taiwan", label: "Taiwan" },
    { value: "Thailand", label: "Thailand" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Philippines", label: "Philippines" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Israel", label: "Israel" },
    { value: "Turkey", label: "Turkey" },
    { value: "South Africa", label: "South Africa" },
    { value: "Egypt", label: "Egypt" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Kenya", label: "Kenya" },
    { value: "Brazil", label: "Brazil" },
    { value: "Mexico", label: "Mexico" },
    { value: "Argentina", label: "Argentina" },
    { value: "Chile", label: "Chile" },
    { value: "Colombia", label: "Colombia" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Russia", label: "Russia" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Greece", label: "Greece" },
    { value: "Romania", label: "Romania" },
    { value: "Hungary", label: "Hungary" },
];

// Timezone options
const TimezoneOptions = [
    { value: "UTC", label: "UTC (Coordinated Universal Time)" },
    { value: "America/New_York", label: "EST (Eastern Standard Time)" },
    { value: "America/Chicago", label: "CST (Central Standard Time)" },
    { value: "America/Denver", label: "MST (Mountain Standard Time)" },
    { value: "America/Los_Angeles", label: "PST (Pacific Standard Time)" },
    { value: "Europe/London", label: "GMT (Greenwich Mean Time)" },
    { value: "Europe/Paris", label: "CET (Central European Time)" },
    { value: "Asia/Tokyo", label: "JST (Japan Standard Time)" },
    { value: "Asia/Shanghai", label: "CST (China Standard Time)" },
    { value: "Asia/Dubai", label: "GST (Gulf Standard Time)" },
    { value: "Australia/Sydney", label: "AEST (Australian Eastern Standard Time)" },
];

// Environment options
const EnvironmentOptions = [
    { value: "on_prem", label: "On-Premises" },
    { value: "cloud", label: "Cloud" },
    { value: "hybrid", label: "Hybrid" },
];

// Cloud provider options
const CloudProviderOptions = [
    { value: "AWS", label: "Amazon Web Services (AWS)" },
    { value: "Azure", label: "Microsoft Azure" },
    { value: "GCP", label: "Google Cloud Platform (GCP)" },
    { value: "Oracle Cloud", label: "Oracle Cloud" },
    { value: "IBM Cloud", label: "IBM Cloud" },
    { value: "Alibaba Cloud", label: "Alibaba Cloud" },
    { value: "DigitalOcean", label: "DigitalOcean" },
    { value: "Vultr", label: "Vultr" },
    { value: "Linode", label: "Linode" },
    { value: "Other", label: "Other" },
];

// Form data interface
interface ClientProfileData {
    organization_name: string;
    industry: string;
    business_locations: string[];
    timezone: string;
}

interface NetworkInfrastructureData {
    public_ip_ranges: string[];
    ipv6_enabled: boolean;
    flow_monitoring_enabled: boolean;
    environment: string;
    cloud_providers: string[];
    remote_access: {
        vpn_solution: string;
        ztna_deployed: boolean;
        sase_deployed: boolean;
    };
}

export default function EnvironmentContextWizard() {
    const { assignedTenants, selectedTenantIds } = useTenantContext();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});
    const [saving, setSaving] = React.useState(false);
    const [isFinished, setIsFinished] = React.useState(false);
    
    // Form state for client profile
    const [clientProfile, setClientProfile] = React.useState<ClientProfileData>({
        organization_name: "",
        industry: "",
        business_locations: [],
        timezone: "",
    });

    // Form state for network and infrastructure
    const [networkInfrastructure, setNetworkInfrastructure] = React.useState<NetworkInfrastructureData>({
        public_ip_ranges: [],
        ipv6_enabled: false,
        flow_monitoring_enabled: false,
        environment: "",
        cloud_providers: [],
        remote_access: {
            vpn_solution: "",
            ztna_deployed: false,
            sase_deployed: false,
        },
    });

    // Separate state for IP ranges input to allow typing commas
    const [ipRangesInput, setIpRangesInput] = React.useState<string>('');

    // Get current tenant ID
    const getCurrentTenantId = (): string | null => {
        if (!assignedTenants?.length) return null;
        
        if (selectedTenantIds === 'all') {
            return assignedTenants[0]?.id || null;
        } else if (Array.isArray(selectedTenantIds) && selectedTenantIds.length > 0) {
            return selectedTenantIds[0];
        } else if (typeof selectedTenantIds === 'string' && selectedTenantIds !== 'all') {
            return selectedTenantIds;
        }
        return assignedTenants[0]?.id || null;
    };

    // Load existing client profile data from Supabase
    React.useEffect(() => {
        const loadClientProfile = async () => {
            const tenantId = getCurrentTenantId();
            if (!tenantId) {
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('tenants')
                    .select('client_profile')
                    .eq('id', tenantId)
                    .single();

                if (error) {
                    console.error('Error loading client profile:', error);
                    return;
                }

                if (data && data.client_profile) {
                    const profile = data.client_profile;
                    setClientProfile({
                        organization_name: profile.organization_name || '',
                        industry: profile.industry || '',
                        business_locations: profile.business_locations || [],
                        timezone: profile.timezone || '',
                    });

                    // Mark step as completed if data exists
                    if (profile.organization_name || profile.industry || 
                        (profile.business_locations && profile.business_locations.length > 0) || 
                        profile.timezone) {
                        setCompleted(prev => ({ ...prev, 0: true }));
                    }
                }
            } catch (error) {
                console.error('Exception loading client profile:', error);
            }
        };

        loadClientProfile();
    }, [selectedTenantIds, assignedTenants]);

    // Load existing network and infrastructure data from Supabase
    React.useEffect(() => {
        const loadNetworkInfrastructure = async () => {
            const tenantId = getCurrentTenantId();
            if (!tenantId) {
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('tenants')
                    .select('network_and_infrastructure')
                    .eq('id', tenantId)
                    .single();

                if (error) {
                    console.error('Error loading network and infrastructure:', error);
                    return;
                }

                if (data && data.network_and_infrastructure) {
                    const networkData = data.network_and_infrastructure;
                    const ipRanges = networkData.public_ip_ranges || [];
                    setNetworkInfrastructure({
                        public_ip_ranges: ipRanges,
                        ipv6_enabled: networkData.ipv6_enabled || false,
                        flow_monitoring_enabled: networkData.flow_monitoring_enabled || false,
                        environment: networkData.environment || "",
                        cloud_providers: networkData.cloud_providers || [],
                        remote_access: {
                            vpn_solution: networkData.remote_access?.vpn_solution || "",
                            ztna_deployed: networkData.remote_access?.ztna_deployed || false,
                            sase_deployed: networkData.remote_access?.sase_deployed || false,
                        },
                    });
                    // Set the raw input value for display
                    setIpRangesInput(ipRanges.join(', '));
                    // Set the raw input value for display
                    setIpRangesInput(ipRanges.join(', '));

                    // Mark step as completed if data exists
                    if (networkData.environment || networkData.cloud_providers?.length > 0) {
                        setCompleted(prev => ({ ...prev, 1: true }));
                    }
                }
            } catch (error) {
                console.error('Exception loading network and infrastructure:', error);
            }
        };

        loadNetworkInfrastructure();
    }, [selectedTenantIds, assignedTenants]);

    // Save client profile to Supabase
    const saveClientProfile = async (): Promise<boolean> => {
        const tenantId = getCurrentTenantId();
        if (!tenantId) {
            Swal.fire({
                title: "No Tenant Selected",
                text: "Please select a tenant first.",
                icon: "question"
            });
            return false;
        }

        setSaving(true);
        try {
            const profileData = {
                organization_name: clientProfile.organization_name || '',
                industry: clientProfile.industry || '',
                business_locations: clientProfile.business_locations || [],
                timezone: clientProfile.timezone || '',
            };

            console.log('Saving client profile:', {
                tenantId,
                profileData
            });

            // Update the tenants table with client_profile column
            const { data, error } = await supabase
                .from('tenants')
                .update({
                    client_profile: profileData
                })
                .eq('id', tenantId)
                .select();

            if (error) {
                console.error('Supabase error details:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code
                });
                return false;
            }

            console.log('Client profile saved successfully:', data);

            // Mark step as completed
            const newCompleted = { ...completed };
            newCompleted[0] = true;
            setCompleted(newCompleted);
            
            return true;
        } catch (error: any) {
            console.error('Exception saving client profile:', {
                error,
                message: error?.message,
                stack: error?.stack
            });
            return false;
        } finally {
            setSaving(false);
        }
    };

    // Save network and infrastructure to Supabase
    const saveNetworkInfrastructure = async (): Promise<boolean> => {
        const tenantId = getCurrentTenantId();
        if (!tenantId) {
            Swal.fire({
                title: "No Tenant Selected",
                text: "Please select a tenant first.",
                icon: "question"
            });
            return false;
        }

        setSaving(true);
        try {
            const networkData = {
                public_ip_ranges: networkInfrastructure.public_ip_ranges || [],
                ipv6_enabled: networkInfrastructure.ipv6_enabled || false,
                flow_monitoring_enabled: networkInfrastructure.flow_monitoring_enabled || false,
                environment: networkInfrastructure.environment || "",
                cloud_providers: networkInfrastructure.cloud_providers || [],
                remote_access: {
                    vpn_solution: networkInfrastructure.remote_access.vpn_solution || "",
                    ztna_deployed: networkInfrastructure.remote_access.ztna_deployed || false,
                    sase_deployed: networkInfrastructure.remote_access.sase_deployed || false,
                },
            };

            console.log('Saving network and infrastructure:', {
                tenantId,
                networkData
            });

            // Update the tenants table with network_and_infrastructure column
            const { data, error } = await supabase
                .from('tenants')
                .update({
                    network_and_infrastructure: networkData
                })
                .eq('id', tenantId)
                .select();

            if (error) {
                console.error('Supabase error details:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code
                });
                return false;
            }

            console.log('Network and infrastructure saved successfully:', data);

            // Mark step as completed
            const newCompleted = { ...completed };
            newCompleted[1] = true;
            setCompleted(newCompleted);
            
            return true;
        } catch (error: any) {
            console.error('Exception saving network and infrastructure:', {
                error,
                message: error?.message,
                stack: error?.stack
            });
            return false;
        } finally {
            setSaving(false);
        }
    };

    // Handle input changes
    const handleOrganizationNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClientProfile(prev => ({
            ...prev,
            organization_name: e.target.value
        }));
    };

    const handleIndustryChange = (selected: any) => {
        setClientProfile(prev => ({
            ...prev,
            industry: selected ? selected.value : ""
        }));
    };

    const handleBusinessLocationsChange = (selected: any[]) => {
        const locations = selected.map(item => {
            // SpkMultiselect returns option objects with value and label
            if (item && typeof item === 'object' && 'value' in item) {
                return item.value;
            }
            return item;
        });
        setClientProfile(prev => ({
            ...prev,
            business_locations: locations
        }));
    };

    const handleTimezoneChange = (selected: any) => {
        setClientProfile(prev => ({
            ...prev,
            timezone: selected ? selected.value : ""
        }));
    };

    // Network & Infrastructure handlers
    const handlePublicIpRangesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Store raw input value to allow typing commas
        setIpRangesInput(value);
        // Parse and store the array of IP ranges
        const ranges = value.split(',').map(r => r.trim()).filter(r => r.length > 0);
        setNetworkInfrastructure(prev => ({
            ...prev,
            public_ip_ranges: ranges
        }));
    };

    const handleIpv6EnabledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNetworkInfrastructure(prev => ({
            ...prev,
            ipv6_enabled: e.target.checked
        }));
    };

    const handleFlowMonitoringEnabledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNetworkInfrastructure(prev => ({
            ...prev,
            flow_monitoring_enabled: e.target.checked
        }));
    };

    const handleEnvironmentChange = (selected: any) => {
        setNetworkInfrastructure(prev => ({
            ...prev,
            environment: selected ? selected.value : ""
        }));
    };

    const handleCloudProvidersChange = (selected: any[]) => {
        const providers = selected.map(item => {
            if (item && typeof item === 'object' && 'value' in item) {
                return item.value;
            }
            return item;
        });
        setNetworkInfrastructure(prev => ({
            ...prev,
            cloud_providers: providers
        }));
    };

    const handleVpnSolutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNetworkInfrastructure(prev => ({
            ...prev,
            remote_access: {
                ...prev.remote_access,
                vpn_solution: e.target.value
            }
        }));
    };

    const handleZtnaDeployedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNetworkInfrastructure(prev => ({
            ...prev,
            remote_access: {
                ...prev.remote_access,
                ztna_deployed: e.target.checked
            }
        }));
    };

    const handleSaseDeployedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNetworkInfrastructure(prev => ({
            ...prev,
            remote_access: {
                ...prev.remote_access,
                sase_deployed: e.target.checked
            }
        }));
    };

    // Create steps with form data
    const steps = [
        {
            label: 'Client Profile',
            description: (
                <div className='wizard-step'>
                    <div className="wizard-content container">
                        <Col xl={12}>
                            <div className="register-page">
                                <div className="mb-3">Client Profile Information:</div>
                                <Row className="gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="organization_name" className="form-label">
                                            Organization Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="organization_name"
                                            className="form-control"
                                            placeholder="Enter Organization Name"
                                            value={clientProfile.organization_name}
                                            onChange={handleOrganizationNameChange}
                                            required
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">
                                            Industry <span className="text-danger">*</span>
                                        </Form.Label>
                                        <SpkSelect
                                            name="industry"
                                            option={IndustryOptions}
                                            mainClass="basic-multi-select"
                                            menuplacement='auto'
                                            classNameprefix="Select2"
                                            placeholder="Select Industry"
                                            clearable
                                            searchable
                                            getValue={clientProfile.industry ? IndustryOptions.find(opt => opt.value === clientProfile.industry) : null}
                                            onfunchange={handleIndustryChange}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">
                                            Timezone <span className="text-danger">*</span>
                                        </Form.Label>
                                        <SpkSelect
                                            name="timezone"
                                            option={TimezoneOptions}
                                            mainClass="basic-multi-select"
                                            menuplacement='auto'
                                            classNameprefix="Select2"
                                            placeholder="Select Timezone"
                                            clearable
                                            searchable
                                            getValue={clientProfile.timezone ? TimezoneOptions.find(opt => opt.value === clientProfile.timezone) : null}
                                            onfunchange={handleTimezoneChange}
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label className="form-label">
                                            Business Locations <span className="text-danger">*</span>
                                        </Form.Label>
                                        <SpkMultiselect
                                                multi
                                                options={BusinessLocationsOptions}
                                                mainClass="default basic-multi-select"
                                                placeholder="Select Business Locations"
                                                values={clientProfile.business_locations
                                                    .map(loc => BusinessLocationsOptions.find(opt => opt.value === loc))
                                                    .filter(Boolean) as typeof BusinessLocationsOptions}
                                                onChange={handleBusinessLocationsChange}
                                                labelField="label"
                                                valueField="value"
                                            />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </div>
                </div>
            )
        },
        {
            label: 'Network & Infrastructure',
            description: (
                <div className='wizard-step'>
                    <div className="wizard-content container">
                        <Col xl={12}>
                            <div className="register-page">
                                <div className="mb-3">Network & Infrastructure Information:</div>
                                <Row className="gy-3">
                                    <Col xl={12}>
                                        <Form.Label className="form-label">
                                            Public IP Ranges
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter IP ranges (comma-separated, e.g., 192.168.1.0/24, 10.0.0.0/8)"
                                            value={ipRangesInput}
                                            onChange={handlePublicIpRangesChange}
                                        />
                                        <Form.Text className="text-muted">
                                            Enter IP ranges separated by commas
                                        </Form.Text>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Check
                                            type="checkbox"
                                            id="ipv6_enabled"
                                            label="IPv6 Enabled"
                                            checked={networkInfrastructure.ipv6_enabled}
                                            onChange={handleIpv6EnabledChange}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Check
                                            type="checkbox"
                                            id="flow_monitoring_enabled"
                                            label="Flow Monitoring Enabled"
                                            checked={networkInfrastructure.flow_monitoring_enabled}
                                            onChange={handleFlowMonitoringEnabledChange}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">
                                            Environment
                                        </Form.Label>
                                        <SpkSelect
                                            name="environment"
                                            option={EnvironmentOptions}
                                            mainClass="basic-multi-select"
                                            menuplacement='auto'
                                            classNameprefix="Select2"
                                            placeholder="Select Environment"
                                            clearable
                                            searchable
                                            getValue={networkInfrastructure.environment ? EnvironmentOptions.find(opt => opt.value === networkInfrastructure.environment) : null}
                                            onfunchange={handleEnvironmentChange}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">
                                            Cloud Providers
                                        </Form.Label>
                                        <SpkMultiselect
                                            multi
                                            options={CloudProviderOptions}
                                            mainClass="default basic-multi-select"
                                            placeholder="Select Cloud Providers"
                                            values={networkInfrastructure.cloud_providers
                                                .map(provider => CloudProviderOptions.find(opt => opt.value === provider))
                                                .filter(Boolean) as typeof CloudProviderOptions}
                                            onChange={handleCloudProvidersChange}
                                            labelField="label"
                                            valueField="value"
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <div className="mb-2">
                                            <strong>Remote Access Configuration:</strong>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label className="form-label">
                                            VPN Solution
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter VPN Solution (e.g., OpenVPN, Cisco AnyConnect)"
                                            value={networkInfrastructure.remote_access.vpn_solution}
                                            onChange={handleVpnSolutionChange}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Check
                                            type="checkbox"
                                            id="ztna_deployed"
                                            label="ZTNA Deployed"
                                            checked={networkInfrastructure.remote_access.ztna_deployed}
                                            onChange={handleZtnaDeployedChange}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Check
                                            type="checkbox"
                                            id="sase_deployed"
                                            label="SASE Deployed"
                                            checked={networkInfrastructure.remote_access.sase_deployed}
                                            onChange={handleSaseDeployedChange}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </div>
                </div>
            )
        },
        {
            label: 'Step 3',
            description: (
                <div className='wizard-step container'>
                    <div className="wizard-content container">
                        <Col xl={12}>
                            <div className="text-center p-4">
                                <p className="text-muted">Step 3 - Coming soon</p>
                            </div>
                        </Col>
                    </div>
                </div>
            )
        },
    ];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    // Handle save for current step
    const handleSave = async () => {
        if (activeStep === 0) {
            // Validate required fields
            if (!clientProfile.organization_name || !clientProfile.industry || 
                clientProfile.business_locations.length === 0 || !clientProfile.timezone) {
                Swal.fire({
                    title: "Validation Error",
                    text: "Please fill in all required fields.",
                    icon: "question"
                });
                return;
            }
            
            const success = await saveClientProfile();
            
            if (success) {
                // Show success modal (same as finish)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                // Show error modal (Title With Text Under style)
                Swal.fire({
                    title: "Error Saving",
                    text: "Failed to save client profile. Please try again.",
                    icon: "question"
                });
            }
        } else if (activeStep === 1) {
            const success = await saveNetworkInfrastructure();
            
            if (success) {
                // Show success modal (same as finish)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                // Show error modal (Title With Text Under style)
                Swal.fire({
                    title: "Error Saving",
                    text: "Failed to save network and infrastructure. Please try again.",
                    icon: "question"
                });
            }
        }
        // Add save logic for other steps here as they are implemented
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setIsFinished(false); // Reset finished state when going back
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setIsFinished(true);
        
        // Show Custom Positioned Dialog Alert
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        setClientProfile({
            organization_name: "",
            industry: "",
            business_locations: [],
            timezone: "",
        });
        setNetworkInfrastructure({
            public_ip_ranges: [],
            ipv6_enabled: false,
            flow_monitoring_enabled: false,
            environment: "",
            cloud_providers: [],
            remote_access: {
                vpn_solution: "",
                ztna_deployed: false,
                sase_deployed: false,
            },
        });
        setIpRangesInput('');
        setIsFinished(false);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep} className='wizard-nav container'>
                {steps.map((step, index) => (
                    <Step key={step.label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {step.label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() && isFinished ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography component="div" sx={{ mt: 2, mb: 1, py: 1 }}>
                            {steps[activeStep].description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                className='btn btn-primary'
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button 
                                className='btn btn-success' 
                                onClick={handleSave} 
                                sx={{ mr: 1 }}
                                disabled={saving}
                            >
                                {saving ? 'Saving...' : 'Save'}
                            </Button>
                            {activeStep !== totalSteps() - 1 && (
                                <Button 
                                    className='btn btn-primary' 
                                    onClick={handleNext} 
                                    sx={{ mr: 1 }}
                                >
                                    Next
                                </Button>
                            )}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}
