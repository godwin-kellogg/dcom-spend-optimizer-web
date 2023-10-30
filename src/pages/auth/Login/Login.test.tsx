import { render, screen } from "@testing-library/react";
import Login from ".";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { path } from "../../../constants/routes";
import { Provider } from "react-redux";
import { store } from "redux/store/store";

import { authData } from "redux/reducers/auth.reducer";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Login component", () => {
  it('navigates to /dashboard when the "click here" link is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
        <Login />
      </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("click here")).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalled;
  });
});
