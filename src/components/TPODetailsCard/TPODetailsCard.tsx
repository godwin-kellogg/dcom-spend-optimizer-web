import { Card, Grid, Typography, CardContent, IconButton, Tooltip } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GridViewIcon from '@mui/icons-material/GridView';
import { styles } from "./TPOCardStyles";
import { TPODetailsCard} from "../../@types/components";
import {TPOPlanChip} from "../TPOChip/tpoChip";

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



export const TPODetailsCards = ({
    budget,
    chipLabel,
    scenarios,
    title,
    titleClick,
    addClick,
    deleteClick,
    visibleClick
}:TPODetailsCard)=>{
    return (
   
        <Card sx={styles.container}>
            <CardContent sx={styles.title}>
                <Grid container>
                    <Grid item md={6} sm={6}>
                        <Typography onClick={titleClick} component="span" sx={styles.titleText}>{title}</Typography>
                        <TPOPlanChip value={chipLabel} customColor={"green"} />
                    </Grid>
                    <Grid item md={6} sm={6} sx={{textAlign : "right"}}>
                        <Tooltip title="View More" arrow
                            componentsProps={{
                                tooltip : {
                                    sx : styles.tooltipOther
                                },
                                arrow : {
                                    sx : styles.tooltipArrow
                                }
                            }}
                        >
                            <IconButton onClick={visibleClick} sx={styles.icon} size="small">
                                <VisibilityOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        
                        <Tooltip title="Add" arrow
                            componentsProps={{
                                tooltip : {
                                    sx : styles.tooltipOther
                                },
                                arrow : {
                                    sx : styles.tooltipArrow
                                }
                            }}
                        >
                        <IconButton onClick={addClick} sx={styles.icon} size="small">
                            <AddIcon  />
                        </IconButton>
                        </Tooltip>
                        <Tooltip 
                            title="Delete" arrow 
                            componentsProps={{
                                tooltip: {
                                  sx: styles.tooltipDelete
                                },
                                arrow : {
                                    sx:styles.tooltipArrowDelete
                                }
                              }}
                        >
                            <IconButton onClick={deleteClick} sx={styles.iconDelete} size="small">
                                <DeleteOutlineIcon  />
                            </IconButton>
                        </Tooltip>
                        
                    </Grid>
                </Grid>
            </CardContent>


            <CardContent sx={styles.upperContent}>
                <IconButton disableRipple  sx={styles.iconColor} size="small">
                    <CurrencyRupeeIcon />
                </IconButton>
                <Typography sx={styles.textHeader} component="span">Budget</Typography>
                <Typography sx={styles.textData}>{budget}</Typography>
            </CardContent>
            <CardContent sx={styles.downContent}>
                <IconButton disableRipple sx={styles.iconColor} size="small">
                    <GridViewIcon  />
                </IconButton>
                
                <Typography sx={styles.textHeader} component="span">Scenarios</Typography>
                <Typography sx={styles.textData} component="div">{scenarios}</Typography>
            </CardContent>
        </Card>
    )
};

