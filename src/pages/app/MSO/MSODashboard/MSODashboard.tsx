import { 
        Box,
        Grid,
        Typography
    } from "@mui/material";
import { styles } from "./MSODashboard.styles";
import DropDown from "components/dropDownSelect/dropDown";
import {category, category1} from "./MSOData";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MSButton from "components/MSButton/MSButton";
import { CalendarComponent } from "components/calendar/calendar";

const MSODashboard = ()=>{

    return (
        <>
            <Box sx={styles.container}>
                <Grid container spacing={2}>
                    <Grid item md={4} sm={4} xs={12}>
                        <Typography style={styles.text}>Category</Typography>   
                        <DropDown
                            initialValue={"All Category"}
                            menuItem={category}
                        ></DropDown>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <Typography style={styles.text}>Channel</Typography>   
                        <DropDown
                             initialValue={"All Channels"}
                             menuItem={category1}
                        ></DropDown>
                    </Grid>

                    <Grid item md={4} sm={4} xs={12}>
                        <Typography style={styles.text}>Timeframe</Typography>   
                        <Grid container p={1}>
                            <Grid item md={5}>
                                <Typography component="span">From</Typography>
                                <Typography component="span">
                                    <CalendarComponent />
                                </Typography>
                                
                            </Grid>
                            <Grid item md={5}>
                                <Typography component="span">To</Typography>
                                <Typography component="span">Date Container</Typography>
                            </Grid>
                            <Grid item md={2}>
                                <MSButton variant="contained" title="APPLY" endIcon={<ArrowForwardIcon />} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
};

export default MSODashboard;