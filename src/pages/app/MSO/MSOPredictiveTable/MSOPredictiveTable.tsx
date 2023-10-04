import DropDown from "components/dropDownSelect/dropDown";
import { styles } from "./MSOPredictiveTable.styles";
import { 
    Box, 
    Grid, 
    Typography,
    TableCell,
    TableRow,
    Table,
    TableContainer, 
    Paper,
    TableHead,
    TableBody,
    IconButton,
    Stack
  } from "@mui/material";
import { CalendarComponent } from "components/calendar/calendar";
import MSButton from "components/MSButton/MSButton";
import { rows } from "./MSOPredictionTableData";
import {ExploreOutlined,Save, AllInclusive } from "@mui/icons-material";

const MSOPredictiveTable = () => {
  return (
    <>
      <Box sx={[styles.container, {padding : 2}]}>
        <Header />
      </Box>

      <Box sx={[styles.container, {paddingTop:1}]}>
        <Typography m={2}>
          <IconButton>
            <ExploreOutlined />
          </IconButton>
            Predicted Budget Reallocated Across Selected SKUs
        </Typography>
        <DataTable />
      </Box>

     <Box sx={styles.button}>
        <Stack direction="row">
            <Typography mr={2}>
              <MSButton 
                title="Save"
                startIcon={<Save />}
                variant="outlined"
                />
            </Typography>
            <Typography>
              <MSButton 
                title="Compare" 
                startIcon={<AllInclusive />} 
              />
            </Typography>
        </Stack>
     </Box>

    </>
  );
};

export default MSOPredictiveTable;

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={2.2}>
        <Typography component="div">Category</Typography>
        <Typography>
          <DropDown
            initialValue={"Muesli"}
            menuItem={["Muesli", "Oats", "CornFlakes"]}
          />
        </Typography>
      </Grid>
      <Grid item md={2.2}>
        <Typography component="div">Spend Value</Typography>
        <Typography>
          <DropDown
            initialValue={"Muesli"}
            menuItem={["Muesli", "Oats", "CornFlakes"]}
          />
        </Typography>
      </Grid>
      <Grid item md={2.2}>
        <Typography component="div">Funnel</Typography>
        <Typography>
          <DropDown
            initialValue={"Muesli"}
            menuItem={["Muesli", "Oats", "CornFlakes"]}
          />
        </Typography>
      </Grid>
      <Grid item md={2.2}>
        <Typography component="div">Start Date</Typography>
        <Typography>
          <CalendarComponent />
        </Typography>
      </Grid>

      <Grid item md={2.2}>
        <Typography component="div">End Date</Typography>
        <Typography>
          <CalendarComponent />
        </Typography>
      </Grid>

      <Grid item md={1}>
        <Typography sx={{ pt: 4 }}>
          <MSButton title="Generate" />
        </Typography>
      </Grid>
    </Grid>
  );
};




const DataTable = () => {
  return (

    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead 
        sx={{backgroundColor:"rgba(6, 64, 136, 1)",}}
        >
          <TableRow>
            <TableCell rowSpan={3} sx={[styles.text, {border:1, width:"10%"}]} align="center">ROAS</TableCell>
            <TableCell rowSpan={3} sx={[styles.text, {border:1, width:"10%"}]} align="center">SKUs</TableCell>
            <TableCell colSpan={9} sx={[styles.text, {border:1, width:"40%"}]} align="center">Budget for Search</TableCell>
            <TableCell colSpan={3} sx={[styles.text, {border:1, width : "30%"}]} align="center">Display</TableCell>
            <TableCell rowSpan={3} sx={[styles.text, {border:1, width:"10%"}]} align="center">Total Sales</TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={4} sx={[styles.text, {border:1}]} align="center">SP</TableCell>
            <TableCell colSpan={3} sx={[styles.text, {border:1}]} align="center">SB</TableCell>
            <TableCell rowSpan={2} sx={[styles.text, {border:1}]} align="center">SBV</TableCell>
            <TableCell rowSpan={2} sx={[styles.text, {border:1}]} align="center">SD</TableCell>
            <TableCell rowSpan={2} sx={[styles.text, {border:1}]} align="center">Core</TableCell>
            <TableCell rowSpan={2} sx={[styles.text, {border:1}]} align="center">Growth</TableCell>
            <TableCell rowSpan={2} sx={[styles.text, {border:1}]} align="center">Adjacent</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={[styles.text]} align="center">Brand</TableCell>
            <TableCell sx={[styles.text]} align="center">Category</TableCell>
            <TableCell sx={[styles.text]} align="center">Competitor</TableCell>
            <TableCell sx={[styles.text, {borderRight:1}]} align="center">Auto</TableCell>
            <TableCell sx={[styles.text]} align="center">Brand</TableCell>
            <TableCell sx={[styles.text]} align="center">Category</TableCell>
            <TableCell sx={[styles.text]} align="center">Auto</TableCell>
          </TableRow>

        </TableHead>
        
        <TableBody>
            {
              rows.map((row, index)=>
              <TableRow key={index}>
                <TableCell align="center">{row.roas}</TableCell>
                <TableCell align="center">{row.sku}</TableCell>
                <TableCell align="center">{row.spBrand}</TableCell>
                <TableCell align="center">{row.spCategory}</TableCell>
                <TableCell align="center">{row.competitor}</TableCell>
                <TableCell align="center">{row.spAuto}</TableCell>
                <TableCell align="center">{row.sbBrand}</TableCell>
                <TableCell align="center">{row.sbCategory}</TableCell>
                <TableCell align="center">{row.sbAuto}</TableCell>
                <TableCell align="center">{row.sbv}</TableCell>
                <TableCell align="center">{row.sd}</TableCell>
                <TableCell align="center">{row.core}</TableCell>
                <TableCell align="center">{row.growth}</TableCell>
                <TableCell align="center">{row.adjacent}</TableCell>
                {
                  row.rowSpan ? 
                    <TableCell rowSpan={rows.length} align="center">5000</TableCell> : ""
                }
            </TableRow>
            )}



            
        </TableBody>
      </Table>
    </TableContainer>
  );
};