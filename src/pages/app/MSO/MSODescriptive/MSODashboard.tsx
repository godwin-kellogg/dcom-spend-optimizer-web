import { ArrowForward, ChevronLeft } from "@mui/icons-material";
import FilterAltOutlined from "@mui/icons-material/FilterAltOutlined";
import {
  Box,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  RadioProps,
  Typography,
  styled,
} from "@mui/material";
import { DropDown } from "components/DropdownComponent/DropdownComponent";
import { Item } from "components/ItemPaper/ItemPaper";
import MSButton from "components/MSButton/MSButton";
import { Cards } from "components/MSOSmallCards/MSOSmallCards";
import { MSOProgressCard } from "components/ProgressCard/ProgressCard";
import { CalendarComponent } from "components/calendar/calendar";
import { DrawerHeader, Filter } from "components/sidebar/FilterSidebar";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  CardData,
  DisplayData,
  SpendData,
  SpendImage,
  data,
  dropDownVal,
  smallCardData,
  smallData,
} from "./MSODashboard.data";
import { styles } from "./MSODashboard.styles";

const MSODashboard = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleFilterButtonClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Grid container sx={{ ml: -4 }}>
      <Grid item>
        {drawerOpen ? (
          <FilterSidebar open={drawerOpen} onClose={handleFilterButtonClick} />
        ) : (
          <Filter handleFilterButtonClick={handleFilterButtonClick} />
        )}
      </Grid>

      <Grid
        sx={{ mt: 1, mr: 2, position: "absolute", left: drawerOpen ? 330 : 70 }}
        item
      >
        <RightConatiner />
      </Grid>
    </Grid>
  );
};

export default MSODashboard;

const RightConatiner = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Grid container spacing={2}>
        {CardData.map((data, index) => (
          <Grid item xs={12} md={12} lg={data.lg} key={index}>
            <Item>
              <Typography sx={styles.containerHeader}>{data.title}</Typography>
              <Grid container spacing={2}>
                {data.cards.map((value) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={4}
                    lg={value.lg}
                    key={value.header}
                  >
                    <MSOProgressCard {...value} />
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
        ))}
      </Grid>

      {/* Mso Charts Data */}
      <MsoCharts />

      {/* Spend Comaprisan Category */}
      <MsoSpendComparisan />
    </Box>
  );
};

function FilterSidebar({ open, onClose }: any) {
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
      <Divider sx={{ mt: -1 }} />

      <List>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">Category</Typography>
            <Typography>
              <DropDown initialValue={"Category"} menuItem={["Category"]} />
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
                <CalendarComponent isFrom={true} />
              </Typography>
            </ListItem>
            <ListItem sx={{ marginTop: 3 }}>
              <Typography mr={4.5} className="titleText">
                To
              </Typography>
              <Typography>
                <CalendarComponent isFrom={false} />
              </Typography>
            </ListItem>
          </ListItemText>
        </ListItem>
      </List>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "8vh",
        }}
      >
        <Divider />
        <MSButton
          title="Apply"
          sx={{ margin: 2, width: "40%" }}
          endIcon={<ArrowForward />}
        />
      </Box>
    </Drawer>
  );
}

