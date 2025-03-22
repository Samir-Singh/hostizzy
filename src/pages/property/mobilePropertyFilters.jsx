import React from "react";
import {
  Box,
  Button,
  Divider,
  Menu,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import { VscSettings } from "react-icons/vsc";
import { FaChevronDown } from "react-icons/fa";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

const MobilePropertyFilters = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box className="properties_list_filters">
      <Paper className="properties_list_filters_wrapper">
        <Typography
          className="dropdown___text"
          id="basic-button"
          onClick={handleClick}
        >
          Badrooms / Bathrooms<FaChevronDown />
        </Typography>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
        >
          <MenuList sx={{ width: "200px", m: 2 }}>
            <Typography className="find___text">Beds</Typography>
            <Slider
              defaultValue={3}
              valueLabelDisplay="auto"
              step={1}
              getAriaLabel={() => "Minimum distance"}
              min={1}
              max={6}
              className="primary_color"
            />
            <Divider />
            <MenuItem>
              <Button>Done</Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Paper>
    </Box>
  );
};

export default MobilePropertyFilters;
