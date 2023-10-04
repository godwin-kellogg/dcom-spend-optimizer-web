import { 
    Card,
    CardActions, 
    CardContent,
    CardHeader,
    Typography,
    Stack,
    Box,

 } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GridViewIcon from '@mui/icons-material/GridView';
import LayersIcon from '@mui/icons-material/Layers';
import { cardStyles } from "./OptimiserComponent.styles";
import Grid from '@mui/material/Unstable_Grid2';
import { TPOChip, TPOPlanChip } from "../TPOChip/tpoChip";
import { TPOData } from "../../@types/components";
import MSButton from "components/MSButton/MSButton";
import AddIcon from '@mui/icons-material/Add';

export const TPOOptimiserCard = ({
    cardTitle,
    titleChip,
    titleChipColor,
    budget,
    skuVal,
    chipCategory,
    isData,
    onClickHeader,
    onClickButton
}:TPOData)=>{
   
    return (

        <Card sx={cardStyles.cardContainer}> 
                 <CardHeader
                    sx={cardStyles.cardHeader} 
                    title={cardTitle}
                    action={
                        isData ?
                        <TPOPlanChip 
                            customColor={titleChipColor}
                            value={titleChip}
                        /> : ""
                    }
                    onClick={onClickHeader}
                    
                 />
                {
                    isData ? 
                    <>
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
                                <Box mb={0.2} sx={cardStyles.text1}> 
                                    <img src="/assets/icons/layers.svg" alt="" />
                                    <Typography component="span" sx={{marginLeft : 2}}>Categories</Typography>
                                </Box>
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
                    </>
                    :
                    <>
                    <CardActions sx={{display : "flex", justifyContent : "center", paddingTop:4, paddingBottom:4, }}>
                        <Stack direction="column" >
                            <Typography align="center" sx={cardStyles.text2}>No Existing Plans</Typography>
                            <Typography align="center" sx={cardStyles.noPlan}>Please create a new plan to see the details here.</Typography>
                            <Typography align="center">
                                <MSButton 
                                    startIcon={<AddIcon />} 
                                    title="Add new plan" 
                                    sx={{marginTop:2, width :"50%"}}
                                    onClick={onClickButton}
                                />
                            </Typography>
                        </Stack>
                    </CardActions>
                    </>
                }
            </Card>

    )
};

export const MSOOptimiserCard = ({
    cardTitle,
    titleChip,
    titleChipColor,
    budget,
    skuVal,
    chipCategory,
    isData
}:TPOData)=>{
    return (

    <Card sx={cardStyles.cardContainer}> 
        <CardHeader
        sx={cardStyles.cardHeader} 
        title={cardTitle}
        action={
            isData ?
            <TPOPlanChip 
                customColor={titleChipColor}
                value={titleChip}
            /> : ""
        }
        />
        {
            (isData) ? 
            <>
            <CardContent sx={{padding:0}}>
            <Grid container>
                <Grid xs={12} sx={cardStyles.border}>
                    <Grid container padding={1}>
                    <Grid md={4} ml={2}>
                        <CurrencyRupeeIcon />
                    </Grid>
                    <Grid md={8} ml={1}>
                        <Typography style={cardStyles.text1}>Budget</Typography>
                        <Typography style={cardStyles.text2}>{budget}</Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
        <CardActions sx={[cardStyles.border, {padding :0}]}>
            <Grid container pl={1} m={1}>
                <Grid xs={12} md={12} sm={12}>
                    <Typography  sx={cardStyles.text1}> 
                        <LayersIcon style={{margin: "5px 10px -5px 5px"}}/>
                        Categories
                    </Typography>
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
            </> 
            : 
            <>
                <CardActions sx={{display : "flex", justifyContent : "center", paddingTop:4, paddingBottom:4, }}>
                    <Stack direction="column" >
                        <Typography align="center" sx={cardStyles.text2}>No Existing Plans</Typography>
                        <Typography align="center" sx={cardStyles.noPlan}>Please create a new plan to see the details here.</Typography>
                        <Typography align="center">
                            <MSButton 
                                startIcon={<AddIcon />} 
                                title="Add new plan" 
                                sx={{marginTop:2, width :"50%"}}
                             />
                        </Typography>
                    </Stack>
                </CardActions>
            </>
        }
    </Card>

    )
};


