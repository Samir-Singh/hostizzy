import React, { useState } from "react";
import Layout from "../../layout";
import "./index.scss";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import PhoneIcon from "@mui/icons-material/Phone";
import MonthlyBill from "./component/MonthlyBill/MonthlyBill";
import YearlyBill from "./component/YearlyBill/YearlyBill";
import { Box, Grid } from "@mui/material";
import TypewriterText from "../../components/common/typeWriter";
import {
  FaChartLine,
  FaLaptopHouse,
  FaPhoneVolume,
  FaNetworkWired,
  FaMoneyBillAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdSupportAgent, MdAnalytics } from "react-icons/md";
import Newsletter from "../../components/newsletter/newsletter";
import { Helmet } from "react-helmet";
const ServiceSection = () => {
  const [plan, setPlan] = useState(false);
  const handlePlanChange = () => {
    setPlan(!plan);
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setPlan(event.target.checked);
  };

  return (
    <>
      <Helmet>
        <title>Airbnb & Vacation Home Management Services by Hostizzy</title>
        <meta
          name="description"
          content="Explore Hostizzy's suite of Airbnb and vacation home management services. From maintenance to guest relations, we ensure your property thrives."
        />
      </Helmet>
      <div class="service_main_div">
        <Box className="blog___slider_form_section">
          <Grid className="blog___image__container">
            <Box className="blog___image__text_container">
              <TypewriterText
                typingSpeed={100}
                loopDelay={1000}
                className={"blog__image_text_head"}
                text="Our Services"
              />
            </Box>
          </Grid>
        </Box>
        <div class="key_services_parent_div">
          <div class="key_services_div">
            <h2 class="membership_plan_heading">
              8 Key Services to Elevate Your Property
            </h2>
            <h1>Comprehensive Management Services for Your Vacation Home</h1>
          </div>
          <div class="keyServicesMaindiv">
            <div class="keyServicesCard">
              <FaChartLine style={{ fontSize: "40px", color: "#fe5858" }} />
              <h3>Tailored Management Plans</h3>
            </div>

            <div class="keyServicesCard">
              <FaLaptopHouse style={{ fontSize: "40px", color: "#fe5858" }} />
              <h3>Property Optimization</h3>
            </div>
            <div class="keyServicesCard">
              <FaPhoneVolume style={{ fontSize: "40px", color: "#fe5858" }} />
              <h3>Guest Communication</h3>
            </div>
            <div class="keyServicesCard">
              <FaMoneyBillAlt style={{ fontSize: "40px", color: "#fe5858" }} />
              <h3>Price Optimization</h3>
            </div>
            <div class="keyServicesCard">
              <FaCalendarAlt style={{ fontSize: "40px", color: "#fe5858" }} />
              <h3>Booking Management</h3>
            </div>
            <div class="keyServicesCard">
              <FaNetworkWired style={{ fontSize: "40px", color: "#fe5858" }} />
              <h3>Property Maintenance & Cleaning</h3>
            </div>
            <div class="keyServicesCard">
              <MdSupportAgent style={{ fontSize: "40px", color: "#fe5858" }} />
              <h3>24/7 Guest Support</h3>
            </div>
            <div class="keyServicesCard">
              <MdAnalytics style={{ fontSize: "40px", color: "#fe5858" }} />
              <h3>Performance Analysis & Reporting</h3>
            </div>
          </div>
        </div>

        <div class="plans_div">
          <h2 class="membership_plan_heading">Revenue Share Plans</h2>
          <YearlyBill />
          <h2 class="membership_plan_heading">FIXED COST PLANS (RECURRING)</h2>
          <MonthlyBill />
        </div>

        <Newsletter />
      </div>
    </>
  );
};

export default Layout(ServiceSection);
