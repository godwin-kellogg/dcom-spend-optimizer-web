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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { DropDown } from "components/DropdownComponent/DropdownComponent";
import { Item } from "components/ItemPaper/ItemPaper";
import MSButton from "components/MSButton/MSButton";
import { TopRankingTable } from "components/TopRankingKeywords/TopRankingTable";
import { CalendarComponent } from "components/calendar/calendar";
import { DrawerHeader, Filter } from "components/sidebar/FilterSidebar";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ComptetiorCardData } from "../../../../@types/components";
import "./MSOAmazon.css";
import {
  AgeData,
  CategorySearchData,
  ComptitionData,
  GenderData,
  ProductRankingData,
  ProductSearch,
  TableHeadData,
  TopCategories,
  filterCategory,
  rows
} from "./MSOAmazon.data";
import { smallCardData } from "../MSODescriptive/MSODashboard.data";
import { Cards } from "components/MSOSmallCards/MSOSmallCards";


const MSOAmazon = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isValue, setValue] = React.useState(false);

  const handleFilterButtonClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Grid container sx={{ ml: -4, height: "auto" }}>
      <Grid
        item
        xs={drawerOpen ? 3 : 0.5}
        sm={drawerOpen ? 3 : 0.5}
        md={drawerOpen ? 2.5 : 0.5}
        xl={drawerOpen ? 2.5 : 0.5}
      >
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
        sx={{ marginTop: 1 }}
        xs={drawerOpen ? 12 : 11.5}
        sm={drawerOpen ? 12 : 11.5}
        md={drawerOpen ? 9.5 : 11.5}
        xl={drawerOpen ? 9.5 : 11.5}
      >
        <RightConatiner />
      </Grid>
    </Grid>
  );
};

export default MSOAmazon;

