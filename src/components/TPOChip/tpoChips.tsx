
import { styles } from "./tpoChips.styles";
import { Chip } from "@mui/material";
import { TPOChipComponent, TPOChips } from "../../@types/components";

export const TPOChip = ({value, boolVal}:TPOChips)=>{
    const variantName:any = (val:boolean)=>{
        return val ? "" : "outlined";
    };
    return (
        <Chip 
            label={value}
            size="small"
            variant={variantName(boolVal)}
            style={boolVal ? styles.chipTrue : styles.chipFalse}
            />
    )
};


export const TPOPlanChip = ({color ,value, backGroundColor, sx}:TPOChipComponent)=>{
    return (
        <Chip 
            size="small"
            label={value}
            sx={{color : color, backgroundColor : backGroundColor, sx}}
        />
    )
}