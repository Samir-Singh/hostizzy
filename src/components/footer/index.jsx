import React, { useState } from "react";
import "./index.scss";
import logo from "../../assets/images/hostizzyLogo.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import {
  BiLogoGooglePlus,
  BiLogoInstagram,
  BiLogoPinterest,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { TfiYoutube } from "react-icons/tfi";
import {FaAirbnb}  from "react-icons/fa";

const FooterSection = () => {
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="footer_main_div">
      <div className="footer_first_div">
        <div className="footer_col_1">
          <div className="logo_img_div">
            <img src={logo} alt="logo" className="logo_img" />
          </div>
          <p className="footer_dec" align="justify">
            Entrusting your home to Hostizzy™ Homes & Villas means partnering
            with a team that values transparency and collaboration.{" "}
            {readMore && (
              <span>
                Experience the Hostizzy™ Homes & Villas difference, where we
                turn your property into a thriving vacation retreat, all while
                keeping you informed and engaged in every aspect of the
                process.”
              </span>
            )}
          </p>
          <p className="read_more">
            <span onClick={() => setReadMore(!readMore)} className="cursor">
              {!readMore ? "Read More" : "Read Less"}{" "}
              <ChevronRightIcon className="greater_sign" />
            </span>
          </p>
        </div>
        <div className="footer_col_2">
          <h1 className="column_heading">Explore</h1>
          <div className="column_values_div">
            <p className="column_values" onClick={()=>navigate("/partner-with-us")}>
              <span className="cursor">
                <ChevronRightIcon className="greater_sign" />
               Patner With Us
              </span>
            </p>
            <p className="column_values" onClick={()=>navigate("/services")}>
              <span className="cursor">
                <ChevronRightIcon className="greater_sign" />
                Services
              </span>
            </p>
            <p className="column_values" onClick={()=>navigate("/about")}>
              <span className="cursor">
                <ChevronRightIcon className="greater_sign" />
                About Us
              </span>
            </p>
            <p className="column_values" onClick={()=>navigate("/blogs")}>
              <span className="cursor">
                <ChevronRightIcon className="greater_sign" />
                Blogs
              </span>
            </p>
            <p className="column_values" onClick={()=>navigate("/properties")}>
              <span className="cursor">
                <ChevronRightIcon className="greater_sign" />
               Book Your Stay
              </span>
            </p>
            {/* <p className="column_values">
              <span className="cursor">
                <ChevronRightIcon className="greater_sign" />
                Studio
              </span>
            </p> */}
          </div>
        </div>
        <div className="footer_col_3">
          <h1 className="column_heading">Company</h1>
          <div className="column_values_div">
            <p className="column_values" onClick={()=>navigate("/about")}>
              <span className="cursor">
                <ChevronRightIcon className="greater_sign" />
               About Us
              </span>
            </p>
            <p className="column_values" onClick={()=>navigate("/")}>
              <span className="cursor">
                <ChevronRightIcon className="greater_sign" />
                Home
              </span>
            </p>
          </div>
        </div>
        <div className="footer_col_4">
          <h1 className="column_heading">Contact Us</h1>
          <div className="column_values_div">
            <p className="contact_para">
              <span className="contact_cursor">
                <LocationOnIcon />
                Harsha Bhawan, E-13/29, First floor, Connaught Place, New Delhi-110001, India
              </span>
            </p>
            <p className="contact_para">
              <span className="contact_cursor">
                <LocalPhoneRoundedIcon />
                9560494001
              </span>
            </p>
            {/* <p className="contact_para">
              <span className="contact_cursor">
                <LocalPhoneRoundedIcon />
                8766542362
              </span>
            </p> */}
            <p className="contact_para">
              <span className="contact_cursor2">
                <MailOutlineRoundedIcon />
                stay@hostizzy.com
              </span>
            </p>
            {/* <p className="contact_para">
              <span className="contact_cursor">
                <ChevronRightIcon />
                Contact Us
              </span>
            </p> */}
          </div>
        </div>
      </div>
      <div className="footer_second_div">
        <p className="last_para">
       Hostizzy - All rights reserved -  Copyright © 2023 
        </p>
        <p className="logo_para">
  <a href="https://www.facebook.com/hostizzyhomes" target="_blank">
    <SlSocialFacebook className="logo_icons" />
  </a>
  <a href="https://twitter.com/hostsphereindia" target="_blank">
    <FiTwitter className="logo_icons" />
  </a>
  <a href="https://www.linkedin.com/company/hostsphereindia" target="_blank">
    <SlSocialLinkedin className="logo_icons" />
  </a>
  <a >
    <BiLogoGooglePlus className="logo_icons" />
  </a>
  <a href="https://www.instagram.com/hostizzy" target="_blank">
    <BiLogoInstagram className="logo_icons" />
  </a>
  <a href="https://www.airbnb.co.in/p/hostizzyhomes" target="_blank">
    <FaAirbnb className="logo_icons" />
  </a>
  <a href="https://www.youtube.com/@hostizzyhomes" target="_blank">
    <TfiYoutube className="logo_icons" />
  </a>
</p>


      </div>
    </div>
  );
};

export default FooterSection;