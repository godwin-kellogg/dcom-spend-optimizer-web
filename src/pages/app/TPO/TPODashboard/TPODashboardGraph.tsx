import { Box, IconButton, Typography } from "@mui/material";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  LineChart,
  Legend,
  Scatter,
  ScatterChart,
  Cell,
  BarChart,Bar
} from "recharts";
import {Grid} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const styless = {
  chartContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop : 5,
    alignItems:"center"
  },
  chartBox : {
    width: "auto",
    height: "27rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    marginBottom: 5,
    padding : 2
  },
  text : {
    color : "rgba(49, 49, 49, 1)",
    fontSize : "1rem",
    fontWeight : 600,
    letterSpacing : "0.03125rem",
    
  }
};

const TPODashboardGraph = ({data}:any) => {
    const datas = [
        { x: 120, y: 200, z: 200 },
        { x: 150, y: 100, z: 260 },
        { x: 360, y: 300, z: 400 },
        { x: 400, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  return (
    <>

      <Box sx={styless.chartBox}>
        <Typography sx={{display : "flex",
    justifyContent : "space-between"}}>
          <Typography sx={styless.text}>Baseline and Incremental Sales</Typography>
          <Typography> 
              <IconButton sx={{color :"rgba(229, 113, 143, 1)"}}>
              <FiberManualRecordIcon fontSize="small" />
              </IconButton> Incremental &nbsp; &nbsp; 
              <IconButton sx={{color :"rgba(96, 125, 230, 1)"}}>
              <FiberManualRecordIcon fontSize="small" />
              </IconButton> Baseline</Typography>
        </Typography>
        <Box sx={styless.chartContainer}>
          <ResponsiveContainer width="90%" height={300}>
              <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Box sx={styless.chartBox}>
      <Typography sx={styless.text}>Price Elasticity</Typography>
        <Box sx={styless.chartContainer}>
          <ResponsiveContainer width="90%" height={300}>
              <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="" />
              <YAxis type="number" dataKey="y" name="Muesli 750g" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="data" data={datas} fill="red">
                  {datas.map((data:any,index:number) => (
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
      <Typography sx={styless.text}>Promotion Wise Sales Across Time-frame</Typography>
      <Box sx={styless.chartContainer}>
        <ResponsiveContainer width="90%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="green" />
                
            </LineChart>
        </ResponsiveContainer>
      </Box>
      </Box>

    <Grid container spacing={3} mb={3}>
        <Grid item md={6}>
            <Box sx={{backgroundColor : "white", borderRadius : '0.5rem', height: "27rem", alignItems : "center", display:"flex", justifyContent:"center"}}>
                <ResponsiveContainer width="80%" height={300}>
                <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature"  />
                <YAxis type="number" dataKey="y" name="weight" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="data" data={datas} fill="red">
                    {datas.map((data:any,index:number) => (
                        <>
                            <Cell key={data.y} fill={COLORS[index % COLORS.length]} /> 
                        </>
                    ))}
                </Scatter>
                </ScatterChart>
                </ResponsiveContainer>
            </Box>
        </Grid>
        <Grid item md={6}>
        <Box sx={{backgroundColor : "white", borderRadius : '0.5rem', height: "27rem", alignItems : "center", display:"flex", justifyContent:"center"}}>
            <ResponsiveContainer width="80%" height="80%">
            <BarChart
            data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
            </ResponsiveContainer>
            </Box>
        </Grid>
    </Grid>
    </>
  );
};

export default TPODashboardGraph;