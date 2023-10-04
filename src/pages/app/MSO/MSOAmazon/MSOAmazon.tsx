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
  Typography,
  styled
} from "@mui/material";
import { Item } from "components/ItemPaper/ItemPaper";
import MSButton from "components/MSButton/MSButton";
import { CalendarComponent } from "components/calendar/calendar";
import DropDown from "components/dropDownSelect/dropDown";
import { Filter } from "components/sidebar/FilterSidebar";
import React from "react";
import {
  CartesianGrid,
  Cell,
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
import { ComptitionData, ProductSearch, TopCategories, filterCategory } from "./MSOAmazon.data";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

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
        <RightConatiner value={isValue} />
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
      className="custom-drawer "
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

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const RightConatiner = ({ value }: any) => {
  return (
    <>
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </>
  );
};

const TopContainer = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {TopCategories.map((category) => (
          <Grid item md={4} sm={12} xs={12}>
            <Item padding="0" key={category.category}>
              <Typography
                m={2}
                sx={{
                  color: "rgba(32, 32, 32, 1)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.03125rem",
                }}
              >
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
            <Typography
              m={2}
              sx={{
                color: "rgba(32, 32, 32, 1)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.03125rem",
              }}
            >
              Gender Distribution
            </Typography>
            <Divider />
            <Box sx={{ width: "100%", height: "100%" }}>
              <ResponsiveContainer width="100%" height={255}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
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

const datas = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D" },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];

const MiddleContainer = () => {
  return (
    <Box mt={2} mb={2}>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <Item padding="1rem" >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(32, 32, 32, 1)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.03125rem",
                }}
              >
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
                  data={datas}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    connectNulls
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Item padding="1rem">
            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(32, 32, 32, 1)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.03125rem",
                }}
              >
                Age Distribution
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
                  data={datas}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    connectNulls
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={1}>
        <Grid item sm={6} xs={12}>
          <Item padding="1rem">
            <Typography
              sx={{
                color: "rgba(32, 32, 32, 1)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.03125rem",
              }}
            >
              Category Search Trend And Brand Recall
            </Typography>
            <Box
              mt={4}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <ResponsiveContainer width="90%" height={320}>
                <LineChart
                  width={500}
                  height={200}
                  data={datas}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    connectNulls
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Item>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Item padding="1.8rem">
            <Typography
              sx={{
                color: "rgba(32, 32, 32, 1)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.03125rem",
              }}
            >
              Other brand products viewed by your customers
            </Typography>
            <Box
              mt={4}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Grid container spacing={2}>
                  {
                   ComptitionData.map((data, index)=>
                    <Grid item xs={4}>
                      <ComptetiorCard {...data} />
                    </Grid>
                   )
                  }
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Your Brand', 159, 6.0, 24, 4.0),
  createData('Competitor', 237, 9.0, 37, 4.3),
  createData('Generic', 262, 16.0, 24, 6.0),
  createData('All Keywords', 305, 3.7, 67, 4.3),
  
];
const BottomContainer = ()=>{
  return (
    <Item padding="0">
      <Typography 
      sx={{
          color: "rgba(32, 32, 32, 1)",
          fontSize: "1rem",
          fontWeight: 600,
          letterSpacing: "0.03125rem",
          margin :2
      }}>Search Advertising Performance Metrics & Benchmarks</Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header-text" rowSpan={2} sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">Keyword Segments</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}}></TableCell>
              <TableCell className="table-header-text" colSpan={6} sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">27 Apr</TableCell>
              <TableCell className="table-header-text" colSpan={6} sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">28 Apr</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">ACoS</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">Organic SOV</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">Adv SOV</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">CTR</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">CPC</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">Conv</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">ACoS</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">Organic SOV</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">Adv SOV</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">CTR</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">CPC</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">Conv</TableCell>
              <TableCell className="table-header-text" sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">ACoS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
              >
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">
                  {row.name}
                </TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.calories}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.fat}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.carbs}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.protein}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.fat}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.carbs}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.protein}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.fat}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.carbs}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.protein}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.fat}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.carbs}</TableCell>
                <TableCell sx={{border :1, borderColor : "rgba(212, 212, 212, 1)"}} align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  )
}



const ComptetiorCard = ({
  id,imgSrc, textData
}:ComptetiorCardData)=>{
  return (
    <Item>
        <Grid container>
          <Grid item xs={4}>
            <Typography sx={{
              height : "40px",
              width : "40px",
              backgroundColor : "rgba(251, 251, 252, 1)",
              display : "flex",
              justifyContent : "center",
              alignItems : "center"
            }}

            > 
                {id}
            </Typography>
          </Grid>
          <Grid item xs={8} pl={2}>
            <img
              width={75}
              height={75}
              src={imgSrc}
              alt=""
            />
          </Grid>
          <Typography
            sx={{
              overflow:"hidden",
              color : "rgba(32, 32, 32, 1)",
              textOverflow : "ellipsis",
              whiteSpace : "nowrap",
              fontSize : "0.875rem",
              fontWeight : 400,
              lineHeight : "1.5rem",
              letterSpacing : "0.03125rem",
              marginTop : 2
              }}
          >
            {textData}
          </Typography>
        </Grid>
    </Item>
  )
}
