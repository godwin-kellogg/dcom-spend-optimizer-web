import {
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Item } from "components/ItemPaper/ItemPaper";
import { MSOOptimiserCards } from "components/OptimiserCard/OptimiserCardComponent";
import {DropDown} from "components/DropdownComponent/DropdownComponent";
import { LinearProgressComponent } from "components/linearProgress/linearProgress";
import { appRouters } from "constants/routes";
import { useNavigate } from "react-router-dom";
import { TopCardData, cardDetails, dropDown } from "./MSOPredictive.data";
import { styles } from "./MSOPredictive.styles";

const MSOPredictive = () => {
  const navigate = useNavigate();
  return (
    <>
        <Box sx={styles.container}>
          <Stack direction="row" spacing={2}>
            <Typography sx={styles.text}> Fiscal Year</Typography>
            <Typography sx={styles.dropDown}>
            <DropDown 
                  initialValue={dropDown.initalVal}
                  menuItem={dropDown.menuItem}
                />
            </Typography>
          </Stack>
          <TopCard />
      </Box>

      
        <Grid container mb={2}>
          {cardDetails.map((data, index) => (
            <Grid
              item
              key={index}
              className={data.month}
              md={4}
              lg={3}
              sm={6}
              xs={12}
            >
              <MSOOptimiserCards
                cardTitle={data.month}
                titleChip={data.chipName}
                titleChipColor={data.styles}
                budget={data.budget}
                skuVal={data.skus}
                chipCategory={data.categories}
                isData={data.isData}
                onClickHeader={()=>{
                  navigate(appRouters.msoPredictiveCard + index);
                }}
                onClickButton={()=>{
                  navigate(appRouters.msoAddNewPlan + data.month);
                }}
                />
            </Grid>
          ))}
        </Grid>
    </>
  )
}

export default MSOPredictive;



const TopCard = ()=>{
    return (
           <Grid container spacing={2} >
            {
              
              TopCardData.map((data:any)=>
                (
              <Grid 
                key={data.title} 
                item
                xs={12} 
                sm={12} 
                md={6}
              >
               <Item>
                <Grid container p={2}>
                  <Grid 
                    item 
                    md={5} 
                    sm={6} 
                    xs={12}
                  >
                    <img src="/assets/icons/layers.svg" alt="" />
                    <Typography component="span" sx={styles.promoText}>
                      {data.title}
                    </Typography>
                    <Typography sx={styles.valueText}>
                      {data.running}
                      <Typography component="span" sx={styles.slashText}>/</Typography>
                      {data.total}
                    </Typography>
                  </Grid>
                  <Grid item md={7} sm={6} xs={12} pt={3}>
                      <LinearProgressComponent 
                        progress={
                          (data.running/parseInt(data.total))*100
                        }
                        values={data.values}
                      />
                  </Grid>
                </Grid>
              </Item>
            </Grid>
                )
              )
            }
          </Grid>
    )
  }