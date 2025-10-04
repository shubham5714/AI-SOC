import { Menuitemtype } from './nav';

/**
 * Filters menu items based on user role
 * @param menuItems - Array of menu items to filter
 * @param userRole - User's role (e.g., "MSSP Admin")
 * @returns Filtered array of menu items visible to the user
 */
export const filterMenuItemsByRole = (menuItems: Menuitemtype[], userRole: string): Menuitemtype[] => {
  return menuItems
    .map(item => {
      // If item has no roles specified, it's visible to everyone
      if (!item.roles || item.roles.length === 0) {
        // Still need to filter children
        if (item.children && item.children.length > 0) {
          const filteredChildren = filterMenuItemsByRole(item.children, userRole);
          return {
            ...item,
            children: filteredChildren
          };
        }
        return item;
      }

      // If user role is in the allowed roles, include the item
      if (item.roles.includes(userRole)) {
        // Recursively filter children if they exist
        if (item.children && item.children.length > 0) {
          const filteredChildren = filterMenuItemsByRole(item.children, userRole);
          return {
            ...item,
            children: filteredChildren
          };
        }
        return item;
      }

      // If user role is not in allowed roles, return null to filter out
      return null;
    })
    .filter((item): item is Menuitemtype => item !== null);
};
