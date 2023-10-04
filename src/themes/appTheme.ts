import { createTheme } from "@mui/material";
//Montserrat

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      success: string;
      danger: string;
      info: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      success?: string;
      danger?: string;
      info?: string;
    };
  }
}

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#BF2032",
      contrastText: "#fff",
      light: "#0DC7FA",
    },
    secondary: {
      main: "#ffb875",
      light: "#F2F2F2",
      contrastText: "#1A1A1A",
    },
    success: {
      main: "#41FF00",
      light: "#EEFFE9",
    },
    info: {
      main: "#2B52DD",
      dark: "#064088",
      light: "#607DE6",
    },
    warning: {
      main: "#FFF3C9",
    },
    error: {
      main: "#BF2032",
      light: "#b518451a",
    },
    background: {
      default: "#F1F3F9",
    },
    text: {
      primary: "#202020",
      secondary: "#20202080",
    },
    grey: {
      50: "#E2E6E9",
      900: "#313131",
    },
    divider: "#E2E6E9",
  },
  typography: {
    fontFamily: ["Archivo","Montserrat", "Roboto"].join(","),
    fontWeightRegular: 500,
  },
  status: {
    success: "#EEFFE9",
    danger: "#FFE9E9",
    info: "#607DE6",
  },
});
