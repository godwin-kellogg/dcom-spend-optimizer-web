import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { styles } from "./dropDown.styles";


interface Props {
    initialValue:any;
    menuItem:any[];
    onChange?:(value:any)=>void;
};

const DropDown = ({initialValue, menuItem, onChange}:Props)=>{
    const [value, setValue] = React.useState(initialValue);
    const handleChange = (event: any) => {
        let selectedVal:any = event.target.value;
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
                >
                    {
                        menuItem.map((value:any, index:number)=>
                            <MenuItem
                                sx={styles.text} 
                                value={value} 
                                key={index}
                                divider={true}
                            >
                                {value}
                            </MenuItem>
                        )
                    }
                </Select>

            </FormControl>

        )
};


export default DropDown;