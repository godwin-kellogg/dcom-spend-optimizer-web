import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { TPOPlanChip } from "components/TPOChip/tpoChips";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rows } from "./MSODetailsTable.data";
import { styles } from "./MSODetailsTable.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MSOPredictiveDetailsTable = () => {
  const param = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Grid container mb={3}>
        <Grid item md={6}>
          <IconButton
            sx={{ color: "black", margin: 1 }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={styles.title} component="span">
            {param.name} 2023
          </Typography>
          <TPOPlanChip
            value={`In-plan`}
            color="rgba(220, 38, 38, 1)"
            backGroundColor="rgba(254, 202, 202, 1)"
          />
        </Grid>
        <Grid
          item
          md={6}
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <IconButton
            size="small"
            sx={styles.downloadIcon}
            disableFocusRipple
            disableRipple
          >
            <FileDownloadOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>

      <DataTable />
    </>
  );
};

export default MSOPredictiveDetailsTable;


const DataTable = () => {
  const [isExpandedSP, setExpandedSP] = React.useState<boolean>(false);
  const [isExpandedSB, setExpandedSB] = React.useState<boolean>(false);

  const handleExpandRow = (isSP: boolean) => {
    isSP ? setExpandedSP(!isExpandedSP) : setExpandedSB(!isExpandedSB);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: 2, boxShadow: "none" }}
    >
      <Table>
        <TableHead sx={{ borderRadius: 2 }}>
          <TableRow>
            <TableCell
              rowSpan={3}
              sx={[styles.text, { width: "7%" }]}
              align="center"
            >
              ROAS
            </TableCell>
            <TableCell
              rowSpan={3}
              sx={[styles.text, { width: "7%" }]}
              align="center"
            >
              SKUs
            </TableCell>
            <TableCell
              colSpan={
                isExpandedSP && isExpandedSB
                  ? 9
                  : isExpandedSP
                  ? 7
                  : isExpandedSB
                  ? 6
                  : 4
              }
              sx={[styles.text, { width: "52%" }]}
              align="center"
            >
              Budget for Search
            </TableCell>
            <TableCell
              colSpan={3}
              sx={[styles.text, { width: "27%" }]}
              align="center"
            >
              Display
            </TableCell>
            <TableCell
              rowSpan={3}
              sx={[styles.text, { width: "7%" }]}
              align="center"
            >
              Total Sales (in ₹)
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell
              colSpan={isExpandedSP ? 4 : 0}
              rowSpan={isExpandedSP ? 1 : 0}
              sx={[styles.text, { padding: 0, width: "13%" }]}
              align="center"
            >
              <ListItem>
                <ListItemText
                  sx={{ textAlign: "center" }}
                  primary="SP"
                  primaryTypographyProps={styles.expandableText}
                />
                <ListItemIcon
                  sx={{ marginRight: -6, color: "rgba(34, 34, 35, 1)" }}
                  onClick={() => {
                    handleExpandRow(true);
                  }}
                >
                  {isExpandedSP ? (
                    <RemoveOutlinedIcon fontSize="small" />
                  ) : (
                    <AddIcon fontSize="small" />
                  )}
                </ListItemIcon>
              </ListItem>
            </TableCell>
            <TableCell
              colSpan={isExpandedSB ? 3 : 0}
              rowSpan={isExpandedSB ? 1 : 0}
              sx={[styles.text, { padding: 0, width: "13%" }]}
              align="center"
            >
              <ListItem>
                <ListItemText
                  sx={{ textAlign: "center" }}
                  primary="SB"
                  primaryTypographyProps={styles.expandableText}
                />
                <ListItemIcon
                  sx={{ marginRight: -6, color: "rgba(34, 34, 35, 1)" }}
                  onClick={() => {
                    handleExpandRow(false);
                  }}
                >
                  {isExpandedSB ? (
                    <RemoveOutlinedIcon fontSize="small" />
                  ) : (
                    <AddIcon fontSize="small" />
                  )}
                </ListItemIcon>
              </ListItem>
            </TableCell>
            <TableCell
              rowSpan={2}
              sx={[
                styles.text,
                { width: isExpandedSB || isExpandedSP ? "5%" : "13%" },
              ]}
              align="center"
            >
              SBV
            </TableCell>
            <TableCell
              rowSpan={2}
              sx={[
                styles.text,
                { width: isExpandedSB || isExpandedSP ? "5%" : "13%" },
              ]}
              align="center"
            >
              SD
            </TableCell>
            <TableCell
              rowSpan={2}
              sx={[styles.text, { width: "9%" }]}
              align="center"
            >
              Core
            </TableCell>
            <TableCell
              rowSpan={2}
              sx={[styles.text, { width: "9%" }]}
              align="center"
            >
              Growth
            </TableCell>
            <TableCell
              rowSpan={2}
              sx={[styles.text, { width: "9%" }]}
              align="center"
            >
              Adjacent
            </TableCell>
          </TableRow>

          <TableRow>
            {isExpandedSP ? (
              <>
                <TableCell sx={[styles.text, { width: "6%" }]} align="center">
                  Brand
                </TableCell>
                <TableCell sx={[styles.text, { width: "6%" }]} align="center">
                  Category
                </TableCell>
                <TableCell sx={[styles.text, { width: "6%" }]} align="center">
                  Competitor
                </TableCell>
                <TableCell sx={[styles.text, { width: "6%" }]} align="center">
                  Auto
                </TableCell>
              </>
            ) : (
              <></>
            )}
            {isExpandedSB ? (
              <>
                <TableCell sx={[styles.text, { width: "6%" }]} align="center">
                  Brand
                </TableCell>
                <TableCell sx={[styles.text, { width: "6%" }]} align="center">
                  Category
                </TableCell>
                <TableCell sx={[styles.text, { width: "6%" }]} align="center">
                  Auto
                </TableCell>
              </>
            ) : (
              <></>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.roas}>
              <TableCell sx={{ padding: 0, border: 0 }} colSpan={15}>
                <Accordion
                  defaultExpanded={false}
                  disableGutters
                  TransitionProps={{ unmountOnExit: true }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      margin: "0px",
                      minHeight: "auto",
                      backgroundColor: "rgba(248, 249, 252, 1)",
                    }}
                  >
                    <Typography component="div">
                      Muesli
                      <Typography ml={2} component="span" sx={styles.dateText}>
                        | &nbsp; Created on : 2023/04/24 &nbsp; 09:15:22
                      </Typography>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0, border: 0 }}>
                    <Table>
                      <AccordionDetailsTable
                        row={row}
                        isExpandedSB={isExpandedSB}
                        isExpandedSP={isExpandedSP}
                        rowSpan={true}
                      />
                      <AccordionDetailsTable
                        row={row}
                        isExpandedSB={isExpandedSB}
                        isExpandedSP={isExpandedSP}
                        rowSpan={false}
                      />
                      <AccordionDetailsTable
                        row={row}
                        isExpandedSB={isExpandedSB}
                        isExpandedSP={isExpandedSP}
                        rowSpan={false}
                      />
                      <AccordionDetailsTable
                        row={row}
                        isExpandedSB={isExpandedSB}
                        isExpandedSP={isExpandedSP}
                        rowSpan={false}
                      />
                    </Table>
                  </AccordionDetails>
                </Accordion>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const AccordionDetailsTable = ({
  row,
  isExpandedSB,
  isExpandedSP,
  rowSpan,
}: any) => {
  console.log("rowSpan Count", row.rowSpan);
  return (
    <TableRow component="tr">
      {rowSpan ? (
        <TableCell
          rowSpan={rows.length}
          sx={[{ width: "7%" }, styles.detailsText]}
          align="center"
        >
          {row.roas}
        </TableCell>
      ) : (
        ""
      )}

      <TableCell align="center" sx={[{ width: "7%" }, styles.detailsText]}>
        {row.sku}
      </TableCell>
      <TableCell align="center" sx={[styles.detailsText, { width: "13%" }]}>
        {row.spBrand}
      </TableCell>
      {isExpandedSP ? (
        <>
          <TableCell align="center" sx={[styles.detailsText, { width: "13%" }]}>
            {row.spCategory}
          </TableCell>
          <TableCell align="center">{row.competitor}</TableCell>
          <TableCell align="center">{row.spAuto}</TableCell>
        </>
      ) : (
        <></>
      )}
      {isExpandedSB ? (
        <>
          <TableCell align="center">{row.sbBrand}</TableCell>
          <TableCell align="center">{row.sbCategory}</TableCell>
        </>
      ) : (
        <></>
      )}
      <TableCell align="center" sx={[styles.detailsText, { width: "13%" }]}>
        {row.sbAuto}
      </TableCell>
      <TableCell align="center" sx={[styles.detailsText, { width: "13%" }]}>
        {row.sbv}
      </TableCell>
      <TableCell align="center" sx={[styles.detailsText, { width: "13%" }]}>
        {row.sd}
      </TableCell>
      <TableCell align="center" sx={[styles.detailsText, { width: "9%" }]}>
        {row.core}
      </TableCell>
      <TableCell align="center" sx={[styles.detailsText, { width: "9%" }]}>
        {row.growth}
      </TableCell>
      <TableCell align="center" sx={[styles.detailsText, { width: "9%" }]}>
        {row.adjacent}
      </TableCell>
      {rowSpan ? (
        <TableCell
          sx={[styles.detailsText, { width: "7%" }]}
          rowSpan={rows.length}
          align="center"
        >
          5000
        </TableCell>
      ) : (
        ""
      )}
    </TableRow>
  );
};
