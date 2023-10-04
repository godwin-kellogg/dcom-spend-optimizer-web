import { 
    Card,
    CardActions, 
    CardContent,
    CardHeader,
    Typography
 } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GridViewIcon from '@mui/icons-material/GridView';
import LayersIcon from '@mui/icons-material/Layers';
import { cardStyles } from "./TPOOptimiser.styles";
import Grid from '@mui/material/Unstable_Grid2';
import { TPOChip, TPOPlanChip } from "../TPOChip/tpoChip";
import { TPOData } from "../../@types/components";


export const OptimiserCard = ({
    cardTitle,
    titleChip,
    titleChipColor,
    budget,
    skuVal,
    chipCategory
}:TPOData)=>{
   
    return (

        <Card sx={cardStyles.cardContainer}> 
                 <CardHeader
                    sx={cardStyles.cardHeader} 
                    title={cardTitle}
                    action={
                        <TPOPlanChip 
                            customColor={titleChipColor}
                            value={titleChip}
                        />
                    }
                 />
                <CardContent sx={{padding:0}}>
                    <Grid container>
                        <Grid xs={6} md={6} sx={cardStyles.border}>
                          <Grid container padding={1}>
                            <Grid md={4}>
                                <CurrencyRupeeIcon />
                            </Grid>
                            <Grid md={8} ml={2}>
                                <Typography style={cardStyles.text1}>Budget</Typography>
                                <Typography style={cardStyles.text2}>{budget}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid xs={6} md={6} sx={cardStyles.border}>
                        <Grid container padding={1}>
                            <Grid md={2}>
                                <GridViewIcon />
                            </Grid>
                            <Grid md={10} ml={2}>
                                <Typography style={cardStyles.text1}>SKU</Typography>
                                <Typography style={cardStyles.text2}>{skuVal}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={[cardStyles.border, {padding :0}]}>
                    <Grid container pl={1} m={1}>
                        <Grid xs={12} md={12} sm={12}>
                            <Typography mb={0.2} sx={cardStyles.text1}> <LayersIcon style={{margin: "5px 10px -5px 5px"}}/>Categories</Typography>
                            {
                                chipCategory.map((value:any, key:number)=>
                                    <TPOChip 
                                        value={value.name}
                                        key={key}
                                        boolVal={value.value}
                                    />
                                )
                            }
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>

    )
};



export const NoDataOptimiserCard = ()=>{
    return (
        <Card sx={[cardStyles.cardContainer]}>
            <CardHeader
                sx={cardStyles.cardHeader} 
                title={'cardTitle'}
                action={
                    <>buttoin</>
                }
                />
                <CardContent 
                    sx={{padding: {xs : 1.5, sm:2, md : 5.4}}}
                >
                <Typography align="center" variant="h5">No Existing Plans </Typography>
                <Typography align="center" variant="body1">
                    Currently no plans have been created or found for this month. Please create a new plan to see the details here.
                </Typography>
            </CardContent>
        </Card>
       
    )
};


