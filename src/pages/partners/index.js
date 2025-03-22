import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import { Box, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import "./index.scss";
import { TitleText } from "../../styles/styledComponent";
import PartnerSlider from "../../components/Slider/partnerSlider";
import TypewriterText from "../../components/common/typeWriter";
import { AiOutlineSafety, AiOutlineGlobal } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import { GiSpookyHouse } from "react-icons/gi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Newsletter from "../../components/newsletter/newsletter";
import { useDispatch, useSelector } from "react-redux";
import { propertyAction } from "../../store/mostVisitedProperties/mostVisitedProperties";
import Select from "react-select";
import { Helmet } from "react-helmet";
const PartnerWithUsSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(propertyAction());
  }, [dispatch]);

  const propertiesList = useSelector(
    (state) => state?.mostVisitedPropertiesReducer?.result
  );

  const propertyOption = Array.isArray(propertiesList)
    ? propertiesList?.map((item, idx) => {
        return {
          value: item?._id,
          label: item?.name,
        };
      })
    : [];
  const helpTexts = [
    {
      title: "Optimise Opportunities",
      description:
        "Our global network and multi-channel strategy invite a world of guests to your holiday home, increasing visibility on platforms like Airbnb, Booking.com, and MakeMyTrip.",
      image: <AiOutlineGlobal />,
      subSection: [
        {
          title: "Boost Visibility",
          description:
            "Our global network and multi-channel strategy invite a world of guests to your holiday home, increasing visibility on platforms like Airbnb, Booking.com, and MakeMyTrip.",
        },
        {
          title: "Intelligent Pricing",
          description:
            "Our data-driven pricing strategy ensures you stay competitive, optimizing your earnings without compromising on the worth of your property.",
        },
        {
          title: "Guest Retention Program",
          description:
            "We aim not just to satisfy but to delight. Our sophisticated retention program keeps your guests coming back, fostering a sense of community and repeat bookings.",
        },
      ],
    },
    {
      title: "Always Host-Ready",
      description:
        "With our unique blend of technology and personal care, your property stays welcoming, appealing, and perfectly maintained.",
      image: <AiOutlineSafety />,
      subSection: [
        {
          title: "Effortless Maintenance",
          description:
            "With our unique blend of technology and personal care, your property stays welcoming, appealing, and perfectly maintained.",
        },
        {
          title: "Intelligent Check-In Solutions",
          description:
            "Our smart system ensures a seamless and secure check-in experience for your guests, eliminating any potential hassle.",
        },
        {
          title: "Heartfelt Hospitality",
          description:
            "Backed by a team of dedicated professionals available 24/7, we offer a human-centric approach to service, going the extra mile to create memorable stays for guests.",
        },
        {
          title: "Local Connections",
          description:
            "Our guests enjoy exclusive perks with local attractions and dining spots, adding an extra touch of local charm to their stay and supporting the community.",
        },
      ],
    },
    {
      title: "Your Property, Our Dedication",
      description:
        "We conduct regular professional inspections and maintenance, ensuring your property stays in peak condition and maintains its value over time.",
      image: <GiSpookyHouse />,
      subSection: [
        {
          title: "Professional Maintenance",
          description:
            "We conduct regular professional inspections and maintenance, ensuring your property stays in peak condition and maintains its value over time.",
        },
        {
          title: "Transparent Reporting",
          description:
            "Stay informed and in control with our regular, detailed reports. Understand your property's performance with insights into earnings trends, competitive standing, and guest feedback.",
        },
        {
          title: "Efficient Operations",
          description:
            "Harnessing intelligent data collection, we ensure smooth check-ins for your guests. We also offer smart review management, taking into account guests' feedback for continual service improvement.",
        },
      ],
    },
  ];

  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    property_type: "",
    location: "",
    service_required: "",
  });

  const notify = () => {
    toast.success("Yup! We have Received.");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    axios
      .post("https://app.hostizzy.com/form/leads", formData)
      .then((response) => {
        // Handle the API response here
        console.log("API call successful:", response.data);
        // Optionally, you can reset the form fields here if needed
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          property_type: "",
          location: "",
          service_required: "",
        });
        if (response?.data?.success == true) {
          setloading(false);
          notify();
        }
      })
      .catch((error) => {
        // Handle errors from the API call
        console.error("API call error:", error);
      });
  };

  const partnerDropdown = [
    { value: 1, label: "Villa" },
    { value: 2, label: "Apartment" },
    { value: 3, label: "Farmhouse" },
    { value: 4, label: "Homestay" },
    { value: 5, label: "Mudhouse" },
    { value: 6, label: "Luxury Tent" },
  ];

  return (
    <Box className="partner__container">
      <Helmet>
        <title>
          Partner with Hostizzy: Elevate Your Vacation Home Earnings in India
        </title>
        <meta
          name="description"
          content="Join forces with Hostizzy and transform your villa into a profitable vacation rental. Our expert management means more bookings and hassle-free earnings."
        />
      </Helmet>
      <Box className="slider_form_section">
        <Grid item lg={6} md={6} sm={12} className="image__container">
          <Box className="image__text_container">
            <TypewriterText
              typingSpeed={100}
              loopDelay={1000}
              className={"image_text_head"}
              text="Partner with us"
            />
            <h1 className="image_text_peragraphy">
              Maximize Your Rental Income with Hostizzy's Partnership.
            </h1>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} className="partner_form_container">
          <Paper sx={{ p: { xs: 2, sm: 5 } }}>
            <Typography className="form_title">LET'S GET STARTED</Typography>
            <Typography className="form_sub_title">
              Give us your details and we will call you back.
            </Typography>
            <Box component={"form"} className="form__container">
              <Grid item lg={12}>
                <TextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form_fields"
                  placeholder="Name"
                  variant="standard"
                />
              </Grid>
              <Grid item lg={12} className="d-flex">
                <TextField
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form_fields"
                  placeholder="Email"
                  variant="standard"
                />
                <TextField
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="form_fields"
                  placeholder="Phone"
                  variant="standard"
                />
              </Grid>
              <Grid item lg={12} className="d-flex">
                {/* <TextField
                  name='property_type'
                  value={formData.property_type}
                  onChange={handleChange}
                  className='form_fields'
                  placeholder='Property Type'
                  variant='standard'
                 
                /> */}
                <Select
                  type="textarea"
                  name="property_type"
                  value={partnerDropdown?.find(
                    (e) => e?.label === formData?.property_type
                  )}
                  placeholder="Property Type"
                  onChange={(e) => {
                    setFormData({ ...formData, property_type: e?.value });
                  }}
                  className="form_fields2"
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  options={partnerDropdown}
                  styles={{
                    valueContainer: (provided, state) => ({
                      ...provided,
                      padding: "0px",
                    }),

                    control: (provided, state) => ({
                      ...provided,
                      width: "200px",
                      border: "1px solid white",
                      borderBottom: "1px solid grey",
                      borderRadius: "0px",
                      boxShadow: "none",
                      padding: "0px",
                      "&:hover": {
                        borderBottom: "1.5px solid black",
                        transition: "border-color 0.2s",
                      },
                      "&:focus": {
                        borderBottom: "1.5px solid #007aff",
                      },
                    }),

                    dropdownIndicator: (provided, state) => ({
                      ...provided,
                      padding: "0px",
                    }),
                  }}
                />
                <TextField
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form_fields"
                  placeholder="Location"
                  variant="standard"
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  name="service_required"
                  value={formData.service_required}
                  onChange={handleChange}
                  className="form_fields"
                  placeholder="Services Required"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Button
                onClick={() => handleSubmit()}
                className="book_now submit_button"
                sx={{ pl: 3, pr: 3, mt: 3, float: "right" }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Box>
      <Box className="partner__container__help">
        <TitleText
          text={"HOW DOES HOSTIZZY™ HOMES & VILLAS HELP?"}
          className={"help__title"}
          height={12}
          width={215}
        />
        <Box
          sx={{ display: "flex", flexWrap: "wrap" }}
          className="partner__help__container"
        >
          {helpTexts?.map((text) => {
            return (
              <Paper
                elevation={3}
                key={text.title}
                className="help__details__container"
                sx={{ width: { xs: "90%", sm: "70%", md: "45%", lg: "30%" } }}
              >
                <Box className="help__image__container">{text.image}</Box>
                <Box
                  sx={{
                    p: 2,
                    pt: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h3>{text.title}</h3>
                </Box>
                {text?.subSection?.map((item) => {
                  return (
                    <Box sx={{ p: 2, pt: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <div
                          style={{
                            height: 10,
                            width: 10,
                            borderRadius: "50%",
                            backgroundColor: "black",
                          }}
                        ></div>
                        <h3>{item?.title}</h3>
                      </div>
                      <p className="help__sub_section_title">
                        {item?.description}
                      </p>
                    </Box>
                  );
                })}
              </Paper>
            );
          })}
        </Box>
      </Box>
      <Box className="partner__position_container">
        <TitleText
          text={
            "WE EXPERTLY POSITION YOUR PROPERTY ACROSS ALL OTA’S, ENHANCING VISIBILITY"
          }
          className={"partner__position__title"}
          height={12}
          width={205}
        />
        <Box sx={{ width: "100%" }}>
          <PartnerSlider />
        </Box>
      </Box>

      <div className="address_container">
        <div className="address_box">
          <VscLocation
            className="partner__details__container___icon"
            style={{ fontSize: "30px" }}
          />
          <p>Harsha Bhawan, E 13/29, 1st Floor, Delhi, 110001</p>
        </div>
        <div className="address_box">
          <MdOutlineMarkEmailUnread
            className="partner__details__container___icon"
            style={{ fontSize: "30px" }}
          />
          <p>partnerships@hostizzy.com</p>
        </div>
        <div className="address_box">
          <FiPhoneCall
            className="partner__details__container___icon"
            style={{ fontSize: "30px" }}
          />
          <p>+919560493335</p>
        </div>
      </div>
      <Toaster />
      <Newsletter />
    </Box>
  );
};

export default Layout(PartnerWithUsSection);
