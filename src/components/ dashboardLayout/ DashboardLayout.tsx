/**
 * DashboardLayout Component
 *
 * The `DashboardLayout` component is a layout wrapper used for rendering the main content
 * of the dashboard pages. It includes a header component and displays the main content of the
 * dashboard page along with breadcrumb navigation when the user navigates to subpages.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The child components to be rendered inside the layout.
 *
 * @returns {React.ReactNode} The `DashboardLayout` component.
 */

import Header from "../header";
import { Box,} from "@mui/material";

// import { menuItems } from "../../constants/menuItems";
import { DashboardLayoutProps } from "../../@types/components";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  /**
   * Check if the current location matches the dashboard's main path.
   *
   * @returns {boolean} True if the current location matches the dashboard's main path, false otherwise.
   */
  // const isCurrentPath = (): boolean => {
  //   return location.pathname === path || location.pathname === `${path}/`;
  // };
  /**
   * Get the breadcrumb text for the current page based on the location pathname.
   *
   * @returns {string} The breadcrumb text for the current page, or an empty string if not found.
   */
  // const breadcrumbText = (): string => {
  //   return (
  //     menuItems.find((item) => item.href === location.pathname)?.title || ""
  //   );
  // };





  return (
    <Box sx={{ display: 'flex' }}>
    <Header />
    
    <Box
      px={4}
      pt={12}
      sx={{
        backgroundColor: 'background.default',
        width: '100%',
      }}
    >
      {children}
    </Box>
  </Box>
  );
};

export default DashboardLayout;
