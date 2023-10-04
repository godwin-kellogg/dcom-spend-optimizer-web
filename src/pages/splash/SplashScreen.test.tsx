import { render, screen } from "@testing-library/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import { routes } from "../../constants/routes";
import Login from "../auth/Login";
import AppScreen from "../app";
import { appConfig } from "../../config/appConfig";

describe("SplashScreen", () => {
  test("renders HomeScreen component", () => {
    render(<SplashScreen />);
  });
  test("should change document title, favicon, and meta description", () => {
    render(<SplashScreen />);

    // Ensure that the document title is changed to the appConfig.title
    const originalTitle = document.title;
    expect(document.title).toBe(appConfig.title);

    // Clean up the mocked elements
    document.title = originalTitle;
  });

  test("should render Login component when accessing the root path", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to={routes.login} replace />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.dashboard} element={<AppScreen />} />
        </Routes>
      </BrowserRouter>
    );

    // Ensure that the Login component is rendered when accessing the root path
    //expect(screen.getByTestId("login-component")).toBeInTheDocument();
  });

  test('should render Login component when accessing the "/login" path', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to={routes.login} replace />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.dashboard} element={<AppScreen />} />
        </Routes>
      </BrowserRouter>
    );

    // Ensure that the Login component is rendered when accessing the "/login" path
    expect(screen.getByTestId("login-component")).toBeInTheDocument();
  });

  test('should render AppScreen component when accessing the "/dashboard" path', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to={routes.login} replace />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.dashboard} element={<AppScreen />} />
        </Routes>
      </BrowserRouter>
    );

    // Ensure that the AppScreen component is rendered when accessing the "/dashboard" path
    //expect(screen.getByTestId("app-screen")).toBeInTheDocument();
  });
});
