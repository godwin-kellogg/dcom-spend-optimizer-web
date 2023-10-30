import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { appRouters, path } from "constants/routes";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AccordionData } from "../../@types/components";
import "./CustomDrawer.css";

export const CustomDrawer = ({ open, toggleDrawer }: any) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{ zIndex: 1300 }}
    >
      {ListComponent(toggleDrawer)}
    </Drawer>
  );
};

const listData = [
  {
    panel: "panel1",
    icon: "/assets/icons/tpo-expand.svg",
    title: "Trade Promo Optimiser",
    content: [
      {
        name: "Predictive View",
        path: appRouters.tpoOptimiser,
      },
      {
        name: "Descriptive View",
        path: appRouters.tpoDashboard,
      },
    ],
  },
  {
    panel: "panel2",
    icon: "/assets/icons/mso-expand.svg",
    title: "Sales BB Optimiser",
    content: [
      {
        name: "Predictive View",
        path: appRouters.msoPredictive,
      },
      {
        name: "Descriptive View",
        path: appRouters.msoDescriptive,
      },
      {
        name: "Amazon PI",
        path: appRouters.msoAmazonPI,
      },
    ],
  },
];

const ListComponent = (toggleDrawer: (open: boolean) => () => void) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: 350 }} role="presentation">
      <IconButton
        data-testid="close-icon"
        className="closeIcon"
        onClick={toggleDrawer(false)}
      >
        <CloseIcon />
      </IconButton>

      <List>
        <ListItem
          onClick={() => {
            navigate(path);
          }}
        >
          <ListItemButton
            onClick={toggleDrawer(false)}
            sx={{
              ":hover": {
                background: "none",
                color: "blue",
                transition: "filter 0.5s ease-in",
              },
            }}
          >
            <ListItemIcon sx={{ marginLeft: 3 }}>
              <img src="/assets/icons/home.svg" />
            </ListItemIcon>
            <ListItemText className="home-text">Home</ListItemText>
          </ListItemButton>
        </ListItem>

        {listData.map((data) => (
          <ListItem key={data.title}>
            <CustomAccordion {...data} toggleDrawer={toggleDrawer} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const CustomAccordion = ({
  icon,
  title,
  panel,
  toggleDrawer,
  content,
}: AccordionData) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(panel);
      setExpanded(isExpanded ? panel : false);
    };
  const location = useLocation();
  const isExpanded =
    content.some((data) => location.pathname === data.path) ||
    expanded === panel;
  const navigation = useNavigate();

  return (
    <Accordion
      sx={{ boxShadow: "none", width: "88%", marginLeft: isExpanded ? 2 : 0 }}
      expanded={isExpanded}
      onChange={handleAccordionChange(panel)}
      disableGutters
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            className={isExpanded ? "listIconsExpended" : "listIconNormal"}
          />
        }
        className={isExpanded ? "expandedAccordion" : "expandedAccordionNormal"}
      >
        <ListItemText sx={{ marginLeft: 3 }}>
          <img src={icon} width="16px" height="16px" /> &nbsp; {title}
        </ListItemText>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2} direction="column" useFlexGap>
          {content.map((data: any) => (
            <Box
              onClick={() => {
                navigation(data.path);
              }}
              key={data.name}
              className="listTypography"
            >
              <Typography
                className={
                  data.path === location.pathname
                    ? "listItems-active"
                    : "listItems"
                }
                onClick={toggleDrawer(false)}
                ml={4}
              >
                {data.name}
              </Typography>
              <IconButton>
                <KeyboardArrowRightIcon className="listIconNormal" />
              </IconButton>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};