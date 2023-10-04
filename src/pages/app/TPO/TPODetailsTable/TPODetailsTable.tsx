import { styles } from "./TPODetailsTable.styles";
import { useNavigate, useParams } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
  Table,
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { TPOChip } from "components/TPOChip/tpoChip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TableHeadData, rows } from "./TPODetailsTableData";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';



const TPOTable = () => {
  const param = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Grid container>
        <Grid item md={6}>
          <IconButton
           sx={{ color: "black", margin:1 }}
           onClick={() => {
            navigate(-1);
          }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={styles.title} component="span">
            {param.item}
          </Typography>
          <TPOChip value={`In-plan`} boolVal={true} />
        </Grid>
        <Grid item md={6} sx={{display:"flex", justifyContent : "end", paddingRight : 2}}>
           <IconButton size="small" sx={{
            border : "1px solid rgba(43, 82, 221, 1)", 
            borderRadius : "0.8rem", 
            padding : 1.5,
            color : "rgba(43, 82, 221, 1)"
            }}>
            <FileDownloadOutlinedIcon />
           </IconButton>
        </Grid>
      </Grid>

      <CustomTable />

      
    </>
  );
};

export default TPOTable;


// This table will be implemented after API

const CustomTable = ()=>{
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: "100%" }}>
          <TableHead component="thead">
            <TableRow>

              {
                TableHeadData.map((data:any, index:number) =>
                  <TableCell 
                    align={data.align} 
                    key={index} 
                    sx={[{width:data.width},styles.tableHead]}
                  >
                    {data.name}
                  </TableCell>
                )
              }
             
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row:any, value:number) => (
              <TableRow sx={{padding : 0}} key={value}>
                <TableCell colSpan={8} sx={{padding : 0, border : 0}}>
                  <Accordion 
                    defaultExpanded={true}
                    disableGutters={true}
                    square={true}
                      TransitionProps={{ unmountOnExit: true }} 
                      sx={{padding : 0, border : 0, margin : 0}}>

                    <AccordionSummary 
                    expandIcon={
                    <ExpandMoreIcon />
                    }
                    sx={{
                      margin : "0px", 
                      minHeight : "auto",
                      backgroundColor : "rgba(248, 249, 252, 1)"
                    }}
                    >
                    <Typography component="div" sx={styles.tableMainRow}>
                        <Typography component="div" m={0}>
                            <Typography
                              sx={styles.scenarioText}
                            component="span">{row.scenarioName}</Typography>
                            <Typography
                              sx={styles.dateText}
                            component="span">| &nbsp;&nbsp; Created on : &nbsp;</Typography>
                            <Typography sx={styles.dateText} component="span">{row.date}</Typography>
                        </Typography>

                        <Typography component="div" mr={2}>
                        <IconButton 
                        size="small" 
                        sx={styles.icon}>
                            <TaskAltOutlinedIcon />
                        </IconButton>
                        <IconButton size="small" sx={styles.icon}>
                            <DeleteOutlinedIcon />
                        </IconButton>
                        <Typography sx={styles.dateText} component="span">|</Typography>
                        </Typography>
                    </Typography>
                       
                    </AccordionSummary>

                    <AccordionDetails sx={{ padding : 0, border : 0 }}>
                      <Table>
                        <TableRow component="tr">
                          {
                            row.tableBody.map((data:any)=>
                              <TableCell  sx={{
                                border: 1,
                                borderColor: "rgba(225, 230, 239, 1)",
                              
                              }}>{data}</TableCell>
                            )
                          }
                        </TableRow>
                        <TableRow>
                        {
                            row.tableBody.map((data:any)=>
                              <TableCell  sx={{
                                border: 1,
                                borderColor: "rgba(225, 230, 239, 1)",
                              }}>{data}</TableCell>
                            )
                          }
                        </TableRow>
                      </Table>
                    </AccordionDetails>
                  </Accordion>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}