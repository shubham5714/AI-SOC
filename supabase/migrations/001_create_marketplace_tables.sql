-- Supabase Marketplace Table for Integrations
-- This script creates the necessary tables for storing integration marketplace data

-- Create marketplace_integrations table
CREATE TABLE IF NOT EXISTS marketplace_integrations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    version VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    logo TEXT,
    description TEXT NOT NULL,
    configured_instances INTEGER DEFAULT 0,
    content_pack VARCHAR(255) NOT NULL,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
    status_color VARCHAR(20) DEFAULT 'success',
    parameters JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create marketplace_integration_instances table to store user-configured instances
CREATE TABLE IF NOT EXISTS marketplace_integration_instances (
    id SERIAL PRIMARY KEY,
    integration_id INTEGER REFERENCES marketplace_integrations(id) ON DELETE CASCADE,
    tenant_id VARCHAR(255) NOT NULL,
    instance_name VARCHAR(255) NOT NULL,
    configuration JSONB NOT NULL DEFAULT '{}'::jsonb,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'error')),
    last_tested_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(integration_id, tenant_id, instance_name)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_marketplace_integrations_category ON marketplace_integrations(category);
CREATE INDEX IF NOT EXISTS idx_marketplace_integrations_status ON marketplace_integrations(status);
CREATE INDEX IF NOT EXISTS idx_marketplace_integration_instances_integration_id ON marketplace_integration_instances(integration_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_integration_instances_tenant_id ON marketplace_integration_instances(tenant_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_marketplace_integrations_updated_at 
    BEFORE UPDATE ON marketplace_integrations 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_marketplace_integration_instances_updated_at 
    BEFORE UPDATE ON marketplace_integration_instances 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO marketplace_integrations (name, version, category, logo, description, configured_instances, content_pack, status, status_color, parameters) VALUES
(
    'IBM QRadar',
    'v3',
    'ANALYTICS & SIEM',
    '/assets/images/brand-logos/qradar-logo.png',
    'IBM QRadar SIEM helps security teams accurately detect and prioritize threats across the enterprise, providing comprehensive security intelligence and incident response capabilities.',
    4,
    'IBM QRadar',
    'active',
    'success',
    '[
        {
            "id": "host",
            "name": "host",
            "type": "url",
            "label": "QRadar Host URL",
            "placeholder": "https://qradar.company.com",
            "required": true,
            "description": "The URL of your QRadar instance"
        },
        {
            "id": "username",
            "name": "username",
            "type": "text",
            "label": "Username",
            "placeholder": "admin",
            "required": true,
            "description": "QRadar username for authentication"
        },
        {
            "id": "password",
            "name": "password",
            "type": "password",
            "label": "Password",
            "placeholder": "Enter password",
            "required": true,
            "description": "QRadar password for authentication"
        },
        {
            "id": "api_token",
            "name": "api_token",
            "type": "password",
            "label": "API Token",
            "placeholder": "Enter API token",
            "required": false,
            "description": "Optional API token for enhanced security"
        }
    ]'::jsonb
),
(
    'Splunk Enterprise',
    'v8.2',
    'ANALYTICS & SIEM',
    '/assets/images/brand-logos/splunk-logo.png',
    'Splunk Enterprise provides real-time operational intelligence and log analysis capabilities for security monitoring and IT operations.',
    2,
    'Splunk Enterprise',
    'active',
    'success',
    '[
        {
            "id": "host",
            "name": "host",
            "type": "url",
            "label": "Splunk Host URL",
            "placeholder": "https://splunk.company.com:8089",
            "required": true,
            "description": "The URL of your Splunk instance"
        },
        {
            "id": "username",
            "name": "username",
            "type": "text",
            "label": "Username",
            "placeholder": "admin",
            "required": true,
            "description": "Splunk username for authentication"
        },
        {
            "id": "password",
            "name": "password",
            "type": "password",
            "label": "Password",
            "placeholder": "Enter password",
            "required": true,
            "description": "Splunk password for authentication"
        },
        {
            "id": "port",
            "name": "port",
            "type": "number",
            "label": "Port",
            "placeholder": "8089",
            "required": false,
            "description": "Splunk management port"
        }
    ]'::jsonb
),
(
    'Microsoft Sentinel',
    'v1.0',
    'ANALYTICS & SIEM',
    '/assets/images/brand-logos/sentinel-logo.png',
    'Microsoft Sentinel is a cloud-native security information and event management (SIEM) platform that provides intelligent security analytics and threat intelligence.',
    1,
    'Microsoft Sentinel',
    'active',
    'success',
    '[
        {
            "id": "tenant_id",
            "name": "tenant_id",
            "type": "text",
            "label": "Tenant ID",
            "placeholder": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "required": true,
            "description": "Azure Active Directory tenant ID"
        },
        {
            "id": "client_id",
            "name": "client_id",
            "type": "text",
            "label": "Client ID",
            "placeholder": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "required": true,
            "description": "Azure application client ID"
        },
        {
            "id": "client_secret",
            "name": "client_secret",
            "type": "password",
            "label": "Client Secret",
            "placeholder": "Enter client secret",
            "required": true,
            "description": "Azure application client secret"
        },
        {
            "id": "workspace_id",
            "name": "workspace_id",
            "type": "text",
            "label": "Workspace ID",
            "placeholder": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "required": true,
            "description": "Log Analytics workspace ID"
        }
    ]'::jsonb
),
(
    'ServiceNow',
    'v2.0',
    'ITSM',
    '/assets/images/brand-logos/servicenow-logo.png',
    'ServiceNow provides comprehensive IT service management capabilities including incident management, change management, and service catalog.',
    3,
    'ServiceNow ITSM',
    'active',
    'success',
    '[
        {
            "id": "instance_url",
            "name": "instance_url",
            "type": "url",
            "label": "Instance URL",
            "placeholder": "https://company.service-now.com",
            "required": true,
            "description": "ServiceNow instance URL"
        },
        {
            "id": "username",
            "name": "username",
            "type": "text",
            "label": "Username",
            "placeholder": "admin",
            "required": true,
            "description": "ServiceNow username"
        },
        {
            "id": "password",
            "name": "password",
            "type": "password",
            "label": "Password",
            "placeholder": "Enter password",
            "required": true,
            "description": "ServiceNow password"
        },
        {
            "id": "api_version",
            "name": "api_version",
            "type": "select",
            "label": "API Version",
            "required": true,
            "description": "ServiceNow API version",
            "options": [
                {"value": "v1", "label": "v1"},
                {"value": "v2", "label": "v2"}
            ],
            "defaultValue": "v2"
        }
    ]'::jsonb
),
(
    'Jira',
    'v3.1',
    'PROJECT MANAGEMENT',
    '/assets/images/brand-logos/jira-logo.png',
    'Jira is a powerful project management and issue tracking tool that helps teams plan, track, and release software.',
    0,
    'Jira Software',
    'inactive',
    'secondary',
    '[
        {
            "id": "base_url",
            "name": "base_url",
            "type": "url",
            "label": "Base URL",
            "placeholder": "https://company.atlassian.net",
            "required": true,
            "description": "Jira base URL"
        },
        {
            "id": "email",
            "name": "email",
            "type": "email",
            "label": "Email",
            "placeholder": "user@company.com",
            "required": true,
            "description": "Jira account email"
        },
        {
            "id": "api_token",
            "name": "api_token",
            "type": "password",
            "label": "API Token",
            "placeholder": "Enter API token",
            "required": true,
            "description": "Jira API token"
        },
        {
            "id": "project_key",
            "name": "project_key",
            "type": "text",
            "label": "Project Key",
            "placeholder": "PROJ",
            "required": false,
            "description": "Default project key"
        }
    ]'::jsonb
)
ON CONFLICT DO NOTHING;

-- Create RLS (Row Level Security) policies
ALTER TABLE marketplace_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_integration_instances ENABLE ROW LEVEL SECURITY;

-- Allow all users to read integrations (public marketplace)
CREATE POLICY "Allow public read access to integrations" ON marketplace_integrations
    FOR SELECT USING (true);

-- Allow authenticated users to manage their own integration instances
CREATE POLICY "Users can manage their own integration instances" ON marketplace_integration_instances
    FOR ALL USING (auth.uid()::text = tenant_id);

-- Grant necessary permissions
GRANT SELECT ON marketplace_integrations TO anon, authenticated;
GRANT ALL ON marketplace_integration_instances TO authenticated;
GRANT USAGE ON SEQUENCE marketplace_integration_instances_id_seq TO authenticated;
