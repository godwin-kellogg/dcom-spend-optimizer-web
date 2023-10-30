import {DropDown} from "components/DropdownComponent/DropdownComponent";
import { styles } from "./MSOPredictiveTable.styles";
import {
  Box,
  Grid,
  Typography,
  TableCell,
  TableRow,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  IconButton,
  Stack,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { CalendarComponent } from "components/calendar/calendar";
import MSButton from "components/MSButton/MSButton";
import { rows } from "./MSOPredictionTableData";
import { ExploreOutlined, Save, AllInclusive } from "@mui/icons-material";
import React from "react";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddIcon from "@mui/icons-material/Add";
import { data } from "./MSOPredictionTableData";

const MSOPredictiveTable = () => {
  return (
    <>
      <Box sx={[styles.container, { padding: 2 }]}>
        <Header />
      </Box>

      <Box sx={[styles.container, { paddingTop: 1 }]}>
        <Typography m={1}>
          <IconButton disableRipple sx={{ cursor: "text" }}>
            <ExploreOutlined />
          </IconButton>
          {data.headingName}
        </Typography>
        <DataTable />
      </Box>

      <Box sx={styles.button}>
        <Stack direction="row">
          <Box mr={2}>
            <MSButton
              title="Compare"
              startIcon={<AllInclusive />}
              variant="contained"
            />
          </Box>
          <Box>
            <MSButton
              title="Save"
              startIcon={<Save />}
              variant="outlined"
              sx={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default MSOPredictiveTable;

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={2.2}>
        <Typography component="div">Category</Typography>
        <Typography>
          <DropDown
            initialValue={"Muesli"}
            menuItem={["Muesli", "Oats", "CornFlakes"]}
          />
        </Typography>
      </Grid>
      <Grid item md={2.2}>
        <Typography component="div">Spend Value</Typography>
        <Typography>
          <DropDown
            initialValue={"Muesli"}
            menuItem={["Muesli", "Oats", "CornFlakes"]}
          />
        </Typography>
      </Grid>
      <Grid item md={2.2}>
        <Typography component="div">Funnel</Typography>
        <Typography>
          <DropDown
            initialValue={"Muesli"}
            menuItem={["Muesli", "Oats", "CornFlakes"]}
          />
        </Typography>
      </Grid>
      <Grid item md={2.2}>
        <Typography component="div">Start Date</Typography>
        <Typography>
          <CalendarComponent />
        </Typography>
      </Grid>

      <Grid item md={2.2}>
        <Typography component="div">End Date</Typography>
        <Typography>
          <CalendarComponent />
        </Typography>
      </Grid>

      <Grid item md={1}>
        <Typography sx={{ pt: 4 }}>
          <MSButton title="Generate" />
        </Typography>
      </Grid>
    </Grid>
  );
};

const DataTable = () => {
  const [isExpandedSP, setExpandedSP] = React.useState<boolean>(false);
  const [isExpandedSB, setExpandedSB] = React.useState<boolean>(false);
  const handleExpandRow = (isSP: boolean) => {
    isSP ? setExpandedSP(!isExpandedSP) : setExpandedSB(!isExpandedSB);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "rgba(6, 64, 136, 1)" }}>
          <TableRow>
            <TableCell
              rowSpan={3}
              sx={[styles.text, { width: "8%" }]}
              align="center"
            >
              ROAS
            </TableCell>
            <TableCell
              rowSpan={3}
              sx={[styles.text, { width: "8%" }]}
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
              sx={[styles.text, { width: "40%" }]}
              align="center"
            >
              Budget for Search
            </TableCell>
            <TableCell
              colSpan={3}
              sx={[styles.text, { width: "24%" }]}
              align="center"
            >
              Budget For Display
            </TableCell>
            <TableCell
              rowSpan={3}
              sx={[styles.text, { width: "8%" }]}
              align="center"
            >
              Total Sales (in &#8377;)
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell
              colSpan={isExpandedSP ? 4 : 0}
              rowSpan={isExpandedSP ? 1 : 0}
              sx={[styles.text, { padding: 0, border: 1 }]}
              align="center"
            >
              <ListItem>
                <ListItemText sx={{ textAlign: "center" }} primary="SP" />
                <ListItemIcon
                  sx={{ marginRight: -6, color: "rgba(251, 251, 252, 1)" }}
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
                  sx={{ marginRight: -6, color: "rgba(251, 251, 252, 1)" }}
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
            <TableCell rowSpan={2} sx={[styles.text, {}]} align="center">
              SBV
            </TableCell>
            <TableCell rowSpan={2} sx={[styles.text, {}]} align="center">
              SD
            </TableCell>
            <TableCell
              rowSpan={2}
              sx={[styles.text, { width: "8%" }]}
              align="center"
            >
              Core
            </TableCell>
            <TableCell
              rowSpan={2}
              sx={[styles.text, { width: "8%" }]}
              align="center"
            >
              Growth
            </TableCell>
            <TableCell
              rowSpan={2}
              sx={[styles.text, { width: "8%" }]}
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
            <TableRow component="tr">
              {row.rowSpan ? (
                <TableCell
                  rowSpan={rows.length}
                  sx={[{ width: "8%" }, styles.detailsText]}
                  align="center"
                >
                  {row.roas}
                </TableCell>
              ) : (
                ""
              )}

              <TableCell
                align="center"
                sx={[{ width: "8%" }, styles.detailsText]}
              >
                {row.sku}
              </TableCell>
              <TableCell
                align="center"
                sx={[styles.detailsText, { width: "13%" }]}
              >
                {row.spBrand}
              </TableCell>
              {isExpandedSP ? (
                <>
                  <TableCell
                    align="center"
                    sx={[styles.detailsText, { width: "13%" }]}
                  >
                    {row.spCategory}
                  </TableCell>
                  <TableCell align="center" sx={styles.detailsText}>
                    {row.competitor}
                  </TableCell>
                  <TableCell align="center" sx={styles.detailsText}>
                    {row.spAuto}
                  </TableCell>
                </>
              ) : (
                <></>
              )}
              {isExpandedSB ? (
                <>
                  <TableCell align="center" sx={styles.detailsText}>
                    {row.sbBrand}
                  </TableCell>
                  <TableCell align="center" sx={styles.detailsText}>
                    {row.sbCategory}
                  </TableCell>
                </>
              ) : (
                <></>
              )}
              <TableCell
                align="center"
                sx={[styles.detailsText, { width: "13%" }]}
              >
                {row.sbAuto}
              </TableCell>
              <TableCell
                align="center"
                sx={[styles.detailsText, { width: "13%" }]}
              >
                {row.sbv}
              </TableCell>
              <TableCell
                align="center"
                sx={[styles.detailsText, { width: "13%" }]}
              >
                {row.sd}
              </TableCell>
              <TableCell
                align="center"
                sx={[styles.detailsText, { width: "9%" }]}
              >
                {row.core}
              </TableCell>
              <TableCell
                align="center"
                sx={[styles.detailsText, { width: "9%" }]}
              >
                {row.growth}
              </TableCell>
              <TableCell
                align="center"
                sx={[styles.detailsText, { width: "9%" }]}
              >
                {row.adjacent}
              </TableCell>
              {row.rowSpan ? (
                <TableCell
                  sx={[styles.detailsText, { width: "8%" }]}
                  rowSpan={rows.length}
                  align="center"
                >
                  5000
                </TableCell>
              ) : (
                ""
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};