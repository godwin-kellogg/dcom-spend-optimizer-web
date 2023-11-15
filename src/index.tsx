import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import SplashScreen from "./pages/splash/SplashScreen";
import { appTheme } from "./themes/appTheme";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import msalConfig from "./config/msalConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const msalInstance = new PublicClientApplication(msalConfig);

root.render(
  // <React.StrictMode>
  <MsalProvider instance={msalInstance}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <Provider store={store}>
          <SplashScreen />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </MsalProvider>
  //  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
