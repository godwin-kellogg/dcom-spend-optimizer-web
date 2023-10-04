import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import BoltIcon from "@mui/icons-material/Bolt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { AccordionData } from "../../@types/components";
import "./CustomDrawer.css";
import { appRouters, path } from "constants/routes";
import { useNavigate } from "react-router-dom";

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
    icon: <HdrStrongIcon />,
    title: "Trade Promo Optimiser",
    content : [
      {
      name : "Predictive View",
      path : appRouters.tpoOptimiser
      },
      {
        name : "Descriptive View",
        path : appRouters.tpoDashboard
      },
  ]
  },
  {
    panel: "panel2",
    icon: <BoltIcon />,
    title: "Sales BB Optimiser",
    content : [
      {
        name : "Predictive View",
        path : appRouters.msoPredictive,
      },
      {
        name : "Descriptive View",
        path : appRouters.msoDescriptive,
      },
      {
        name : "Amazon PI",
        path : appRouters.msoAmazonPI,
      },

    ]
  },
]

const ListComponent = (toggleDrawer: (open: boolean) => () => void) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 350 }} role="presentation">
    <IconButton className="closeIcon" onClick={toggleDrawer(false)}>
      <CloseIcon />
    </IconButton>

    <List>
      <ListItem onClick={()=>{navigate(path)}}>
        <ListItemButton 
        onClick={toggleDrawer(false)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
      </ListItem>

      {listData.map((data) => (
        <ListItem key={data.title}>
          <CustomAccordion {...data} toggleDrawer={toggleDrawer}  />
        </ListItem>
      ))}
    </List>
  </Box>
  )
};

const CustomAccordion = ({ icon, title, panel, toggleDrawer, content }: AccordionData) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(panel, event);
      setExpanded(isExpanded ? panel : false);
    };
  const isExpanded = expanded === panel;
  const navigation = useNavigate();
  


  return (
    <Accordion
      sx={{ boxShadow: "none", width: "100%" }}
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
        className={isExpanded ? "expandedAccordion" : "expandedAccordionNoraml"}
        sx={{ margin: 0 }}
      >
        <ListItemIcon
          className={isExpanded ? "listIconsExpended" : "listIconNormal"}
        >
          {icon}
        </ListItemIcon>
        <ListItemText>{title}</ListItemText>
      </AccordionSummary>

      <AccordionDetails>
        <Stack spacing={2} direction="column" useFlexGap>
          {content.map((data: any) => (
            <Typography 
              className="listTypography" 
              onClick={()=>{
                navigation(data.path) 
              }}
              
              key={data.name}
            >
              <Typography onClick={toggleDrawer(false)} className="listItems" component="span">
                {data.name}
              </Typography>
              <IconButton disableRipple>
                <KeyboardArrowRightIcon className="listIconNormal" />
              </IconButton>
            </Typography>
          ))}

        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
