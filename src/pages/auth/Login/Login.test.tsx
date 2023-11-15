import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store/store";
import Login from ".";


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
