/**
 * HeaderContent Component
 *
 * The `HeaderContent` component represents the content of the header section in the application.
 * It includes the app logo, title, notification and question icons, and user profile icon with user menu.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.open - Indicates whether the sidebar is open or closed.
 * @param {Function} props.handleDrawerOpen - Function to handle opening the sidebar.
 * @param {Function} props.handleOpenUserMenu - Function to handle opening the user menu.
 * @param {HTMLElement} props.anchorElUser - The anchor element for the user menu.
 * @param {Function} props.handleCloseUserMenu - Function to handle closing the user menu.
 * @param {Function} props.onClickLogout - Function to handle logout button click.
 * @param {boolean} props.isCurrentPath - Indicates whether the current path matches the main path.
 *
 * @returns {React.ReactNode} The `HeaderContent` component.
 */

import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { HeaderContentProps } from "../../@types/components";
import { headerData } from "src/constants/screensData";
import { AppBar, styles } from "./header.styles";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { path } from "src/constants/routes";

const HeaderContent = ({
  open,
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  onClickLogout,
  isCurrentPath,
  headerText,
  toggleDrawer,
}: HeaderContentProps) => {
  let auth: any = localStorage.getItem("authData");
  const authData = JSON.parse(auth);
  const navigation = useNavigate();

  const location = useLocation();
  const isHome: boolean = location.pathname.startsWith("/CrunchLab/");
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {isCurrentPath ? null : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon color="action" />
            </IconButton>
          )}
          <IconButton
            disableRipple
            onClick={() => {
              navigation(path);
            }}
          >
            <img src={headerData.logo} alt="logos" style={styles.logo} />
          </IconButton>
          <Typography
            color="text.primary"
            fontSize={19}
            ml={2}
            sx={{ flexGrow: 1 }}
            fontWeight={600}
          >
            {isCurrentPath
              ? headerText
                  .split("/")[1]
                  .replace(/([A-Z])/g, " $1")
                  .toUpperCase()
              : headerText
                  .split("/")[2]
                  .replace(/([A-Z])/g, " $1")
                  .toUpperCase()}
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            {isHome ? (
              <IconButton
                sx={{ marginRight: 3, color: "black" }}
                onClick={() => {
                  navigation(-1);
                }}
              >
                <ArrowBackRoundedIcon />
              </IconButton>
            ) : (
              <>
                <Box>
                  <img
                    src={headerData.notificationIcon}
                    alt="icon"
                    style={styles.icon}
                  />
                </Box>
                <Box>
                  <img
                    src={headerData.questionIcon}
                    alt="icon"
                    style={styles.icon}
                  />
                </Box>
              </>
            )}

            <Box>
              <img
                src={headerData.userIcon}
                alt="icon"
                style={styles.userIcon}
                onClick={handleOpenUserMenu}
              />
              <Menu
                sx={{ mt: "54px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <img
                    src={headerData.userIcon}
                    alt="icon"
                    style={styles.userIcon}
                  />{" "}
                  <Box ml={1}>
                    <Typography color="text.primary">
                      {authData.name}
                    </Typography>
                    <Typography color="grey" fontSize={12}>
                      {authData.email}
                    </Typography>
                  </Box>
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={onClickLogout}
                  sx={{ background: "#fff", pl: 3 }}
                >
                  <img
                    src={headerData.dropdown.logoutIcon}
                    alt="icon"
                    style={styles.logoutIcon}
                  />

                  <Typography ml={1} color={"text.primary"} fontSize={12}>
                    {headerData.dropdown.logOut}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderContent;
