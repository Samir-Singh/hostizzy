import { Box, Typography } from "@mui/material";
import { VscSettings } from "react-icons/vsc";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import "./index.scss";
import Layout from "../../layout";
import Cards from "../../components/cards/cards";
import {
  PropertiesFilter,
  PriceFilter,
  BedBathFilter,
  LocationFilter,
  AmenitiesFilters,
} from "../../components/filters/propertiesFilter";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid } from "@mui/material";
import TypewriterText from "../../components/common/typeWriter";
import axios from "axios";
import Slider from "react-slider";
import Skeleton from "@mui/material/Skeleton";
import { Helmet } from "react-helmet";
import Backdrop from "../../components/Backdrop/Backdrop";
const drawerWidth = 240;

const PropertiesList = () => {
  const navigate = useNavigate();
  const [backdrop, setBackdrop] = useState(false);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(30);
  const [min, setmin] = useState(3000);
  const [max, setmax] = useState(100000);
  const [filtersOption, setFiltersOption] = useState({
    isOpen: false,
    isSelect: "",
  });
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues) => setValues(newValues);
  const [data, setData] = useState([]);
  const [ClonedData, setClonedData] = useState([]);
  const [amenties, setamenties] = useState([]);
  const [locations, setlocations] = useState([]);
  const [selectedLocation, setselectedLocation] = useState(null);
  const [selectedPrice, setselectedPrice] = useState(null);
  const [selectedAmeneties, setselectedAmeneties] = useState(null);
  const [location, setlocation] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    if (!location) {
      // Define the API URL
      setloading(true);
      const apiUrl = "https://app.hostizzy.com/api/properties";

      // Make the GET request using Axios
      axios
        .get(apiUrl)
        .then((response) => {
          // Handle the successful response here
          setloading(false);
          if (response.data?.success == true) {
            setData(response?.data?.data);
            setClonedData(response?.data?.data);
          }
        })
        .catch((error) => {
          // Handle any errors here
          setloading(false);
          console.error("Error fetching data:", error);
        });
    }
  }, [location]);

  const handleFilterTags = (filter) => {
    setBackdrop(true);
    setFiltersOption({ isOpen: !filtersOption?.isOpen, isSelect: filter });
  };

  const handlePriceData = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    if (data) {
      const uniqueAmenities = data.reduce((uniqueAmenities, item) => {
        item.amenities.forEach((amenity) => {
          if (!uniqueAmenities.includes(amenity)) {
            uniqueAmenities.push(amenity);
          }
        });
        return uniqueAmenities;
      }, []);

      const uniqueStates = Array.from(
        new Set(data.map((item) => item.location.state))
      );

      setamenties(uniqueAmenities);
      setlocations(uniqueStates);
    }
  }, [data]);

  useEffect(() => {
    // Filter the property data based on min and max values
    const filteredProperties = ClonedData?.filter((property) => {
      // Assuming each property has a 'price' property
      const propertyPrice = property.price;

      // Filter properties within the price range defined by min and max
      return propertyPrice >= min && propertyPrice <= max;
    });

    // Update the state with the filtered data
    setData(filteredProperties);
  }, [min, max]);

  useEffect(() => {
    // Use the useEffect hook to filter the data when 'location' state changes.
    const filteredProperties = ClonedData?.filter(
      (property) => property.location.state === location
    );
    setData(filteredProperties);
    setFiltersOption({
      isOpen: false,
      isSelect: "",
    });
  }, [location]);

  useEffect(() => {
    if (data) {
      const uniqueAmenities = data.reduce((uniqueAmenities, item) => {
        item.amenities.forEach((amenity) => {
          if (!uniqueAmenities.includes(amenity)) {
            uniqueAmenities.push(amenity);
          }
        });
        return uniqueAmenities;
      }, []);

      const uniqueStates = Array.from(
        new Set(ClonedData?.map((item) => item.location.state))
      );

      setamenties(uniqueAmenities);
      setlocations(uniqueStates);
    }
  }, [data]);
  return (
    <Box sx={{}}>
      <Helmet>
        <title>
          Book Your Stay with Hostizzy: Luxurious Vacation Homes in India
        </title>
        <meta
          name="description"
          content="Find the perfect getaway with Hostizzy. Book your stay at our luxurious and well-managed vacation homes across India. Easy booking, unforgettable experiences."
        />
      </Helmet>
      <div class="property_video">
        {/* <video id="background-video" loop autoPlay muted >
          <source src={require("../../assets/NCR.mp4")} type="video/mp4" />
        </video> */}
        <div className="video-container">
          <iframe
            width="100%"
            height="670"
            src={`https://www.youtube.com/embed/tZ_r7TmcQ2I?autoplay=1&mute=1&controls=0&loop=1&rel=0`} // Add the 'autoplay' parameter
            title="Hostizzy Homes and Villas"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Box className="properties__list__container">
        <h1 className="rental_vacation_heading">
          Find Your Ideal Vacation Rental with Hostizzy
        </h1>
        {/* price filter */}
        <Box sx={{ display: "flex", padding: "0% 4%" }}>
          <Box className="open-btn" onClick={() => handleFilterTags("price")}>
            Price <KeyboardArrowDownIcon className="arrow" />
          </Box>
          {filtersOption?.isSelect === "price" && filtersOption?.isOpen && (
            <PriceFilter
              min={min}
              setmin={setmin}
              max={max}
              setmax={setmax}
              handlePriceData={handlePriceData}
              price={price}
              setFilterOption={setFiltersOption}
            />
          )}

          {/* beds and baths filter */}
          {/* <Box
            className="open-btn"
            sx={{ ml: 3 }}
            onClick={() => handleFilterTags("bb")}
          >
            Beds / Baths <KeyboardArrowDownIcon className="arrow" />
          </Box> */}
          {/* {filtersOption?.isSelect === "bb" && filtersOption?.isOpen && (
            // <BedBathFilter />
          )} */}

          {/* Location filter */}
          <Box
            className="open-btn"
            sx={{ ml: 3 }}
            onClick={() => handleFilterTags("location")}
          >
            Location <KeyboardArrowDownIcon className="arrow" />
          </Box>
          {filtersOption?.isSelect === "location" && filtersOption?.isOpen && (
            <LocationFilter
              options={locations}
              setlocation={setlocation}
              location={location}
              setBackdrop={setBackdrop}
            />
          )}

          {/* Amenities filter */}
          <Box
            className="open-btn"
            sx={{ ml: 3 }}
            onClick={() => handleFilterTags("amenities")}
          >
            Amenities <KeyboardArrowDownIcon className="arrow" />
          </Box>
          {filtersOption?.isSelect === "amenities" && filtersOption?.isOpen && (
            <AmenitiesFilters data={amenties} />
          )}
        </Box>

        <Box className="properties__list__details">
          {loading ? (
            [1, 2, 3, 4, 5, 6]?.map((item) => (
              <div>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  className="skeleton_card"
                />
                <Skeleton height={24} />
                <Skeleton height={24} width="60%" />
              </div>
            ))
          ) : (
            <Box
              className={`filter___active__properties ${open ? "active" : ""}`}
            >
              {data?.map((item, idx) => {
                let dashName = item.name.split(" ").join("-");
                if (item?.is_active) {
                  return (
                    <Cards
                      item={item}
                      onClick={() =>
                        navigate(`/properties/${dashName}/${item?._id}`, {
                          state: item,
                        })
                      }
                    />
                  );
                }
              })}
            </Box>
          )}

          {open && <PropertiesFilter open={open} />}
        </Box>
      </Box>
      <Backdrop
        open={backdrop}
        backdropClick={() => {
          setBackdrop(false);
          setFiltersOption({ ...filtersOption, isOpen: false });
        }}
      />
    </Box>
  );
};

export default Layout(PropertiesList);
