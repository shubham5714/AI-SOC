"use client"
import { useState, useEffect } from 'react';
import { supabase } from '@/shared/lib/supabase';
import { Menuitemtype, MENUITEMS } from '@/shared/layouts-components/sidebar/nav';
import { useTenantContext } from '@/shared/contextapi/TenantContext';
import { useUserContext } from '@/shared/contextapi/UserContext';

interface TenantNavData {
  menu_item: string;
  roles_allowed: string[];
}

// Function to fetch tenant navigation data
const fetchTenantNavigation = async (tenantIds: string[]): Promise<TenantNavData[]> => {
  const { data, error } = await supabase
    .from('tenant_nav_items')
    .select('menu_item, roles_allowed')
    .in('tenant_id', tenantIds);
  
  if (error) {
    console.error('Error fetching tenant navigation:', error);
    throw error;
  }
  
  if (!data || data.length === 0) {
    return [];
  }
  
  // Get distinct menu items with merged roles from all assigned tenants
  const distinctMenuItems = data.reduce((acc, item) => {
    const existing = acc.find(m => m.menu_item === item.menu_item);
    if (existing) {
      // Merge roles_allowed arrays and remove duplicates
      existing.roles_allowed = [...new Set([...existing.roles_allowed, ...item.roles_allowed])];
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, [] as TenantNavData[]);
  
  return distinctMenuItems;
};

// Function to filter menu items based on tenant data and user role
const filterMenuByTenantData = (
  staticMenuItems: Menuitemtype[], 
  userRole: string,
  tenantNavData: TenantNavData[]
): Menuitemtype[] => {
  return staticMenuItems
    .map(item => {
      // Check if this menu item exists in tenant data
      // Handle both "Dashboard" and "Dashboards" for backward compatibility
      const tenantNavItem = tenantNavData.find(t => 
        t.menu_item === item.title || 
        (t.menu_item === "Dashboard" && item.title === "Dashboards") ||
        (t.menu_item === "Dashboards" && item.title === "Dashboard")
      );
      
      if (tenantNavItem) {
        // Check if user role is allowed for this menu item
        const hasAccess = tenantNavItem.roles_allowed.includes(userRole);
        
        if (!hasAccess) {
          return null; // Hide this menu item
        }
        
        // User has access, recursively filter children
        if (item.children && item.children.length > 0) {
          const filteredChildren = filterMenuByTenantData(item.children, userRole, tenantNavData);
          // Only show parent if it has accessible children
          if (filteredChildren.length > 0) {
            return {
              ...item,
              children: filteredChildren
            };
          } else {
            return null;
          }
        }
        
        return item;
      }

      // Parent not in tenant data but has children (e.g. Context Memory): show if any child is allowed
      if (item.children && item.children.length > 0) {
        const filteredChildren = filterMenuByTenantData(item.children, userRole, tenantNavData);
        if (filteredChildren.length > 0) {
          return {
            ...item,
            children: filteredChildren
          };
        }
      }
      
      // If menu item not found in tenant data, hide it
      return null;
    })
    .filter((item): item is Menuitemtype => item !== null);
};

// Main hook for tenant-based navigation
export const useTenantNavigation = () => {
  const { assignedTenants, selectedTenantIds } = useTenantContext();
  const { userData } = useUserContext();
  const [menuItems, setMenuItems] = useState<Menuitemtype[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const buildTenantMenu = async () => {
      if (!assignedTenants?.length || !userData?.role) {
        setMenuItems([]);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        
        // Get tenant IDs based on selection
        let tenantIds: string[];
        if (selectedTenantIds === 'all') {
          tenantIds = assignedTenants.map(t => t.id);
        } else if (Array.isArray(selectedTenantIds)) {
          tenantIds = selectedTenantIds;
        } else {
          tenantIds = [selectedTenantIds];
        }
        
        // Fetch distinct menu items for selected tenants
        const tenantNavData = await fetchTenantNavigation(tenantIds);
        
        // If no tenant data found, show empty menu
        if (tenantNavData.length === 0) {
          setMenuItems([]);
          return;
        }
        
        // Temporary fallback: Show all menu items for MSSP Admin users
        // TODO: Remove this fallback once all components are built
        if (userData.role === "MSSP Admin") {
          setMenuItems(MENUITEMS);
          return;
        }
        
        // Filter static menu based on tenant data and user role
        const filteredMenu = filterMenuByTenantData(
          MENUITEMS, 
          userData.role, 
          tenantNavData
        );
        
        setMenuItems(filteredMenu);
      } catch (error) {
        console.error('Error building tenant menu:', error);
        setMenuItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    buildTenantMenu();
  }, [assignedTenants, selectedTenantIds, userData?.role]);

  return { menuItems, isLoading };
};