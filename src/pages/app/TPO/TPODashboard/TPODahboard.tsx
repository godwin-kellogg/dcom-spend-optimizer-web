import {
  ArrowForward,
  ChevronLeft,
  FilterAltOutlined
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled
} from "@mui/material";
import { Item } from "components/ItemPaper/ItemPaper";
import MSButton from "components/MSButton/MSButton";
import { TPOProgressCard } from "components/ProgressCard/ProgressCard";
import { CalendarComponent } from "components/calendar/calendar";
import DropDown from "components/dropDownSelect/dropDown";
import { Filter } from "components/sidebar/FilterSidebar";
import React from "react";
import "./TPODashboard.css";
import { CardData, ChangedCardData, filterCategory, filterSKUs, filterPromotion } from "./TPODashboardData";
import TPODashboardGraph from "./TPOGraphs/TPODashboardGraph";
import {data, dataChanged} from "./TPOGraphs/chartData";



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));


const TPODashboard = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isValue, setValue] = React.useState(false);

  const handleFilterButtonClick = () => {
    setDrawerOpen(!drawerOpen);
  };


  return (

     <Grid container sx={{ ml: -4, height: "auto" }}>
        <Grid item 
          xs={drawerOpen ? 3 : 0.5} 
          sm={drawerOpen ? 3 : 0.5} 
          md={drawerOpen ? 2.5 : 0.5}
          xl={drawerOpen ? 2.5 : 0.5}
        >
          {drawerOpen ? (
            <FilterSidebar
              open={drawerOpen}
              onClose={handleFilterButtonClick}
              onFilterDataChange={()=>{
                setValue(!isValue)
              }}
            />
          ) : (
            <Filter handleFilterButtonClick={handleFilterButtonClick} />
          )}
        </Grid>

        <Grid
          item  
          sx={{marginTop : 1}} 
          xs={drawerOpen ? 12 : 11.5} 
          sm={drawerOpen ? 12 : 11.5} 
          md={drawerOpen ? 9.5 : 11.5}
          xl={drawerOpen ? 9.5 : 11.5}
        >
          <RightConatiner value={isValue} />
        </Grid>
      </Grid>
  );
};

export default TPODashboard;



const RightConatiner = ({value}:any) => {

  return (

      <Box className="main-container">
        <Grid container spacing={2}>
          {(value ? ChangedCardData : CardData).map((data, index) => (
            <Grid item xs={12} md={12} lg={data.lg} key={index}>
              <Item>
                <Typography className="container-header">
                  {data.title}
                </Typography>
                <Grid container spacing={1}>
                  {data.cards.map((value, index) => (
                    <Grid item xs={6} sm={4} md={4} lg={value.lg} key={index}>
                      <TPOProgressCard
                        header={value.header}
                        subHeader={value.subHeader}
                        bgColor={value.bgColor}
                        actionLeft={value.leftAction}
                        actionRight={value.rightAction}
                        arrowIcon={value.arrowIcon}
                        rightColor={value.rightColor}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Item>
            </Grid>
          ))}
        </Grid>

        <Box sx={{marginTop : 3, marginBottom : 3}}>
          
          <TPODashboardGraph data={
            value ? dataChanged : data
          } />
          
        </Box>
      </Box>
  );
};




function FilterSidebar({ open, onClose, onFilterDataChange }: any) {
  function applyFilters (){
    onFilterDataChange('changed');
  }

  const handleDropDownChange = (type:string, value:any) => {
    console.log("value From Change DropDown", value, type);
    onFilterDataChange('changed');
  };

  const onChangeMethod = (type:string,value:any)=>{
    console.log("Data Chabge", value.$d, type)
  }

  return (
    <Drawer
      className="custom-drawer "
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Typography className="filterText">
          <IconButton
            sx={{ color: "rgba(43, 82, 221, 1)" }}
            disableRipple
            >
            <FilterAltOutlined />
          </IconButton>
          Filter
        </Typography>
        <IconButton onClick={onClose}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">Category</Typography>
            <Typography>
              <DropDown
                initialValue={filterCategory.initialVal}
                menuItem={filterCategory.Category}
                onChange={(value) => handleDropDownChange("Category", value)}
              />
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">SKUs</Typography>
            <Typography>
              <DropDown
                initialValue={filterSKUs.initialVal}
                menuItem={filterSKUs.Category}
                onChange={(value) => handleDropDownChange("SKUs", value)}
              />
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">Promotion</Typography>
            <Typography>
              <DropDown
                initialValue={filterPromotion.initialVal}
                menuItem={filterPromotion.Category}
                onChange={(value) => handleDropDownChange("Promotion", value)}
              />
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Typography className="titleText">Time Frame</Typography>
            <ListItem>
              <Typography mr={2} className="titleText">
                From
              </Typography>
              <Typography>
                <CalendarComponent isFrom={true}
                onDateSelect={(value:any)=>{onChangeMethod('From', value)}} 
                />
              </Typography>
            </ListItem>
            <ListItem sx={{ marginTop: 3 }}>
              <Typography mr={4.5} className="titleText">
                To
              </Typography>
              <Typography>
                <CalendarComponent isFrom={false}
                onDateSelect={(value:any)=>{onChangeMethod('To', value)}} 
              />
              </Typography>
            </ListItem>
          </ListItemText>
        </ListItem>
      </List>

      <Divider sx={{ mt: 3 }} />
      <MSButton
        title="Apply"
        sx={{ margin: 2, width: "40%" }}
        endIcon={<ArrowForward />}
        onClick={applyFilters}
      />
    </Drawer>
  );
};
