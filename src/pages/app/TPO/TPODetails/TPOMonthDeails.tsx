import { useNavigate, useParams, } from "react-router-dom";
import { cardDetails } from "../TPOOptimiser/cardDetails";
import { styles } from "./TPOMonth.styles";
import { Typography, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {TPOChip} from "src/components/TPOChip/tpoChips";
import {TPODetailsCards} from "src/components/TPODetailsCard/TPODetailsCard";
import { TPODetailsData } from "./TPOData";
import { appRouters } from "src/constants/routes";
import MSButton from "src/components/MSButton/MSButton";
import AddIcon from '@mui/icons-material/Add';



const TPOMonthDetails = ()=>{
    const navigate = useNavigate();
    const indexVal:any = useParams();
    const data:any = cardDetails[indexVal.id];
    
    return (
        <>
            <Grid container>
                <Grid item md={6} xs={6}>
                    <IconButton 
                        sx={styles.iconButton} 
                        size="small" 
                        onClick={()=>{navigate(-1)}}
                    ><ArrowBackIcon />
                    </IconButton>
                    <Typography sx={styles.title} component="span">{data.month} 2023</Typography>
                    <TPOChip 
                        value={data.chipName}
                        boolVal={data.categories.value}
                    />
                </Grid>
                <Grid item md={6} xs={6}
                textAlign={"end"}>
                    <MSButton
                        title="Add New PLAN"
                        startIcon={<AddIcon />}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3} mt={3}>
                {
                    TPODetailsData.map((val:any, key:number) =>
                    <Grid 
                        item 
                        md={4} 
                        sm={6} 
                        xs={12}  
                        key={key} 
                        sx={{boxShadow : 'none'}}
                        >
                        <TPODetailsCards
                            title={val.name}
                            chipLabel={val.chipName}
                            isChipActive={val.value}
                            scenarios={val.scenarios}
                            budget={val.budget}
                            titleClick={()=>{
                                navigate(`${appRouters.tpoTable}${indexVal.id}/${val.name}`)
                            }}

                        />
                    </Grid>
                    )
                }
            </Grid>
        </>
    );
};

export default TPOMonthDetails;