import {
  Box,
  Typography,
  Grid,
  Stack,
  IconButton
} from "@mui/material";
import { styles } from "./tpoOptimiser.styles";
import {TPOOptimiserCard} from "components/OptimiserCard/OptimiserCardComponent";
import { cardDetails, dropDown, TopCardData } from "./cardDetails";
import { useNavigate } from "react-router-dom";
import { appRouters } from "constants/routes";
import { LinearProgressComponent } from "components/linearProgress/linearProgress";
import { Item } from "components/ItemPaper/ItemPaper";
import DropDown from "components/dropDownSelect/dropDown";



const TPOOptimiser = () => {
  const navigation = useNavigate();
  const headerClick = (isData:boolean, index:number) =>{
    if(isData){
      navigation(appRouters.tpoDetails + index)
    }
  }
  return (
    <>
    
      <Box sx={styles.container}>
        <Stack direction="row" spacing={2}>
          <Typography sx={styles.text}> {dropDown.name}</Typography>
          <Typography sx={styles.dropDown}>
          <DropDown 
                initialValue={dropDown.initalVal}
                menuItem={dropDown.menuItem}
          />
          </Typography>
        </Stack>
        <PromoSpendCard />
      </Box>
      <Box mb={3}>
        <Grid container>
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
              <TPOOptimiserCard
                cardTitle={data.month}
                titleChip={data.chipName}
                titleChipColor={data.styles}
                budget={data.budget}
                skuVal={data.skus}
                chipCategory={data.categories}
                isData={data.isData}
                onClickHeader={()=>{
                  headerClick(data.isData, index)
                }}
                onClickButton={()=>{
                  navigation(appRouters.tpoPredction + data.month)
                }}
                />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default TPOOptimiser;



const PromoSpendCard = ()=>{
  return (
         <Grid container spacing={2} mt={1}>
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
                  <img src="/assets/icons/layers.svg" alt="Crunch Lab" />
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
