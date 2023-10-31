import {
  ArrowForward,
  ChevronLeft,
  FilterAltOutlined,
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
  LinearProgress
} from "@mui/material";
import { Item } from "components/ItemPaper/ItemPaper";
import MSButton from "components/MSButton/MSButton";
import { TPOProgressCard } from "components/ProgressCard/ProgressCard";
import { CalendarComponent } from "components/calendar/calendar";
import {DropDown} from "components/DropdownComponent/DropdownComponent";
import { Filter, DrawerHeader } from "components/sidebar/FilterSidebar";
import React from "react";
import "./TPODashboard.css";
import { CardData, ChangedCardData, filterCategory } from "./TPODashboardData";
import TPODashboardGraph from "./TPOGraphs/TPODashboardGraph";
import { data, dataChanged } from "./TPOGraphs/chartData";
import { filterApi } from "api/tpo.api";

const TPODashboard = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isValue, setValue] = React.useState(false);

  const handleFilterButtonClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Grid container sx={{ ml: -4 }}>
      <Grid item>
        {drawerOpen ? (
          <FilterSidebar
            open={drawerOpen}
            onClose={handleFilterButtonClick}
            onFilterDataChange={() => {
              setValue(!isValue);
            }}
          />
        ) : (
          <Filter handleFilterButtonClick={handleFilterButtonClick} />
        )}
      </Grid>

      <Grid
        item
        sx={{ mt: 1, mr: 2, position: "absolute", left: drawerOpen ? 330 : 70 }}
      >
        <RightConatiner value={isValue} />
      </Grid>
    </Grid>
  );
};

export default TPODashboard;

const RightConatiner = ({ value }: any) => {
  return (
    <Box className="main-container">
      <Grid container spacing={2}>
        {(value ? ChangedCardData : CardData).map((data, index) => (
          <Grid item xs={12} md={12} lg={data.lg} key={index}>
            <Item>
              <Typography className="container-header">{data.title}</Typography>
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

      <Box sx={{ marginTop: 3, marginBottom: 3 }}>
        <TPODashboardGraph data={value ? dataChanged : data} />
      </Box>
    </Box>
  );
};

function FilterSidebar({ open, onClose, onFilterDataChange }: any) {
  const [category, setCategory] = React.useState<any>(filterCategory);
  const [showProgress, setProgress] = React.useState<boolean>(true);
  const [intialVal] = React.useState<string>('CHOCO FILLS');

  function applyFilters() {
    onFilterDataChange("changed");
  }

  const handleDropDownChange = (type: string, value: any) => {
    console.log("value From Change DropDown", value, type);
    onFilterDataChange("changed");
  };

  const onChangeMethod = (type: string, value: any) => {
    console.log("Data Chabge", value.$d, type);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await filterApi();
        if(response){
        const data = await response?.json();
        setCategory(data.result);
        setProgress(response?.ok ? false : true);
        }else{setCategory(filterCategory)}
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Drawer
      className="custom-drawer"
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Typography className="filterText">
          <IconButton
            sx={{ color: "rgba(43, 82, 221, 1)" }}
            disableRipple
            size="small"
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
      {
        showProgress ? <Box sx={{ width: '100%', color : "blue" }} color="seagreen">
        <LinearProgress />
        </Box> : 
        ""
      }
      

      <List>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">Category</Typography>
            <Typography>
              <DropDown
                initialValue={`${intialVal}`}
                menuItem={category.categories}
                onChange={(value) => handleDropDownChange("Category", value)}
              />
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">SKUs</Typography>
            <Typography sx={{ width: "100%" }}>
              <DropDown
                initialValue={`${category.skus[0][0]}`}
                menuItem={category.skus}
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
                initialValue={`B01N1PCX5G,SH34`}
                menuItem={category.promotions}
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
                <CalendarComponent
                  isFrom={true}
                  onDateSelect={(value: any) => {
                    onChangeMethod("From", value);
                  }}
                  timeframe={category.timeframe}
                />
              </Typography>
            </ListItem>
            <ListItem sx={{ marginTop: 3 }}>
              <Typography mr={4.5} className="titleText">
                To
              </Typography>
              <Typography>
                <CalendarComponent
                  isFrom={false}
                  onDateSelect={(value: any) => {
                    onChangeMethod("To", value);
                  }}
                  // timeframe={category.timeframe}
                />
              </Typography>
            </ListItem>
          </ListItemText>
        </ListItem>
      </List>

      <Divider sx={{ mt: 1 }} />
      <Box sx={{ padding: "0.875rem" }}>
        <MSButton
          title="Apply"
          endIcon={<ArrowForward />}
          onClick={applyFilters}
        />
      </Box>
    </Drawer>
  );
}
