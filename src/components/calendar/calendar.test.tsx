import { render, fireEvent } from "@testing-library/react";
import {CalendarComponent} from "./calendar";

describe("Calendar Component", ()=>{
    it("render calendar component without error", ()=>{
        render(<CalendarComponent />)
    });

    it("calls the onDateSelect callback when a date is selected", ()=>{
        const onDateSelect = jest.fn();
        const { getByLabelText } = render(<CalendarComponent onDateSelect={onDateSelect} />);
        const input = getByLabelText('Select End Date');
        fireEvent.change(input, { target: { value: "" } });
    });

    it('disables dates correctly based on isFrom prop', () => {
        const { getByLabelText, queryByText } = render(<CalendarComponent isFrom={true} />);
        expect(queryByText('2')).not.toBeInTheDocument();
      });
});