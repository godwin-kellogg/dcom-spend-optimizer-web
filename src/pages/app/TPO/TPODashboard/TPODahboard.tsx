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
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { filterApi, getFilteredData } from "src/api/tpo.api";
import { DropDown } from "src/components/DropdownComponent/DropdownComponent";
import { Item } from "src/components/ItemPaper/ItemPaper";
import MSButton from "src/components/MSButton/MSButton";
import { TPOProgressCard } from "src/components/ProgressCard/ProgressCard";
import { CalendarComponent } from "src/components/calendar/calendar";
import { DrawerHeader, Filter } from "src/components/sidebar/FilterSidebar";
import React from "react";
import "./TPODashboard.css";
import { CardData } from "./TPODashboardData";
import TPODashboardGraph from "./TPOGraphs/TPODashboardGraph";
import { data, dataChanged } from "./TPOGraphs/chartData";

const TPODashboard = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [filterData, setFilterdata] = React.useState<any[] | boolean>(false);
  const [cardsVal, setCardVal] = React.useState<any>();
  const [isValue, setValue] = React.useState(false);

  const handleFilterButtonClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await filterApi();
        if (response) {
          const result = await response.json();
          setFilterdata(result);
        } else {
          setFilterdata(false);
          console.log("Data error", response);
        };

      } catch (error) {

      }
    };

    fetchData();
    TPOdata();
  }, []);


  const TPOdata = async (data?:any)=>{
    try {
    const response = await getFilteredData(data);
    if(response){
      const cardRes = response.cardData;
      setCardVal(cardRes);
      // CardData[0].cards[0].header = cardRes.s2s.s_to_s_ratio;
      // console.log("Screen data response", response, cardRes.s2s.s_to_s_delta);
    };
    } catch (error) {
      
    }
  };



  const applyFil = (data:any)=>{
    console.log("Apply filter is working fine++", data);
    TPOdata(data);
  }
  return (
    <Grid container sx={{ ml: -4 }}>
      <Grid item>
        {drawerOpen ? (
          <FilterSidebar
            open={drawerOpen}
            onClose={handleFilterButtonClick}
            applyFilters={(data:any)=>{applyFil(data)}}
            data={filterData}
          />
        ) : (
          <Filter handleFilterButtonClick={handleFilterButtonClick} />
        )}
      </Grid>

      <Grid
        item
        sx={{ mt: 1, mr: 2, position: "absolute", left: drawerOpen ? 330 : 70 }}
      >
        <RightConatiner value={cardsVal} />
      </Grid>
    </Grid>
  );
};

export default TPODashboard;

