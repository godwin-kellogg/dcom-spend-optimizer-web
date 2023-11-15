/**
 * Header Component
 *
 * The `Header` component is used to render the header of the application. It includes a header content section
 * and a sidebar section (for navigation) when the user navigates to a page other than the main path.
 *
 * @returns {React.ReactNode} The `Header` component.
 */

import React from "react";
import HeaderContent from "./HeaderContent";
import { useLocation, useNavigate } from "react-router-dom";
// import Sidebar from "../sidebar/Sidebar";
import { path } from "../../constants/routes";
import { CustomDrawer } from "src/components/CustomDrawer/CustomDrawer";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = React.useState(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const onClickLogout = () => {
    setAnchorElUser(null);
    sessionStorage.clear();
    navigate("/login");
  };
  const isCurrentPath = () => {
    return location.pathname === path || location.pathname === `${path}/`;
  };





const [openDrawer, setDrawer] = React.useState(false);
const toggleDrawer = (bool:boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawer(bool);
  };



  return (
    <>
      <HeaderContent
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleOpenUserMenu={handleOpenUserMenu}
        anchorElUser={anchorElUser}
        handleCloseUserMenu={handleCloseUserMenu}
        onClickLogout={onClickLogout}
        isCurrentPath={isCurrentPath()}
        headerText={location.pathname}
        toggleDrawer={toggleDrawer}
      />
      <CustomDrawer 
      open={openDrawer}
      toggleDrawer={toggleDrawer}
      />
      
    </>
  );
};

export default Header;
