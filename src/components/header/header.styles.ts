import { styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export const styles = {
  appbar: {
    backgroundColor: "#fff",
    paddingX: 4,
  },
  logo: {
    height: "40px",
    width: "auto",
  },
  icon: {
    width: "24px",
    height: "24px",
    marginRight: "16px",
    cursor: "pointer",
  },
  userIcon: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
  logoutCard: {
    backgroundColor: "#FFF",
    right: 0,
    borderRadius: 4,
  },
  logoutIcon: {
    height: 16,
    width: 16,
  },
};

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#fff",
  boxShadow:
    "0px 5px 10px 0px rgba(0, 0, 0, 0.1),0px 4px 6px 0px rgba(0, 0, 0, 0.05)",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
