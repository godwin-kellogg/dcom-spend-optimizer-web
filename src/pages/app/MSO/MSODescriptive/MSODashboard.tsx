import React from "react";
import {
  Grid,
  Typography,
  Box,
  FormControl,
  List,
  ListItem,
  Radio,
  RadioGroup,
  ListItemText,
  FormControlLabel,
  RadioProps,
  styled,
  
} from "@mui/material";
import { FilterSidebar, Filter } from "components/sidebar/FilterSidebar";
import {
  CardData,
  data,
  smallCardData,
  dropDownVal,
  SpendImage,
  SpendData,
  DisplayData,
  smallData
} from "./MSODashboard.data";
import { Item } from "components/ItemPaper/ItemPaper";
import { MSOProgressCard } from "components/ProgressCard/ProgressCard";
import { styles } from "./MSODashboard.styles";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { TopRankingTable } from "components/TopRankingKeywords/TopRankingTable";
import { Cards } from "components/MSOSmallCards/MSOSmallCards";
import DropDown from "components/dropDownSelect/dropDown";

const MSODashboard = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleFilterButtonClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Grid container sx={{ ml: -4, height: "auto" }}>
      <Grid
        item
        xs={drawerOpen ? 3 : 0.5}
        sm={drawerOpen ? 3 : 0.5}
        md={drawerOpen ? 3 : 0.5}
        xl={drawerOpen ? 2.5 : 0.5}
      >
        {drawerOpen ? (
          <FilterSidebar open={drawerOpen} onClose={handleFilterButtonClick} />
        ) : (
          <Filter handleFilterButtonClick={handleFilterButtonClick} />
        )}
      </Grid>

      <Grid
        sx={{ marginTop: 1 }}
        item
        xs={drawerOpen ? 12 : 11.5}
        sm={drawerOpen ? 12 : 11.5}
        md={drawerOpen ? 12 : 11.5}
        xl={drawerOpen ? 9.5 : 11.5}
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
              <Grid container spacing={1}>
                {data.cards.map((value) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={4}
                    lg={value.lg}
                    key={value.header}
                  >
                    <MSOProgressCard
                      {...value}
                    />
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
        ))}
      </Grid>

      {/* Mso Charts Data */}
      <MsoCharts />

      {/* Small Cards */}
      <Box className="custom-container" mt={2}>
        <Typography
          sx={{ fontWeight: 600, color: "rgba(32, 32, 32, 1)", mb: 1 }}
        >
          Spend Comparison Category
        </Typography>
        <Grid container spacing={2}>
          {smallCardData.map((data) => (
            <Grid item md={12 / smallCardData.length} key={data.productName}>
              <Cards {...data} key={data.actual} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Spend Comaprisan Category */}

      <MsoSpendComparisan />
    </Box>
  );
};

function MsoCharts() {
  return (
    <>
      <Grid container mt={1} spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={styles.graphBox}>
            <Typography sx={styles.graphText}>
              A to S for Different Categories
            </Typography>
            <Box sx={styles.chartContainer}>
              <ResponsiveContainer width="85%" height="85%">
                <BarChart
                  margin={{
                    top: 10,
                    right: 20,
                    bottom: 10,
                    left: 20,
                  }}
                  data={smallData}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />

                  <Bar dataKey="pv" fill="rgba(229, 113, 143, 1)" label={{position : "right"}} />
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
          <Box sx={[styles.graphBox, { padding: 0 }]}>
            <TopRankingTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};




const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
   
  },
  display : "flex",
  justifyContent : "center",
  alignItems : "center",

}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'rgba(43, 82, 221, 1)',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 15,
    height: 15,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
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
  const [value, setValue] = React.useState('allocated');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("Radio Selected Value", (event.target as HTMLInputElement).value);
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box className="custom-container">
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
          <Typography
            sx={styles.rotateText}
          >
            <Typography sx={{ rotate: "270deg" }}>Display</Typography>
          </Typography>
        </Grid>

        <Grid item xs={5.5}>
          <Box
            sx={styles.smallBox}
          >
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
                  sx={
                  { color: "rgba(0, 0, 0, 1)",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center" }
                }
                >
                  {data}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid
          xs={0.5}
          sx={styles.centerGrid}
          item
        >
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
          <Box
            sx={styles.smallBox}
          >
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
