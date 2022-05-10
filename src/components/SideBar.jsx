import React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
} from "@mui/material";
import { Home, ModeNight } from "@mui/icons-material";
const SideBar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      {" "}
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default SideBar;
