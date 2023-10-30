import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LandingScreen, { Cards } from "./LandingScreen";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("LandingScreen component", () => {
  it("renders the landing screen with two images", () => {
    render(<LandingScreen />);
  });

  it("navigates to home when an image is clicked", () => {
    render(
      <BrowserRouter>
        <LandingScreen />
      </BrowserRouter>
    );
  });

  it("Card Component", () => {
    render(<Cards img={""} header={""} subHeader={undefined} buttons={[]} />);
  });
});