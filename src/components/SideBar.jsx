import React, { useState } from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
} from "@mui/material";
import {
  Home,
  ModeNight,
  MBackup,
  Backup,
  FormatQuote,
  AddBusiness,
  AutoGraph,
  MeetingRoom,
  ScheduleSend,
  VideoSettings,
  Group,
} from "@mui/icons-material";
const SideBar = ({ setMode }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
    setMode(checked === false ? "dark" : "light");
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
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
              <VideoSettings />
            </ListItemIcon>
            <ListItemText primary="Video Chat" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Create Group" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ScheduleSend />
            </ListItemIcon>
            <ListItemText primary="Schedule Send" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <MeetingRoom />
            </ListItemIcon>
            <ListItemText primary="Meeting Room" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <AutoGraph />
            </ListItemIcon>
            <ListItemText primary="Graph" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <AddBusiness />
            </ListItemIcon>
            <ListItemText primary="Business" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <FormatQuote />
            </ListItemIcon>
            <ListItemText primary="Quote" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Backup />
            </ListItemIcon>
            <ListItemText primary="Backup" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch checked={checked} onChange={handleChange} />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};

export default SideBar;
