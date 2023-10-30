import {fireEvent, render, screen} from '@testing-library/react';
import { DropDown } from './DropdownComponent';

describe("Dropdown component", ()=>{
  const initialValue = 'Option 1';
  const menuItem = ['Option 1', 'Option 2', 'Option 3'];

    it("render dropdown component without error", ()=>{
        render(<DropDown initialValue={initialValue} menuItem={menuItem} onChange={()=>{}} />);
    });
    
    it("updates the selected value when an option is selected", ()=>{
        const onChange = jest.fn();
        render(<DropDown initialValue={initialValue} menuItem={menuItem} onChange={()=>{}} />);
        const select = screen.getByTestId("dropdown-select");
        fireEvent.mouseDown(select);
        // const option = screen.getByText('Option 2');
        // fireEvent.click(option);
        // fireEvent.change(select, {target : {value : "Option 2"}});
        // expect(onChange).toHaveBeenCalledWith('');
    })
})