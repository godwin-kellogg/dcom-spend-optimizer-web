import CheckIcon from "@mui/icons-material/Check";
import RepeatSharpIcon from "@mui/icons-material/RepeatSharp";
import SaveIcon from "@mui/icons-material/Save";
import ViewComfyOutlinedIcon from "@mui/icons-material/ViewComfyOutlined";
import {
  Box,
  Checkbox,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  Switch,
  SwitchProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
  styled
} from "@mui/material";
import MSButton from "src/components/MSButton/MSButton";
import { CalendarComponent } from "src/components/calendar/calendar";
import {DropDown} from "src/components/DropdownComponent/DropdownComponent";
import { styles } from "./TPOPrediction.styles";
import {
  Budget,
  Category,
  TableFooterData,
  TableHeadData,
  rows,
} from "./TPOPredictionData";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "white",
        opacity: 1,
        border: "1px solid rgba(156, 163, 175, 1)",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    }
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
    color : "rgba(43, 82, 221, 1)",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor:"white",
    border: "1px solid rgba(156, 163, 175, 1)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));



const TPOPredictionAdd = () => {
  return (
    <>
      <Box sx={styles.container}>
        <Header />
      </Box>

      <Box sx={styles.tableTop}>
        <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={styles.tableTopText}>
            <IconButton sx={{ mr: 1 }}>
              <ViewComfyOutlinedIcon />
            </IconButton>
              Predicted output per SKUs
          </Typography>

          <Typography sx={styles.tableTopText}>
            <FormGroup>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Sales</Typography>
                <IOSSwitch sx={{ m: 1 }} defaultChecked />
                <Typography>Gross Profit</Typography>
              </Stack>
            </FormGroup>
          </Typography>
        </Typography>

        <DataTable />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", margin: 3 }}>
        <MSButton startIcon={<RepeatSharpIcon />} title="Reallocate Again" />
        <MSButton
          sx={{ marginLeft: 2 }}
          variant="outlined"
          startIcon={<SaveIcon />}
          title="Save Scenario"
        />
      </Box>
    </>
  );
};

export default TPOPredictionAdd;

const Header = () => {
  return (
    <Grid container>
      <Grid item md={2.4} sm={6} xs={12}>
        <Typography component="div">{Category.name}</Typography>
        <Typography sx={{ width: "80%" }}>
          <DropDown
            initialValue={Category.initialval}
            menuItem={Category.menuItems}
          />
        </Typography>
      </Grid>

      <Grid item md={2.4} sm={6} xs={12}>
        <Typography component="div">{Budget.name}</Typography>
        <Typography sx={{ width: "80%" }}>
          <DropDown
            initialValue={Budget.initialval}
            menuItem={Budget.menuItems}
          />
        </Typography>
      </Grid>

      <Grid item md={2.4} sm={6} xs={12}>
        <Typography component="div" sx={{}}>
          Start Date
        </Typography>
        <Typography>
          {/* <CalendarComponent isFrom={true} /> */}
        </Typography>
      </Grid>

      <Grid item md={2.4} sm={6} xs={12}>
        <Typography component="div">
          End Date
        </Typography>
        <Typography>
          {/* <CalendarComponent isFrom={false} /> */}
        </Typography>
      </Grid>

      <Grid item md={2.4} sm={6} mt={5} xs={12}>
        <MSButton disabled={true} title="Generate" />
      </Grid>
    </Grid>
  );
};

const DataTable = () => {
  return (
    <TableContainer>
      <Table sx={{ boxShadow: "none" }}>
        <TableHead sx={styles.tableBack}>
          <TableRow>
            <TableCell align="center" sx={styles.tableHead}>
              <CheckIcon />
            </TableCell>
            {TableHeadData.map((data) => (
              <TableCell key={data.name} align="center" sx={styles.tableHead}>
                {data.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                align="center"
                sx={{ borderColor: "rgba(217, 219, 222, 1)" }}
              >
                <Checkbox />
              </TableCell>
              {row.map((data, index) => (
                <TableCell
                  sx={[
                    styles.tableText,
                    index === 3
                      ? { backgroundColor: "rgba(232, 242, 254, 1)" }
                      : {},
                  ]}
                  key={index}
                  align="center"
                >
                  {data}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell
              sx={[styles.tableBack, { borderBottomLeftRadius: "0.875rem" }]}
            ></TableCell>
            <TableCell sx={[styles.tableBack, styles.tableHead]} align="center">
              Total
            </TableCell>
            {TableFooterData.map((data, index) => (
              <TableCell
                key={index}
                align="center"
                sx={[
                  styles.tableText,
                  index === 2
                    ? { backgroundColor: "rgba(232, 242, 254, 1)" }
                    : {},
                  { borderBottom: "none" },
                ]}
              >
                {data}
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
