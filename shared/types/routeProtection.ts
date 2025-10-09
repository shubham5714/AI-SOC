// Type definitions for Route Protection system

export interface Tenant {
  id: string;
  name: string;
}

export interface TenantRoute {
  id: string;
  route_path: string;
  type: 'common' | 'client';
  allowed_tenants: string[];
  allowed_roles: string[];
  created_at?: string;
  updated_at?: string;
}

export interface RouteProtectionProps {
  children: React.ReactNode;
}

export interface TenantSwitcherModalProps {
  show: boolean;
  onHide: () => void;
  onSelectTenant: (tenantId: string) => void;
  assignedTenants: Tenant[];
}

export type RouteType = 'common' | 'client';

// Database table structure for tenant_routes
export interface TenantRouteRow {
  id: string;
  route_path: string;
  type: RouteType;
  allowed_tenants: string[];
  allowed_roles: string[];
  created_at: string;
  updated_at: string;
}

// Utility types for route protection
export interface RouteAccessCheck {
  hasRoleAccess: boolean;
  hasTenantAccess: boolean;
  requiresTenantSelection: boolean;
}

export interface RouteProtectionState {
  isLoading: boolean;
  routeData: TenantRoute | null;
  showTenantModal: boolean;
  pendingTenantSelection: string | null;
}
