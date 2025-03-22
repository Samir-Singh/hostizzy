import React from "react";
import {
  Input,
  Paper,
  Slider,
  TextField,
  Typography,
  Box,
  Autocomplete,
  Divider,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { SearchOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export const PropertiesFilter = ({ open }) => {
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Paper elevation={3} className={open ? "active__filters" : ""}>
      <Typography className="find___text">Find your home</Typography>
      <TextField
        size="small"
        placeholder="What are you looking for?"
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
      <Typography className="find___text">Prize</Typography>
      <Box className="d-flex align-items-center">
        <TextField size="small" placeholder="Min." />
        <Typography sx={{ mx: 2 }}>-</Typography>
        <TextField size="small" placeholder="Max" />
      </Box>
      <Typography className="find___text">Beds</Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <Box className="d-flex align-items-center">
        <TextField size="small" />
        <Typography sx={{ mx: 2 }}>-</Typography>
        <TextField size="small" />
      </Box>
      <Typography className="find___text">Square Feet</Typography>
      <Box className="d-flex align-items-center">
        <TextField size="small" placeholder="Min." />
        <Typography sx={{ mx: 2 }}>-</Typography>
        <TextField size="small" placeholder="Max" />
      </Box>
      <Typography className="find___text">State </Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["MP", "UP", "Rajasthan"]}
        // sx={{ width: 300 }}
        size="small"
        renderInput={(params) => <TextField {...params} label="State" />}
      />
      <Typography className="find___text">City </Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["Jaipur", "Sikar", "Itava", "Lucknow"]}
        // sx={{ width: 300 }}
        size="small"
        renderInput={(params) => <TextField {...params} label="City" />}
      />
    </Paper>
  );
};
// import * as React from "react";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export const PriceFilter = ({
  handlePriceData,
  price,
  min,
  setmin,
  max,
  setmax,
  setFilterOption,
}) => {
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setmin(newValue[0]);
    setmax(newValue[1]); // Pass the new value to your handler
  };
  return (
    <Box className="drop_content3 price_filter">
      <Box className="widget_wrapper">
        <Typography className="list_title__filter">Price Range</Typography>
        {/* <Box className="range-slider-style1">
          <Box className="range-wrapper">
            <Slider
              aria-label="Temperature"
              value={price}
              valueLabelDisplay="auto"
              step={10}
              min={10}
              max={110}
              onChange={(e) => handlePriceData(e)}
            />
            <Box className="align-items-center justify-content-between">
              <TextField type="text" size="small" value={price} />
              <Typography sx={{ ml: 2, mr: 2 }}>-</Typography>
              <TextField type="text" size="small" value={110} />
            </Box>
          </Box>
        </Box> */}

        <Box>
          <AirbnbSlider
            slots={{ thumb: AirbnbThumbComponent }}
            // valueLabelDisplay="on"
            getAriaLabel={(index) =>
              index === 0 ? "Minimum price" : "Maximum price"
            }
            step={1000}
            min={3000}
            max={100000}
            defaultValue={[min, max]}
            onChange={handleChange}
          />
        </Box>
        <Box className="align-items-center justify-content-between">
          <TextField type="text" size="small" value={min} />
          <Typography sx={{ ml: 2, mr: 2 }}>-</Typography>
          <TextField type="text" size="small" value={max} />
        </Box>
      </Box>
      <Divider />
      <Box className="text_done">
        <Button
          variant="contained"
          className="drop_btn3"
          onClick={() => {
            setFilterOption({
              isOpen: false,
              isSelect: "",
            });
          }}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
};

export const BedBathFilter = () => {
  return (
    <Box className="drop_content3 bed_bath_filter">
      <Box className="widget_wrapper">
        <Typography className="list_title__filter">Bedrooms</Typography>
        <Box className="d-flex">
          <Box className="selection">
            <Input id="any" name="beds" type="radio" checked />
            <label for="any">any</label>
          </Box>
          <Box className="selection">
            <Input id="oneplus" name="beds" type="radio" />
            <label for="oneplus">1</label>
          </Box>
          <Box className="selection">
            <Input id="twoplus" name="beds" type="radio" />
            <label for="twoplus">2</label>
          </Box>
          <Box className="selection">
            <Input id="threeplus" name="beds" type="radio" />
            <label for="threeplus">3</label>
          </Box>
          <Box className="selection">
            <Input id="fourplus" name="beds" type="radio" />
            <label for="fourplus">4</label>
          </Box>
          <Box className="selection">
            <Input id="fiveplus" name="beds" type="radio" />
            <label for="fiveplus">5</label>
          </Box>
          <Box className="selection">
            <Input id="fiveplus" name="beds" type="radio" />
            <label for="fiveplus">More</label>
          </Box>
        </Box>
      </Box>
      <Box className="widget_wrapper">
        <Typography className="list_title__filter">Bathrooms</Typography>
        <Box className="d-flex">
          <Box className="selection">
            <Input id="baany" name="bath" type="radio" checked />
            <label for="baany">any</label>
          </Box>
          <Box className="selection">
            <Input id="baoneplus" name="bath" type="radio" />
            <label for="baoneplus">1</label>
          </Box>
          <Box className="selection">
            <Input id="batwoplus" name="bath" type="radio" />
            <label for="batwoplus">2</label>
          </Box>
          <Box className="selection">
            <Input id="bathreeplus" name="bath" type="radio" />
            <label for="bathreeplus">3</label>
          </Box>
          <Box className="selection">
            <Input id="bafourplus" name="bath" type="radio" />
            <label for="bafourplus">4</label>
          </Box>
          <Box className="selection">
            <Input id="bafiveplus" name="bath" type="radio" />
            <label for="bafiveplus">5</label>
          </Box>
          <Box className="selection">
            <Input id="bafiveplus" name="bath" type="radio" />
            <label for="bafiveplus">More</label>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className="text_done">
        <Button variant="contained" className="drop_btn3">
          Done
        </Button>
      </Box>
    </Box>
  );
};

export const LocationFilter = ({
  setBackdrop,
  options,
  location,
  setlocation,
}) => {
  const navigate = useNavigate();
  return (
    <Box className="drop_content3 location_filter">
      <Box className="widget_wrapper">
        <Typography className="list_title__filter">Location</Typography>
        <Autocomplete
          value={location}
          disablePortal
          size="small"
          options={options}
          sx={{ width: 300 }}
          onChange={(event, newValue) => {
            setBackdrop(false);
            setlocation(newValue);
            if (newValue) {
              navigate(`/properties?city=${newValue}`);
            } else {
              navigate("/properties");
            }
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Location" />
          )}
        />
        {/* <Divider sx={{ mt: 3 }} /> */}
        {/* <Box className="text_done">
          <Button variant="contained" className="drop_btn3">
            Done
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export const AmenitiesFilters = ({ data }) => {
  return (
    <Box className="drop_content3 amenities_filter">
      <Box className="widget_wrapper">
        <Typography className="list_title__filter">Amenities</Typography>
        <Grid item sm={4}>
          <Box className="widget-wrapper">
            <Box className="checkbox-style1">
              {data?.map((item, idx) => {
                return (
                  <label className="custom_checkbox">
                    {item}
                    <input type="checkbox" checked={true} />
                    <Typography className="checkmark"></Typography>
                  </label>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Divider sx={{ mt: 3 }} />
        <Box className="text_done">
          <Button variant="contained" className="drop_btn3">
            Done
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
