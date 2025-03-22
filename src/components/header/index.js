import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import BookNowForm from "../dialog/bookNowForm";
import { useNavigate } from "react-router-dom";
const navItems = [
  { lable: "Home", url: "/" },
  { lable: "About us", url: "/about" },
  { lable: "Services", url: "/services" },
  { lable: "Book Your Stay", url: "/properties" },
  { lable: "Blogs", url: "/blogs" },
  { lable: "Partner with us", url: "/partner-with-us" },
];

const HeaderSection = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [bookNow, setBookNow] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setBookNow(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List className="main__header_section">
        {navItems.map((item) => (
          <ListItem key={item.lable} disablePadding className="action_auto">
            <NavLink to={item.url}>{item.lable}</NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" className="main__header_section">
          <Toolbar
            className="toolbar_main"
            sx={{
              justifyContent: {
                xs: "space-between",
                sm: "space-between",
                md: "flex-start",
              },
              margin: { md: "10px 20px", lg: "10px 75px" },
            }}
          >
            <Grid className="logo_div" item lg={3}>
              <Box
                component={"img"}
                src={require("../../assets/images/hostizzyMainLogo.png")}
                width={100}
                height={58}
                className="hostizzy_logo"
                alt="Hostizzy logo"
                onClick={() => navigate("/")}
              />
            </Grid>
            <Grid
              item
              lg={8}
              className="header_navbar_section"
              sx={{ width: { md: "100% " } }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "block", lg: "block" },
                }}
                className="action_auto"
              >
                {navItems.map((item) => (
                  <NavLink to={item.url} key={item.lable}>
                    {item.lable}
                  </NavLink>
                ))}
              </Box>
            </Grid>
            <Grid item lg={1}>
              <Button
                onClick={() => setBookNow(true)}
                variant="outlined"
                className="book_now"
              >
                Book Now
              </Button>
            </Grid>
            <IconButton
              color="default"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none", sm: "flex" } }}
              className={`menu_icon_button ${mobileOpen ? `crossed` : ""}`}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              {/* <MenuIcon /> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main">
          <Toolbar className="toolbar_main" />
        </Box>
      </Box>
      {bookNow && <BookNowForm open={bookNow} handleClose={handleClose} />}
    </>
  );
};

export default HeaderSection;
