import { render, screen } from "@testing-library/react";
import Login from ".";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { path } from "../../../constants/routes";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Login component", () => {
  it('navigates to /dashboard when the "click here" link is clicked', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByText("click here")).toBeInTheDocument();

    const clickHereLink = screen.getByText("click here");
    userEvent.click(clickHereLink);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(path);
  });
});
