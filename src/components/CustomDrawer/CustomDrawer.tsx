import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import homeIcon from "src/assets/icons/home.svg";
import { path } from "src/constants/routes";
import { AccordionData } from "../../@types/components";
import "./CustomDrawer.css";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { listData } from "./CustomDrawer.data";

export const CustomDrawer = ({ open, toggleDrawer }: any) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{ zIndex: 1400 }}
    >
      {ListComponent(toggleDrawer)}
    </Drawer>
  );
};

const ListComponent = (toggleDrawer: (open: boolean) => () => void) => {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ minWidth: 360 }} role="presentation">
      <IconButton
        data-testid="close-icon"
        className="closeIcon"
        onClick={toggleDrawer(false)}
        size="large"
      >
        <CloseIcon />
      </IconButton>

      <Box display="flex" justifyContent="center" component="div">
        <List sx={{ width: 280 }} component="nav">
          <ListItemButton
            onClick={
              toggleDrawer(false)
            }
            sx={{
              ":hover": {
                background: "none",
                color: "rgba(43, 82, 221, 1)",
                transition: "filter 0.5s ease-in",
              },
            }}
          >
            <ListItemIcon onClick={()=>{navigate(path)}}>
              <img src={homeIcon} />
            </ListItemIcon>
            <ListItemText
              onClick={()=>{navigate(path)}}
              
              sx={{ ml: -3 }}
              primary={<span className="home-text">Home</span>}
            />
          </ListItemButton>

          {listData.map((data) => (
            <CustomCollapse
              {...data}
              
              toggleDrawer={toggleDrawer}
              key={data.title}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

const CustomCollapse = ({
  icon,
  title,
  content,
  toggleDrawer,
}: AccordionData) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const location = useLocation();
  const navigation = useNavigate();
  React.useEffect(() => {
    setExpanded(content.some((data) => location.pathname === data.path));
  }, [content, location.pathname]);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItemButton
        disableTouchRipple
        autoFocus={false}
        onClick={handleClick}
        className={expanded ? "expandedAccordion" : "expandedAccordionNormal"}
      >
        <ListItemIcon>
          <img src={icon} width="16px" height="16px" />
        </ListItemIcon>

        <ListItemText sx={{ ml: -3 }} primary={<span className={expanded ? "home-text-active" : "home-text"}>{title}</span>} />
        {expanded ? (
          <ExpandLess
            className={expanded ? "listIconsExpended" : "listIconNormal"}
          />
        ) : (
          <ExpandMore
            className={expanded ? "listIconsExpended" : "listIconNormal"}
          />
        )}
      </ListItemButton>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding onClick={toggleDrawer(false)}>
          {content.map((data) => (
            <ListItemButton
              sx={{ pl: 5 }}
              onClick={() => {
                navigation(data.path);
              }}
            >
              <ListItemText
                primary={
                  <span
                    className={
                      data.path === location.pathname
                        ? "listItems-active"
                        : "listItems"
                    }
                  >
                    {data.name}
                  </span>
                }
              />
              <ListItemIcon sx={{pl : 5}}>
                <KeyboardArrowRightIcon className="listIconNormal" />
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};