function MsoCharts() {
  return (
    <>
      <Grid container mt={0} spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={styles.graphBox}>
            <Typography sx={styles.graphText}>
              A to S for Different Categories
            </Typography>
            <Box sx={styles.chartContainer}>
              <ResponsiveContainer width="90%" height="80%">
                <BarChart
                  margin={{
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 40,
                  }}
                  data={smallData}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="1 1" />
                  <XAxis type="number" dataKey="pv" />
                  <YAxis type="category" domain={["dataMin", "dataMax"]}>
                    <Label
                      value="Category"
                      offset={35}
                      position="center"
                      angle={-90}
                    />
                  </YAxis>
                  <Tooltip />

                  <Bar
                    dataKey="pv"
                    fill="rgba(229, 113, 143, 1)"
                    label={{ position: "right" }}
                    barSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={styles.graphBox}>
            <Typography sx={styles.graphText}>
              Sales across Categories
            </Typography>
            <Box sx={styles.chartContainer}>
              <ResponsiveContainer width="80%" height="80%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" stackId="a" fill="rgba(96, 125, 230, 1)" />
                  <Bar dataKey="uv" stackId="a" fill="rgba(229, 113, 143, 1)" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={styles.graphBox}>
            <Typography sx={styles.graphText}>Glance View Trends</Typography>
            <Box sx={styles.chartContainer}>
              <ResponsiveContainer width="80%" height="80%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" fill="rgba(96, 125, 230, 1)" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={[styles.graphBox]}>
            <Typography sx={styles.graphText}>
              Spend Comparison Category
            </Typography>
            <Grid container spacing={2} pt={2}>
              {smallCardData.map((data) => (
                <Grid item md={4} sm={6} xs={12} key={data.productName}>
                  <Cards {...data} key={data.actual} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "rgba(43, 82, 221, 1)",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 15,
    height: 15,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

function MsoSpendComparisan() {
  const [value, setValue] = React.useState("allocated");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box className="custom-container" padding={2} mt={2}>
      <Grid container>
        <Grid item xs={6}>
          <Typography sx={styles.normalText}>
            Spend Comparison Category
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography align="right" sx={styles.normalText}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="allocated"
                  defaultValue={"Allocated Vs Actual"}
                  control={<BpRadio />}
                  label="Allocated Vs Actual"
                />
                <FormControlLabel
                  value="actual"
                  control={<BpRadio />}
                  label="Actual Vs Actual"
                />
              </RadioGroup>
            </FormControl>
          </Typography>
        </Grid>
      </Grid>

      <Box width="15%" mb={1}>
        <DropDown initialValue={[`All Category`]} menuItem={dropDownVal} />
      </Box>

      <Grid container mt={4}>
        <Grid item xs={0.5}>
          <Typography sx={styles.rotateText}>
            <Typography sx={{ rotate: "270deg" }}>Search</Typography>
          </Typography>
        </Grid>

        <Grid xs={5.5} item>
          <Box sx={styles.gridBox}>
            <Grid container>
              <Grid item xs={2} sx={styles.gridContainer}>
                <Typography sx={styles.percentText}>88%</Typography>
                <Typography mt={1} component="span" variant={"body2"}>
                  <img src={SpendImage} alt="data" />
                </Typography>
              </Grid>

              {SpendData.map((data, index) => (
                <Grid
                  xs={2}
                  sx={{ display: "flex", justifyContent: "left" }}
                  key={index}
                  item
                >
                  <List>
                    {data.data.map((value, index) => (
                      <ListItem key={index} sx={{ padding: 0.7 }}>
                        <ListItemText
                          primaryTypographyProps={styles.SpendText}
                          primary={value.name}
                        />
                        <ListItemText
                          primaryTypographyProps={styles.SpendText}
                          primary={value.value}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid xs={0.5} sx={styles.vsContainer} item>
          <Typography sx={styles.vsText}>Vs</Typography>
        </Grid>

        <Grid xs={5.5} item>
          <Box sx={styles.gridBox}>
            <Grid container>
              <Grid item xs={2} sx={styles.gridContainer}>
                <Typography sx={styles.percentText}>88%</Typography>
                <Typography mt={1} component="span" variant={"body2"}>
                  <img src={SpendImage} alt="" />
                </Typography>
              </Grid>

              {SpendData.map((data, index) => (
                <Grid
                  xs={2}
                  sx={{ display: "flex", justifyContent: "left" }}
                  key={index}
                  item
                >
                  <List>
                    {data.data.map((value, index) => (
                      <ListItem key={index} sx={{ padding: 0.7 }}>
                        <ListItemText
                          primaryTypographyProps={styles.SpendText}
                          primary={value.name}
                        />
                        <ListItemText
                          primaryTypographyProps={styles.SpendText}
                          primary={value.value}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid container mt={3}>
        <Grid item xs={0.5}>
          <Typography sx={styles.rotateText}>
            <Typography sx={{ rotate: "270deg" }}>Display</Typography>
          </Typography>
        </Grid>

        <Grid item xs={5.5}>
          <Box sx={styles.smallBox}>
            <Grid container>
              <Grid pl={2} pt={2} pb={2} item xs={1.5} sx={styles.percentText}>
                12%
              </Grid>
              {DisplayData.map((data, index) => (
                <Grid
                  pl={2}
                  pt={2}
                  pb={2}
                  item
                  key={index}
                  xs={3.5}
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {data}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid xs={0.5} sx={styles.centerGrid} item>
          <Typography
            sx={{
              color: "rgba(6, 64, 136, 1)",
              fontSize: "1.3rem",
              fontWeight: 700,
            }}
          >
            Vs
          </Typography>
        </Grid>

        <Grid item xs={5.5}>
          <Box sx={styles.smallBox}>
            <Grid container>
              <Grid pl={2} pt={2} pb={2} item xs={1.5} sx={styles.percentText}>
                12%
              </Grid>
              {DisplayData.map((data, index) => (
                <Grid
                  pl={2}
                  pt={2}
                  pb={2}
                  item
                  key={index}
                  xs={3.5}
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {data}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
