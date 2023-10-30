/**
 * SplashScreen Component
 *
 * The `SplashScreen` component serves as the entry point of the application and sets up the initial routing and metadata for the app.
 * It uses React Router to handle different routes and displays the appropriate components based on the URL path.
 *
 * @returns {React.ReactNode} The `SplashScreen` component.
 */

import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppScreen from "../app";
import Login from "../auth/Login";
import { appConfig } from "config/appConfig";
import { routes } from "constants/routes";
import { useMsal } from "@azure/msal-react";

const SplashScreen = () => {
  /**
   * MetaDataWrapper Component
   *
   * The `MetaDataWrapper` component is a utility component that dynamically updates the document's metadata, such as title, favicon, and description,
   * based on the application's configuration (`appConfig`). It uses the `useEffect` hook to update the metadata once the component is mounted.
   *
   * @returns {React.ReactNode} The `MetaDataWrapper` component.
   */

  const { accounts } = useMsal();
  const MetaDataWrapper = () => {
    useEffect(() => {
      const changeMetaData = () => {
        document.title = appConfig.title;
        const favicon: any = document.querySelector('link[rel="icon"]');
        if (favicon) {
          favicon.href = appConfig.favicon;
        }
        const metaDescription = document.querySelector(
          'meta[name="description"]'
        );
        if (metaDescription) {
          metaDescription.setAttribute("content", appConfig.description);
        }
      };
      changeMetaData();
    }, []);
  
    return null;
  };
  
  return (
    <BrowserRouter>
      <MetaDataWrapper />
      <Routes>
        <Route path="/" element={<Navigate to={routes.login} replace />} />
        <Route
          path="*"
          element={
            <h3>
              <code>Page You Requested Not Found</code>
            </h3>
          }
        />
        <Route path={routes.login} element={<Login />} />

        <Route
          path={routes.dashboard}
          element={
            accounts.length > 0 ? <AppScreen /> : <Navigate to={routes.login} replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default SplashScreen;
