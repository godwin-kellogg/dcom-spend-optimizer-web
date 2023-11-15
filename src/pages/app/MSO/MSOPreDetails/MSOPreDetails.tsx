import { styles } from "./MSOPreDetails.styles";
import { 
         Grid, 
         IconButton, 
         Typography 
} from "@mui/material";
import { TPOChip } from "src/components/TPOChip/tpoChips";
import MSButton from "src/components/MSButton/MSButton";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams, } from "react-router-dom";
import { MSODetailsData } from "./MSOData";
import {cardDetails} from "../MSOPredictive/MSOPredictive.data";
import { TPODetailsCards } from "src/components/TPODetailsCard/TPODetailsCard";
import { appRouters } from "src/constants/routes";


const MSOPreDetails = () => {
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
          >
            <ArrowBackIcon />
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
              onClick={()=>{
                navigate(appRouters.msoAddNewPlan + data.month);
              }}
          />
      </Grid>
     </Grid>

     <Grid container spacing={3} mt={3}>
                {
                    MSODetailsData.map((val) =>
                    <Grid 
                        item 
                        md={4} 
                        sm={6} 
                        xs={12}  
                        key={val.name} 
                        sx={{boxShadow : 'none'}}
                        >
                        <TPODetailsCards
                            title={val.name}
                            chipLabel={val.chipName}
                            isChipActive={val.value}
                            scenarios={val.scenarios}
                            budget={val.budget}
                            titleClick={()=>{
                                navigate(`${appRouters.msoDetailsTable}${indexVal.id}/${data.month}`)
                            }}

                        />
                    </Grid>
                    )
                }
            </Grid>
   </>
  )
}

export default MSOPreDetails;