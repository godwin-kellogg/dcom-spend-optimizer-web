import { 
        Typography,
        LinearProgress,
        styled, 
        linearProgressClasses
 } from "@mui/material";
import { styles } from "./linearProgress.styles";
import { LinearProgressData } from "../../@types/components";

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 11,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "rgba(34, 197, 94, 1)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 3,
      backgroundColor: "rgba(21, 128, 61, 1)",
    },
  }));



export const LinearProgressComponent = ({
        values, 
        progress
    }:LinearProgressData)=>{
    console.log("datatda", values, progress);
    return (
        <>
        <Typography
            component="div"
            sx={styles.topContainer}
            >
            {
                values.map((value:any, index:number)=>
                    <Typography component="span" key={index}>{value}</Typography>
                )
            }
        </Typography>

        <Typography
        component="div"
        sx={styles.downContainer}
        >
            <BorderLinearProgress variant="determinate" value={progress} />
        </Typography>
        </>
    )
};