const RightConatiner = ({value}: any) => {
  const [myCard, setCard] = React.useState(CardData);

  React.useEffect(()=>{
    if(value){
      const s2sRatio:string = value.s2s?.s_to_s_ratio;
      const s2sDelta = value.s2s?.s_to_s_delta;
      const spendVal = value.spend?.spends;
      const spendDelta = value.spend?.spend_delta;
      const salesval = value.sales?.sales;
      const salesDel = value.sales?.sales_delta;
      const absgp = value.gp?.abs_gross_profit;
      const gpdel = value.gp?.gross_profit_delta;
      const gpm = value.gp?.gross_profit_margin;
      const offerDep = value.offerDepth.offer_depth;
      const offer_del = value.offerDepth.offer_depth_delta;
      

      const updatedCardData = [...myCard];
      updatedCardData[0].cards[0].header = s2sRatio ? Number(s2sRatio).toFixed(2) : 'N/A';
      updatedCardData[0].cards[0].delta = s2sDelta ? Number(s2sDelta).toFixed(2) : 'N/A';
      updatedCardData[0].cards[1].header = (spendVal / 100000).toFixed(1) + "Lac(s)";
      updatedCardData[0].cards[1].delta = spendDelta ? spendDelta : 'N/A';
      updatedCardData[0].cards[2].header = (salesval / 100000).toFixed(1) + "Lac(s)";
      updatedCardData[0].cards[2].delta = salesDel ? Number(salesDel / 100000).toFixed(2) + "L" : 'N/A';

      updatedCardData[1].cards[0].header = (absgp / 100000).toFixed(1) + "Lac(s)";
      updatedCardData[1].cards[0].delta = gpdel ? Number(gpdel).toFixed(2) : 'N/A';
      updatedCardData[1].cards[1].header = gpm ? Number(gpm).toFixed(2) + "%" : "N/A";
      updatedCardData[1].cards[1].delta = gpdel ? Number(gpdel).toFixed(2) : 'N/A';

      updatedCardData[2].cards[0].header = offerDep ? Number(offerDep).toFixed(2) + "%" : "N/A";;
      updatedCardData[2].cards[0].delta = offer_del ? Number(offer_del).toFixed(2) : 'N/A';
      updatedCardData[2].cards[1].header = '-';
      updatedCardData[2].cards[1].delta = 'N/A';


      setCard(updatedCardData);
      console.log("card data from States+++", value, salesval)
    }
    
  },[value]);

  return (
    <Box className="main-container">
      <Grid container spacing={2}>
        {myCard.map((data, index) => (
          <Grid item xs={12} md={12} lg={data.lg} key={index}>
            <Item padding="0.75rem">
              <Typography className="container-header">{data.title}</Typography>
              <Grid container spacing={2}>
                {data.cards.map((value, index) => (
                  <Grid item xs={6} sm={4} md={4} lg={value.lg} key={index}>
                    <TPOProgressCard
                      header={value.header}
                      subHeader={value.subHeader}
                      action={value.action}
                      delta={value.delta}
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

function FilterSidebar({ open, onClose, applyFilters, data }: any) {
  const [category, setCategory] = React.useState<string[]>(["ALL CATEGORIES"]);
  const [skus, setSkus] = React.useState<string[]>(["ALL SKUs"]);
  const [promotions, setPromotions] = React.useState<string[]>(["ALL PROMOTIONS"]);
  const [timeframe, setTimeframe] = React.useState<string[]>([]);
  const [showProgress, setProgress] = React.useState<boolean>(true);



  const [filters, setFilters] = React.useState<any>({
    category : undefined,
    skus : undefined,
    promotions : undefined,
    to_timeframe : undefined,
    from_timeframe : undefined
  });

  const handleDropDownChange = (type: string, value: any) => {
    console.log("value From Change DropDown", value, type);
    switch (type){
      case "Category":
        setFilters((data:any) => ({
          ...data,
          category: value
        }));
      break;
      case "Promotion":
      setFilters((data:any) => ({
        ...data,
        promotions: value[0]
      }));
      break;
      case "SKUs":
      setFilters((data:any) => ({
        ...data,
        skus: value[0]
      }));
      break;
        default:
        break;
    }

    
  };

  const onChangeMethod = (type: string, value: any) => {
    console.log("Data Chabge", type, value);
    console.log("After getting filter", filters);

    if(type === 'From'){
    setFilters((data:any) => ({
      ...data,
      from_timeframe: value
    }));
    }else{
      setFilters((data:any) => ({
        ...data,
        to_timeframe: value
      }));
    }
  };

  React.useEffect(() => {
    if (data) {
      const result = data.result;
      setCategory(["ALL CATEGORIES", ...result.categories]);
      setSkus(["ALL SKUs", ...result.skus]);
      setPromotions(["ALL PROMOTIONS", ...result.promotions]);
      setTimeframe(result.timeframe);
      setProgress(false);
    } else {
      setProgress(true);
      console.log("Error while getting data");
    }
  }, [data]);

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
      {showProgress ? (
        <Box sx={{ width: "100%", color: "blue" }} color="seagreen">
          <LinearProgress />
        </Box>
      ) : (
        ""
      )}

      <List>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">Category</Typography>
            <Typography>
              <DropDown
                initialValue={category[0]}
                menuItem={category}
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
                initialValue={skus[0]}
                menuItem={skus}
                onChange={(value) => handleDropDownChange("SKUs", value)}
                isCode={true}
              />
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">Promotion</Typography>
            <Typography>
              <DropDown
                initialValue={promotions[0]}
                menuItem={promotions}
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
                  timeframe={timeframe}
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
                  timeframe={timeframe}
                />
              </Typography>
            </ListItem>
          </ListItemText>
        </ListItem>
      </List>

      <Box
        sx={{
          position: "relative",
          bottom: 0,
          mt:4,
          width: "100%",
        }}
      >
        <Divider />
        <MSButton
          title="Apply"
          sx={{ margin: 2, width: "40%" }}
          endIcon={<ArrowForward />}
          onClick={()=>{applyFilters(filters)}}
        />
      </Box>
    </Drawer>
  );
}
