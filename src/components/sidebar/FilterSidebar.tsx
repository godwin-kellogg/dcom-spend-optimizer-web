import {
  ArrowForward,
  ChevronLeft,
  FilterAltOutlined,
  Start,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import MSButton from "components/MSButton/MSButton";
import { CalendarComponent } from "components/calendar/calendar";
import DropDown from "components/dropDownSelect/dropDown";
import "./FilterStyles.css";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export function FilterSidebar({ open, onClose }: any) {
  return (
    <Drawer
      className="custom-drawer "
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Typography className="filterText">
          <IconButton
            sx={{ color: "rgba(43, 82, 221, 1)" }}
            disableRipple
            >
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
                initialValue={"Category"}
                menuItem={["Category"]}
              />
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">SKUs</Typography>
            <Typography>
              <DropDown
                initialValue={"All SKUs"}
                menuItem={["All SKUs"]}
              />
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography className="titleText">Promotion</Typography>
            <Typography>
              <DropDown
                initialValue={"All Promotion"}
                menuItem={["All Promotion", "bye", "tata"]}
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
                <CalendarComponent />
              </Typography>
            </ListItem>
            <ListItem sx={{ marginTop: 3 }}>
              <Typography mr={4.5} className="titleText">
                To
              </Typography>
              <Typography>
                <CalendarComponent />
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
      />
    </Drawer>
  );
};

export const Filter = ({ handleFilterButtonClick }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderTopRightRadius: "0.875rem",
        borderBottomRightRadius: "0.875rem",
        marginRight: 1,
        height: "auto",
        marginTop: 1,
        width: "auto",
      }}
    >
      <Stack direction={"column"} gap={2}>
        <IconButton
          sx={{
            mt: 1,
            color: "blue",
            cursor:"default"
          }}
          disableRipple
        >
          <FilterAltOutlined />
        </IconButton>
        <Typography
          align="center"
          sx={{ rotate: "90deg", fontSize: "1rem", fontWeight: 600 }}
        >
          Filter
        </Typography>
        <IconButton sx={{ mt: 3, mb: 1 }} onClick={handleFilterButtonClick}>
          <Start />
        </IconButton>
      </Stack>
    </Box>
  );
};
