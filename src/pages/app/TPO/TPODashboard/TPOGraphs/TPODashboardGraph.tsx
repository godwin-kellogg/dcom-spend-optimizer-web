import {
  Box,
  IconButton,
  Stack,
  Typography,
  Switch,
  SwitchProps,
  styled,
  FormControl,
  FormControlLabel,
  Divider,
} from "@mui/material";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {DropDown} from "components/DropdownComponent/DropdownComponent";
import { CalendarComponent } from "components/calendar/calendar";
import MSButton from "components/MSButton/MSButton";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const styless = {
  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  chartBox: {
    width: "auto",
    height: "49vh",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    marginBottom: 5,
    padding: 2,
  },
  text: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: "1rem",
    fontWeight: 600,
    letterSpacing: "0.03125rem",
  },
};

const TPODashboardGraph = ({ data }: any) => {
  const datas = [
    { x: 120, y: 200, z: 200 },
    { x: 150, y: 100, z: 260 },
    { x: 360, y: 300, z: 400 },
    { x: 400, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const data01 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  const data02 = [
    { x: 300, y: 300, z: 200 },
    { x: 400, y: 500, z: 260 },
    { x: 200, y: 700, z: 400 },
    { x: 340, y: 350, z: 280 },
    { x: 560, y: 500, z: 500 },
    { x: 230, y: 780, z: 200 },
    { x: 500, y: 400, z: 200 },
    { x: 300, y: 500, z: 260 },
    { x: 240, y: 300, z: 400 },
    { x: 320, y: 550, z: 280 },
    { x: 500, y: 400, z: 500 },
    { x: 420, y: 280, z: 200 },
  ];

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 24,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2.5,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(19px)",
        color: "rgba(156, 163, 175, 1)",
        "& + .MuiSwitch-track": {
          backgroundColor: "white",
          opacity: 1,
          border: "1px solid rgba(156, 163, 175, 1)",
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "rgba(156, 163, 175, 1)",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "rgba(156, 163, 175, 1)",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 18,
      height: 18,
      color: "rgba(156, 163, 175, 1)",
    },
    "& .MuiSwitch-track": {
      borderRadius: 24 / 2,
      backgroundColor: "white",
      opacity: 1,
      border: "1px solid rgba(156, 163, 175, 1)",
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <Box sx={styless.chartBox}>
        <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={styless.text}>
            Baseline and Incremental Sales
          </Typography>

          <Typography>
            {rightLable({
              color: "rgba(229, 113, 143, 1)",
              text: "Incremental",
            })}
            {rightLable({ color: "rgba(96, 125, 230, 1)", text: "Baseline" })}
          </Typography>
        </Typography>
        <Box sx={styless.chartContainer}>
          <ResponsiveContainer width="90%" height={300}>
            <LineChart data={data} >
              <CartesianGrid />
              <XAxis dataKey="name" tickSize={20}></XAxis>
              <YAxis
                tickSize={20}
                tickFormatter={(val, index) => data[index].liter}
              >
                {/* <Label
                          style={{
                              textAnchor: "middle",
                              fill: "rgba(156, 163, 175, 1)",
                              fontSize : "0.75rem"
                          }}
                      
                        position="left"
                        angle={270} 
                        value={"Sales"} /> */}
              </YAxis>
              <Tooltip />

              <Line
                dot={false}
                type="monotone"
                dataKey="pv"
                stroke="rgba(229, 113, 143, 1)"
                strokeWidth={2}
              />
              <Line
                dot={false}
                type="monotone"
                dataKey="uv"
                stroke="rgba(96, 125, 230, 1)"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Box sx={styless.chartBox}>
        <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={styless.text}>Price Elasticity</Typography>
          <Typography>
            {rightLable({ color: "rgba(229, 113, 143, 1)", text: "Muesli" })}
            {rightLable({ color: "rgba(113, 222, 229, 1)", text: "Oats" })}
            {rightLable({ color: "rgba(230, 160, 96, 1)", text: "Chocos" })}
            {rightLable({
              color: "rgba(96, 125, 230, 1)",
              text: "Corn Flakes",
            })}
            {rightLable({ color: "rgba(211, 230, 96, 1)", text: "Granola" })}
          </Typography>
        </Typography>
        <Box sx={styless.chartContainer}>
          <ResponsiveContainer width="90%" height={300}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="" />
              <YAxis
                type="number"
                dataKey="y"
                name="weight"
                unit="kg"
                stroke="#8884d8"
              />

              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="A school" data={data01} fill="#8884d8">
                {data01.map((data: any, index: number) => (
                  <>
                    <Cell key={data.x} fill={COLORS[index % COLORS.length]} />
                  </>
                ))}
              </Scatter>

              <Scatter name="A school" data={data02} fill="#82ca9d">
                {data02.map((data: any, index: number) => (
                  <>
                    <Cell key={data.x} fill={COLORS[index % COLORS.length]} />
                  </>
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Box sx={styless.chartBox}>
        <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={styless.text}>
            Promotion Wise Sales Across Time-frame
          </Typography>
          <Box>
            <FormControl>
              <FormControlLabel
                control={<IOSSwitch sx={{ mr: 2 }} defaultChecked />}
                label="Compare"
              />
            </FormControl>
          </Box>
        </Typography>

        <Grid container>
          <Grid item md={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={2}>
                <Typography>SKUs</Typography>
                <Typography>
                  <DropDown
                    initialValue={["5% off"]}
                    menuItem={["All Promotion", "BOGO", "10% off", "5% off"]}
                  />
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>Promotion</Typography>
                <Typography>
                  <DropDown
                    initialValue={["5% off"]}
                    menuItem={["All Promotion", "BOGO", "10% off", "5% off"]}
                  />
                </Typography>
              </Grid>
              <Grid item md={7}>
                <Typography>TimeFrame</Typography>
                <Stack direction="row">
                  <Typography
                    sx={{ display: "flex", alignItems: "end", margin: 1 }}
                  >
                    From
                  </Typography>
                  <Typography width="100%">
                    <CalendarComponent isFrom={true} />
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "end", margin: 1 }}
                  >
                    To
                  </Typography>
                  <Typography width="100%">
                    <CalendarComponent isFrom={false} />
                  </Typography>
                </Stack>
              </Grid>
              <Box sx={styless.chartContainer}>
                <ResponsiveContainer width="90%" height={250}>
                  <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      dot={false}
                      strokeWidth={2}
                      type="monotone"
                      dataKey="pv"
                      stroke="rgba(96, 125, 230, 1)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            md={0.5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Divider
              orientation="vertical"
              variant="fullWidth"
              sx={{ color: "red" }}
            />
          </Grid>

          <Grid item md={5.5} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={2}>
                <Typography>SKUs</Typography>
                <Typography>
                  <DropDown
                    initialValue={["5% off"]}
                    menuItem={["All Promotion", "BOGO", "10% off", "5% off"]}
                  />
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography>Promotion</Typography>
                <Typography>
                  <DropDown
                    initialValue={["5% off"]}
                    menuItem={["All Promotion", "BOGO", "10% off", "5% off"]}
                  />
                </Typography>
              </Grid>
              <Grid item md={7}>
                <Typography>TimeFrame</Typography>
                <Stack direction="row">
                  <Typography
                    sx={{ display: "flex", alignItems: "end", margin: 1 }}
                  >
                    From
                  </Typography>
                  <Typography width="100%">
                    <CalendarComponent isFrom={true} />
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "end", margin: 1 }}
                  >
                    To
                  </Typography>
                  <Typography width="100%">
                    <CalendarComponent isFrom={false} />
                  </Typography>
                </Stack>
              </Grid>
              <Box sx={styless.chartContainer}>
                <ResponsiveContainer width="90%" height={250}>
                  <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      dot={false}
                      strokeWidth={2}
                      type="monotone"
                      dataKey="pv"
                      stroke="rgba(96, 125, 230, 1)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3} mb={3}>
        <Grid item md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              height: "27rem",
              padding: 2,
            }}
          >
            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography sx={styless.text}>Promotion Comparison</Typography>
              <Typography>
                {rightLable({
                  color: "rgba(229, 113, 143, 1)",
                  text: "Muesli",
                })}
                {rightLable({ color: "rgba(113, 222, 229, 1)", text: "Oats" })}
                {rightLable({ color: "rgba(230, 160, 96, 1)", text: "Chocos" })}
                {rightLable({
                  color: "rgba(96, 125, 230, 1)",
                  text: "Corn Flakes",
                })}
                {rightLable({
                  color: "rgba(211, 230, 96, 1)",
                  text: "Granola",
                })}
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <ResponsiveContainer width="85%" height={"85%"}>
                <ScatterChart>
                  <CartesianGrid />
                  <XAxis type="number" dataKey="x" name="stature" />
                  <YAxis type="number" dataKey="y" name="weight" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="data" data={datas} fill="red">
                    {datas.map((data: any, index: number) => (
                      <>
                        <Cell
                          key={data.y}
                          fill={COLORS[index % COLORS.length]}
                        />
                      </>
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              height: "27rem",
              padding: 2,
            }}
          >
            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography sx={styless.text}>RPI Across Competitors</Typography>
              <Stack direction="row" gap={2}>
                <Typography>
                  {rightLable({
                    color: "rgba(229, 113, 143, 1)",
                    text: "FN60",
                  })}
                  {rightLable({ color: "rgba(96, 125, 230, 1)", text: "FN34" })}
                </Typography>
                <MSButton
                  startIcon={<FilterAltOutlinedIcon />}
                  title="Filter"
                  variant="outlined"
                  sx={{ padding: 0.5 }}
                />
              </Stack>
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <ResponsiveContainer width="80%" height="80%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" fill="rgba(229, 113, 143, 1)" />
                  <Bar dataKey="uv" fill="rgba(96, 125, 230, 1)" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TPODashboardGraph;

function rightLable({ color, text }: any) {
  return (
    <>
      <IconButton size="small" disableRipple sx={{ color: color, cursor: "text" }}>
        <FiberManualRecordIcon fontSize="small" />
      </IconButton>
      {text} &nbsp; &nbsp;
    </>
  );
}