function FilterSidebar({ open, onClose, onFilterDataChange }: any) {
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

  return (
    <Drawer
      className="custom-drawer"
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Typography className="filterText">
          <IconButton sx={{ color: "rgba(43, 82, 221, 1)" }} disableRipple>
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
}

const RightConatiner = () => {
  return (
    <>
      <TopContainer />
      <MiddleContainer />

      
      <BottomContainer />
    </>
  );
};

const renderColorfulLegendText = (value: string) => {
  return (
    <span
      style={{
        color: "#596579",
        fontWeight: 500,
        paddingRight: "10rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      {value}
    </span>
  );
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  return (
    <text
      x={x}
      y={y}
      fill="rgba(238, 255, 233, 1)"
      textAnchor="middle"
      dominantBaseline="central"
      fontWeight={600}
      letterSpacing="0.03125rem"
      fontSize="1rem"
    >
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const TopContainer = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {TopCategories.map((category) => (
          <Grid item md={4} sm={12} xs={12}>
            <Item padding="0" key={category.category}>
              <Typography m={2} className="filterText">
                {category.category}
              </Typography>
              <Divider />
              <List>
                {category.data.map((data) => (
                  <ListItem secondaryAction={`${data.value}%`} key={data.value}>
                    <ListItemText primary={data.name} />
                  </ListItem>
                ))}
              </List>
            </Item>
          </Grid>
        ))}

        <Grid item md={4} sm={12} xs={12}>
          <Item padding="0">
            <Typography m={2} className="filterText">
              Gender Distribution
            </Typography>
            <Divider />

            <Box sx={{ width: "100%", height: "auto" }}>
              <ResponsiveContainer width="100%" height={255}>
                <PieChart>
                  <Legend
                    iconType="square"
                    layout="vertical"
                    verticalAlign="middle"
                    iconSize={15}
                    formatter={renderColorfulLegendText}
                    align="right"
                  />
                  <Pie
                    data={GenderData}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {GenderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

const MiddleContainer = () => {
  return (
    <>
      <Box mt={2} mb={2}>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12} sx={{height : "45vh"}}>
          <Item padding="1rem" className="box-shadow-custom">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography className="filterText">
                Product Search Ranking
              </Typography>
              <Typography>
                <DropDown
                  initialValue={ProductSearch.initialVal}
                  menuItem={ProductSearch.menuItems}
                />
              </Typography>
            </Typography>
            <Box
              mt={4}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <ResponsiveContainer width="90%" height={320}>
                <LineChart
                  width={500}
                  height={200}
                  data={ProductRankingData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="1 1" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="rgba(229, 113, 143, 1)"
                    strokeWidth={2}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Item padding="1rem" className="box-shadow-custom">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography className="filterText">Age Distribution</Typography>
              <Typography>
                <DropDown
                  initialValue={ProductSearch.initialVal}
                  menuItem={ProductSearch.menuItems}
                />
              </Typography>
            </Typography>
            <Box
              mt={4}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <ResponsiveContainer width="90%" height={320}>
                <BarChart data={AgeData}>
                  <CartesianGrid strokeDasharray="1 1" />
                  <XAxis dataKey="name" />
                  <YAxis
                    tickFormatter={(value, index) => AgeData[index].yAxis}
                  ></YAxis>
                  <Tooltip />
                  <Bar
                    barSize={30}
                    dataKey="value"
                    fill="rgba(96, 125, 230, 1)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={1}>
        <Grid item sm={6} xs={12}>
          <Item padding="1rem" className="box-shadow-custom">
            <Typography className="filterText">
              Category Search Trend And Brand Recall
            </Typography>
            <Box
              mt={4}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <ResponsiveContainer width="90%" height={320}>
                <PieChart>
                  <Legend
                    iconType="square"
                    layout="vertical"
                    verticalAlign="middle"
                    iconSize={15}
                    formatter={renderColorfulLegendText}
                    align="right"
                  />
                  <Pie
                    data={CategorySearchData}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {CategorySearchData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Item padding="0" >
            <TopRankingTable />
          </Item>
        </Grid>
      </Grid>
    </Box>
    <Box className="custom-container" mt={2} padding={2}>
    <Typography
      sx={{ fontWeight: 600, color: "rgba(32, 32, 32, 1)", mb: 1 }}
    >
      Other brand products viewed by your customers
    </Typography>
    <Grid container spacing={2}>
      {ComptitionData.map((data) => (
        <Grid item xs={3}>
          <ComptetiorCard {...data} />
        </Grid>
      ))}
    </Grid>
  </Box>
    </>
  );
};



const BottomContainer = () => {
  return (
    <Item padding="0" sx={{ marginBottom: 4 }}>
      <Typography className="filterText" m={2}>
        Search Advertising Performance Metrics & Benchmarks
      </Typography>

      <TableContainer className="box-shadow-custom table-scroll-bar">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className="table-header-text sticky-table-cell"
                rowSpan={2}
              >
                Keyword Segments
              </TableCell>
              {TableHeadData.dates.map((date, dataIndex) => (
                <TableCell
                  className={`table-header-text ${
                    dataIndex % 2 === 0 ? "grey-table" : "white-table"
                  }`}
                  colSpan={6}
                  sx={{
                    minWidth: 640,
                  }}
                >
                  {date}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {TableHeadData.dates.map((dat, dataIndex) =>
                TableHeadData.fieldName.map((val) => (
                  <TableCell
                    className={`table-header-text ${
                      dataIndex % 2 === 0 ? "grey-table" : "white-table"
                    }`}
                  >
                    {val}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {TableHeadData.keywordSegment.map((val) => (
              <TableRow>
                <TableCell>{val}</TableCell>
                {rows.YourBrand.map((value) => (
                  <TableCell>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
};

const ComptetiorCard = ({ id, imgSrc, textData }: ComptetiorCardData) => {
  return (
    <Item>
      <Grid container>
        <Grid item xs={4}>
          <Typography className="comptetior-card-id">{id}</Typography>
        </Grid>
        <Grid item xs={8} pl={2}>
          <img width={75} height={75} src={imgSrc} alt={textData} />
        </Grid>
        <Typography className="comptetior-card-text">{textData}</Typography>
      </Grid>
    </Item>
  );
};
