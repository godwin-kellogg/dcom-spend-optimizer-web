import { 
    Box,
    Stack,
    Typography,
    Grid,
 } from "@mui/material";
 import DropDown from "components/dropDownSelect/dropDown";
 import { styles } from "./MSOPredictive.styles";
 import {dropDown, TopCardData, cardDetails} from "./MSOPredictive.data";
 import { Item } from "components/ItemPaper/ItemPaper";
import { LinearProgressComponent } from "components/linearProgress/linearProgress";
import LayersIcon from "@mui/icons-material/Layers";
import { MSOOptimiserCard } from "components/OptimiserCard/OptimiserCardComponent";

const MSOPredictive = () => {
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

      <Box sx={styles.container}>
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
              <MSOOptimiserCard
                cardTitle={data.month}
                titleChip={data.chipName}
                titleChipColor={data.styles}
                budget={data.budget}
                skuVal={data.skus}
                chipCategory={data.categories}
                isData={data.isData}
                />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default MSOPredictive;



const TopCard = ()=>{
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
                    <LayersIcon sx={styles.promoText} />
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