import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { styles } from "./DropdownComponent.styles";
import { DropdownProps } from "../../@types/components";

export const DropDown = ({ initialValue, menuItem, onChange, isCode }: DropdownProps) => {
  const [value, setValue] = React.useState<string>(initialValue);
  const [result, setrResult] = React.useState<string>('')
  const handleChange = (event: any) => {
    let selectedVal:string = event.target.value;
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
        {menuItem.map((value: string, index: number) =>{
          
//           if(value.length <= 35){
//             console.log("Lenght is Higher")
//             const parts = value.split(",");
//             setrResult(parts[parts.length - 1])
// ;          }
           
         return  (
            <MenuItem sx={styles.text} value={value} key={index} divider={true}>
              {/* {`${value}`.slice(0, 35)} {isCode ?  `, ${result}` : ""} */}
              {`${value}`.slice(0, 35)}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
};