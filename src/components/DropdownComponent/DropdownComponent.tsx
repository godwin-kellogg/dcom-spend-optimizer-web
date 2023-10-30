import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { styles } from "./DropdownComponent.styles";
import { DropdownProps } from "../../@types/components";

export const DropDown = ({ initialValue, menuItem, onChange }: DropdownProps) => {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (event: any) => {
    let selectedVal: any = event.target.value;
    setValue(selectedVal);
    if (onChange) onChange(selectedVal);
  };
  return (
    <FormControl size="small" sx={styles.dropDown}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        MenuProps={{
          disableScrollLock: true,
        }}
        data-testid="dropdown-select"
      >
        {menuItem.map((value: any, index: number) => (
          <MenuItem sx={styles.text} value={value} key={index} divider={true}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};