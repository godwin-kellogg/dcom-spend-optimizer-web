
import { render, screen } from "@testing-library/react";
import LandingScreen from "./LandingScreen";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { appRouters } from "../../../constants/routes";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("LandingScreen component", () => {
  it("renders the landing screen with two images", () => {
    render(<LandingScreen />);

    const image1 = screen.getByAltText("TPO");
    expect(image1).toBeInTheDocument();

    const image2 = screen.getByAltText("MSO");
    expect(image2).toBeInTheDocument();
  });
  it("navigates to home when an image is clicked", () => {
    render(
      <BrowserRouter>
        <LandingScreen />
      </BrowserRouter>
    );

    const img1 = screen.getByAltText("TPO");
    userEvent.click(img1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(appRouters.tpoDashboard);

    const img2 = screen.getByAltText("MSO");
    userEvent.click(img2);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(appRouters.tpoDashboard);
  });
});
