import { render, fireEvent } from "@testing-library/react";
import { CustomDrawer } from "./CustomDrawer";
import { MemoryRouter } from "react-router-dom";

describe("CustomDrawer Component", () => {
  it("render custom drawer component without fail", () => {
    const { container } = render(
      <MemoryRouter>
        <CustomDrawer open={true} toggleDrawer={() => {}} />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it("closes the drawer when the close icon is clicked", () => {
    const toggleDrawer = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <CustomDrawer open={true} toggleDrawer={toggleDrawer} />
      </MemoryRouter>
    );
    const closeIcon = getByTestId("close-icon");
    fireEvent.click(closeIcon);
    expect(toggleDrawer).toHaveBeenCalledWith(false);
  });
});
