import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import {
  Box,
  Breadcrumbs,
  Button,
  FormLabel,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Divider from "@mui/material/Divider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBed,
  FaShower,
  FaMapSigns,
  FaWifi,
  FaCarAlt,
  FaSwimmingPool,
  FaPumpSoap,
} from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import { IoMdWifi } from "react-icons/io";
import {
  MdOutlineSoupKitchen,
  MdOutlineWorkspacePremium,
} from "react-icons/md";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { LuBath } from "react-icons/lu";
import { PiTelevisionBold } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { TbDeviceComputerCamera } from "react-icons/tb";
import CloseIcon from "@mui/icons-material/Close";
import "./index.scss";
import PropertiesListSlider from "../../components/Slider/propertiesListSlider";
import EnquiryForm from "../../components/dialog/enquiryForm";
import moment from "moment";
import { toast } from "react-toastify";
import { FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import { GiHighGrass } from "react-icons/gi";
import GalleryModal from "../../components/GalleryModal/GalleryModal";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { TbAirConditioning } from "react-icons/tb";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import {
  GiHotSpices,
  GiWaterSplash,
  GiSecurityGate,
  GiBarbecue,
  GiFireplace,
} from "react-icons/gi";
import { BiSolidBlanket } from "react-icons/bi";
import { SiAmazongames } from "react-icons/si";
import { MdSportsCricket, MdDinnerDining } from "react-icons/md";
import { IoBonfireSharp } from "react-icons/io5";
import { useRef } from "react";
import Skeleton from "@mui/material/Skeleton";
import ThingsToKnow from "../../components/dialog/ThingsToKnow";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import PropertySlider from "./PropertySlider";
const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(18),
    border: "1px solid #dadde9",
    fontWeight: "bold",
  },
}));
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size *
      rows}&fit=crop&auto=format&dpr=4 4x`,
  };
}

const PropertyDetails = () => {
  const location = useLocation();
  const thingsToKnowData = {
    houseRules: [
      "Check-in: 3:00 pm - 9:00 pm",
      "Checkout before 11:00 am",
      "12 guests maximum",
    ],

    safetyAndProperty: [
      "No carbon monoxide alarm",
      "No smoke alarm",
      "Security camera/recording device",
    ],

    cancellationPolicy: [
      "Free cancellation before 7 Jan.",
      "Review the Host's full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19",
    ],
  };
  const { id, property_id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [propertyInfo, setPropertyInfo] = useState({
    check_in: null,
    check_out: null,
    dayCount: 1,
    totalCount: 0,
    plateFormCharge: 0,
    Tax: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (property_id) {
      setLoading(true);
      axios
        .get(`https://app.hostizzy.com/api/properties/${property_id}`)
        .then((res) => {
          console.log(res?.data?.data, "sdjfdhu");

          let str = res?.data?.data?.map_url;

          const updatedHtmlString = str?.replace(
            /class="gmap_iframe"/g,
            'class="gmap_frame"'
          );

          let url = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.6560614959453!2d77.1714196754544!3d28.36924619598829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21a87ce30b75%3A0xd73ef95f2de8870a!2sPaam%20Ghar!5e0!3m2!1sen!2sin!4v1702014774518!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
          setData({ ...res?.data?.data, map_url: updatedHtmlString });

          setPropertyInfo((prev) => ({
            ...prev,
            totalCount: res?.data?.data?.price,
          }));

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [property_id]);

  // const handleCheckout = (e) => {
  // let property = { ...propertyInfo };
  // console.log(property?.check_in, "checkin");
  // property[e.target.name] = e.target.value;
  // var check_in = moment(property?.check_in, "YYYY-MM-DD");
  // var check_out = moment(property?.check_out, "YYYY-MM-DD");
  // var days = check_out.diff(check_in, "days");
  // console.log(property.check_in, property.check_out, "demooo");
  // setPropertyInfo(property);
  // if (property.check_in && property.check_out) {
  // if (days > 0) {
  // let totalPrice = days * data?.price;
  // property["dayCount"] = days;
  // property["totalCount"] = days * data?.price;
  // // property["plateFormCharge"] = days * data?.price * 0.1;
  // if (parseInt(totalPrice) <= 7499) {
  // property["Tax"] = totalPrice * 0.12;
  // }
  // if (parseInt(totalPrice) > 7499) {
  // property["Tax"] = totalPrice * 0.18;
  // }
  // setPropertyInfo(property);
  // } else {
  // toast.error("Enter future dates.");
  // }
  // }
  // };

  const stickyClass = isSticky ? "sticky___form" : "";

  const arrowRef = useRef(null);

  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  function renderDescription(description) {
    if (!description) return null;

    const sections = description.split(". "); // Split text by periods followed by a space

    return sections.map((section, index) => (
      <Typography key={index} sx={{ mt: index > 0 ? 2 : 0 }}>
        {section}
      </Typography>
    ));
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    if (state[0]?.startDate !== state[0]?.endDate) {
      setShowDateRange(false);

      let property = { ...propertyInfo };
      console.log(property?.check_in, "checkin");
      // property[e.target.name] = e.target.value;
      property.check_in = state[0]?.startDate;
      property.check_out = state[0]?.endDate;
      var check_in = moment(property?.check_in, "YYYY-MM-DD");
      var check_out = moment(property?.check_out, "YYYY-MM-DD");
      var days = check_out.diff(check_in, "days");
      console.log(property.check_in, property.check_out, "demooo");
      setPropertyInfo(property);
      if (property.check_in && property.check_out) {
        if (days > 0) {
          let totalPrice = days * data?.price;
          property["dayCount"] = days;
          property["totalCount"] = days * data?.price;
          // property["plateFormCharge"] = days * data?.price * 0.1;
          if (parseInt(totalPrice) <= 7499) {
            property["Tax"] = totalPrice * 0.12;
          }
          if (parseInt(totalPrice) > 7499) {
            property["Tax"] = totalPrice * 0.18;
          }
          setPropertyInfo(property);
        }
      }
    }
  }, [state]);

  return (
    <>
      <Helmet>
        <title>{data?.seo_title}</title>
        <meta property="og:description" content={data?.seo_meta_description} />
        <meta property="og:image" content={data?.cover_image} />
        <meta property="og:title" content={data?.seo_title} />
        <meta property="og:url" content={window.location.href.toString()} />
        <meta name="description" content={data?.seo_meta_description} />
        <meta name="keywords" content={data?.seo_keyword} />
      </Helmet>

      <Box className="properties_details_container">
        <div className="property_slider_desktop">
          <PropertiesListSlider
            data={data?.thumbnails}
            cover={data?.cover_image}
            setShow={setShow}
            loading={loading}
          />
        </div>

        <div className="property_slider_tablet">
          <PropertySlider data={data?.thumbnails} />
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "column", md: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: { sm: "100%", md: "67%" } }}>
            <Box
              sx={{
                p: 4,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              {loading ? (
                <Skeleton className="properties_desc_title" />
              ) : (
                <Typography className="properties_desc_title">
                  {data?.name}
                </Typography>
              )}
              <Box
                className="d-flex align-items-center location_div"
                sx={{ mt: 2 }}
              >
                {loading ? (
                  <Skeleton height={"30px"} width={"70%"} />
                ) : (
                  <>
                    <SlLocationPin className="location_icon" />
                    <Typography className="info__text location_para">
                      {data?.location?.address} {data?.location?.city}{" "}
                      {data?.location?.state} {data?.location?.zip}
                    </Typography>
                  </>
                )}
              </Box>
              <Box className="d-flex align-items-center" sx={{ mt: 4 }}>
                {loading ? (
                  <Skeleton
                    style={{
                      width: "45px",
                      height: "70px",
                      borderRadius: "100%",
                      marginRight: "1%",
                    }}
                  />
                ) : (
                  <Box
                    component={"img"}
                    src="https://a0.muscache.com/im/pictures/user/User-290639154/original/2298a7e7-97a2-47dc-b27c-e3cf090d4609.jpeg?im_w=240"
                    alt="user"
                    className="property__imsge__container"
                  />
                )}
                {loading ? (
                  <Skeleton height={"30px"} width={"50%"} />
                ) : (
                  <Typography>Hosted by {<b>{data?.host_name}</b>}</Typography>
                )}
              </Box>
              <Divider />
              <Box className="properties__bhk___info">
                <Box className="info_div">
                  {loading ? (
                    <Skeleton height={"30px"} width={"10%"} />
                  ) : (
                    <Typography className="info__text">
                      <FaPeopleRoof /> {data?.number_of_guest} Guests
                    </Typography>
                  )}
                  {loading ? (
                    <Skeleton height={"30px"} width={"10%"} />
                  ) : (
                    <Typography className="info__text">
                      <FaBed /> {data?.beds} Beds
                    </Typography>
                  )}
                  {loading ? (
                    <Skeleton height={"30px"} width={"10%"} />
                  ) : (
                    <Typography className="info__text">
                      <LuBath /> {data?.baths} Bathrooms
                    </Typography>
                  )}
                  {loading ? (
                    <Skeleton height={"30px"} width={"10%"} />
                  ) : (
                    <Typography className="info__text">
                      <FaBed />
                      {data?.rooms} Bedrooms
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
            <Box
              Box
              sx={{
                p: 4,
                mt: 4,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <Typography className="properties_desc_title">
                Ameneties
              </Typography>
              <Box
                sx={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}
              >
                {data?.amenities?.map((i) => (
                  <Box className="d-flex align-items-center list_____data">
                    <Box className="details___image__box">
                      {i == "Indoors Air Condition" ? (
                        <TbAirConditioning />
                      ) : i == " Room Heaters" ? (
                        <GiFireplace />
                      ) : i == "Wifi" ? (
                        <FaWifi />
                      ) : i == "Parking" ? (
                        <FaCarAlt />
                      ) : i == "Geyser" ? (
                        <GiWaterSplash />
                      ) : i == "Swimming Pool" ? (
                        <FaSwimmingPool />
                      ) : i == "Kitchen Essentials" ? (
                        <FaKitchenSet />
                      ) : i == "Bathroom Essentials" ? (
                        <FaPumpSoap />
                      ) : i == "Bedroom Essentials" ? (
                        <BiSolidBlanket />
                      ) : i == "Indoor Games" ? (
                        <SiAmazongames />
                      ) : i == "Outdoor Games" ? (
                        <MdSportsCricket />
                      ) : i == "Safety and Security" ? (
                        <GiSecurityGate />
                      ) : i == "Barbeque" ? (
                        <GiBarbecue />
                      ) : i == "In-house Food" ? (
                        <MdDinnerDining />
                      ) : i == "Bonfire" ? (
                        <IoBonfireSharp />
                      ) : (
                        <GiFlowerPot />
                      )}
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Typography>{i}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                p: 4,
                mt: 4,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <Typography className="properties_desc_title">
                Stay Information
              </Typography>
              <div dangerouslySetInnerHTML={{ __html: data?.description }} />
            </Box>

            <Box
              sx={{
                p: 4,
                mt: 4,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              className="slider_box"
            >
              <Typography className="properties_desc_title flex_div">
                Where you'll relax
                <div className="arrow_icon_div flex_div">
                  <div
                    className="arrow_icon"
                    onClick={() => arrowRef.current.slickPrev()}
                  >
                    <FaChevronLeft className="icon" />
                  </div>
                  <div
                    className="arrow_icon"
                    onClick={() => arrowRef.current.slickNext()}
                  >
                    <FaChevronRight className="icon" />
                  </div>
                </div>
              </Typography>
              <Slider ref={arrowRef} {...sliderSettings}>
                {Array.isArray(
                  data?.thumbnails?.filter((item) => item?.type === "bedroom")
                ) &&
                  data?.thumbnails
                    ?.filter((item) => item?.type === "bedroom")[0]
                    ?.images?.map((item, idx) => (
                      <div className="image_div">
                        <LazyLoadImage
                          effect="blur"
                          src={item}
                          className="slider_property_image"
                        />
                      </div>
                    ))}
              </Slider>
            </Box>

            <Box
              sx={{
                p: 4,
                mt: 4,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <Typography className="properties_desc_title">
                Location
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
                <Typography className="">
                  {data?.location?.address} {data?.location?.city}
                  {" ,"}
                  {data?.location?.state}
                  {" ,"}
                  {data?.location?.country} {" ,"}
                  {data?.location?.zip}
                </Typography>
              </Box>
              <Box>
                {data?.map_url && (
                  <Box
                    sx={{ p: 2 }}
                    dangerouslySetInnerHTML={{ __html: data?.map_url }}
                  ></Box>
                )}
              </Box>
            </Box>
          </Box>
          <Box component={"form"} className="form_box">
            <Box
              sx={{
                p: 4,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              className={`sticky-div ${stickyClass}`}
            >
              <Box className="prize____text">
                {loading ? (
                  <Skeleton height={"30px"} width={"100%"} />
                ) : (
                  <>
                    ₹{data?.price}/
                    <Typography>{data?.price_time_period}</Typography>
                  </>
                )}
              </Box>
              <Box className="d-flex">
                <Box
                  className="d-flex"
                  sx={{
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <div className="date_range_picker_div">
                    <div className="check_in_div">
                      <span
                        // style={{ position: "absolute", top: "0%", left: "0%" }}
                        className="checkin_span"
                      >
                        Check-In
                      </span>
                      <div
                        onClick={() => setShowDateRange(!showDateRange)}
                        className="start_end_date_div"
                      >
                        {moment(state[0]?.startDate)?.format("MMM DD, YYYY") ==
                        moment(state[0]?.endDate)?.format("MMM DD, YYYY")
                          ? "Add Date"
                          : moment(state[0]?.startDate)?.format("MMM DD, YYYY")}
                      </div>
                    </div>
                    <div className="check_in_div">
                      <span className="checkin_span">Check-Out</span>
                      <div
                        onClick={() => setShowDateRange(!showDateRange)}
                        className="start_end_date_div"
                      >
                        {moment(state[0]?.startDate)?.format("MMM DD, YYYY") ==
                        moment(state[0]?.endDate)?.format("MMM DD, YYYY")
                          ? "Add Date"
                          : moment(state[0]?.endDate)?.format("MMM DD, YYYY")}
                      </div>
                    </div>
                  </div>

                  {showDateRange && (
                    <DateRange
                      onChange={(item) => {
                        console.log("kjsdjfk", item);
                        setState([item.selection]);
                      }}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                      minDate={new Date()}
                      className="date_range_picker"
                      showDateDisplay={false}
                      rangeColors={["#fe5858"]}
                    />
                  )}
                </Box>

                {/* <Box className="d-flex" sx={{ flexDirection: "column" }}>
 <FormLabel sx={{ mt: 1, ml: 1, width: "100%" }}>
 Check Out
 </FormLabel>
 <TextField
 sx={{ mt: 1, ml: 1 }}
 type="date"
 placeholder="Check Out"
 size="small"
 name="check_out"
 onChange={(e) => handleCheckout(e)}
 value={moment(propertyInfo?.check_out).format("YYYY-MM-DD")}
 />
 </Box> */}
              </Box>
              <Box
                className="align-items-center justify-content-between"
                sx={{ mt: 2 }}
              >
                {loading ? (
                  <Skeleton height={"30px"} width={"50%"} />
                ) : (
                  <Box className="align-items-center">
                    <p>₹</p>
                    {data?.price}{" "}
                    <CloseIcon sx={{ fontSize: "15px", ml: 1, mr: 1 }} />{" "}
                    {propertyInfo?.dayCount}
                    &nbsp;{data?.price_time_period}
                  </Box>
                )}
                {loading ? (
                  <Skeleton height={"30px"} width={"20%"} />
                ) : (
                  <Typography>
                    ₹{data?.price * propertyInfo?.dayCount}
                  </Typography>
                )}
              </Box>
              <Box
                className="align-items-center justify-content-between"
                sx={{ mt: 2 }}
              >
                {/* {loading ? (
 <Skeleton height={"30px"} width={"50%"} />
 ) : (
 <Typography>Hostizzy service fee</Typography>
 )} */}
                {/* {loading ? (
 <Skeleton height={"30px"} width={"20%"} />
 ) : (
 <Typography>₹ {propertyInfo?.plateFormCharge}</Typography>
 )} */}
              </Box>
              <Box
                className="align-items-center justify-content-between"
                sx={{ mt: 0 }}
              >
                {loading ? (
                  <Skeleton height={"30px"} width={"50%"} />
                ) : (
                  <Typography>Tax</Typography>
                )}
                {loading ? (
                  <Skeleton height={"30px"} width={"20%"} />
                ) : (
                  <Typography>₹ {propertyInfo?.Tax}</Typography>
                )}
              </Box>
              <Box
                className="align-items-center justify-content-between"
                sx={{ mt: 2 }}
              >
                {loading ? (
                  <Skeleton height={"30px"} width={"50%"} />
                ) : (
                  <Typography>
                    <b>Total</b>
                  </Typography>
                )}
                {loading ? (
                  <Skeleton height={"30px"} width={"20%"} />
                ) : (
                  <Typography>
                    ₹{" "}
                    {data?.price * propertyInfo?.dayCount +
                      propertyInfo?.Tax +
                      propertyInfo?.plateFormCharge}
                  </Typography>
                )}
              </Box>
              <Button
                variant="contained"
                className="property__book___now_main"
                onClick={() => setOpen(true)}
              >
                Book Now
              </Button>
              <div className="book_now_btn_Container">
                <Button
                  variant="contained"
                  className="property__book___now"
                  onClick={() => {
                    let whatsappURL = `https://api.whatsapp.com/send?phone=919560494001&text=Hi,I Like your property ${data?.name}, Can You share Details?`;
                    window.open(whatsappURL, "_blank");
                  }}
                >
                  Chat us
                </Button>

                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">+91 9560494001</Typography>
                    </React.Fragment>
                  }
                  arrow
                >
                  <Button variant="contained" className="property__book___now">
                    <a
                      href={`tel:9560494001`}
                      style={{ textDecoration: "None" }}
                    >
                      Call us
                    </a>
                  </Button>
                </HtmlTooltip>
                {/* <Tooltip disableFocusListener title="9560494001">
 <Button
 variant="contained"
 className="property__book___now"
 >
 <a href={`tel:9560494001`} style={{textDecoration:"None"}}>
 Call us
 </a>
 </Button>
 </Tooltip> */}
              </div>
            </Box>
          </Box>
        </Box>

        <div className="things_to_know_div">
          <h1 className="things_to_know_heading">
            Some Additional Informations to consider
          </h1>
          <div className="things_to_know_child_div">
            <div className="things_small_div">
              <h1 className="things_small_head">House rules</h1>
              {thingsToKnowData?.houseRules?.map((item) => (
                <p className="things_para">{item}</p>
              ))}
              <p className="show_more_para">
                <span
                  onClick={() => setModalOpen(true)}
                  className="cursor_pointer underline_text"
                >
                  Show more
                </span>
                <ChevronRightIcon className="greater_sign" />
              </p>
            </div>
            <div className="things_small_div">
              <h1 className="things_small_head margin_top_2">
                Safety & property
              </h1>
              {thingsToKnowData?.safetyAndProperty?.map((item) => (
                <p className="things_para">{item}</p>
              ))}
              <p className="show_more_para">
                <span
                  onClick={() => setModalOpen(true)}
                  className="cursor_pointer underline_text"
                >
                  Show more
                </span>
                <ChevronRightIcon className="greater_sign" />
              </p>
            </div>
            <div className="things_small_div margin_top">
              <h1 className="things_small_head">Cancellation policy</h1>
              {thingsToKnowData?.cancellationPolicy?.map((item) => (
                <p className="things_para">{item}</p>
              ))}
            </div>
          </div>
        </div>
        {<ThingsToKnow open={modalOpen} handleClose={handleClose} />}
        {isOpen && (
          <EnquiryForm
            propertyName={data?.name}
            open={isOpen}
            handleClose={() => setOpen(false)}
            arrival_date={moment(state[0]?.startDate)?.format("YYYY-MM-DD")}
            departure_date={moment(state[0]?.endDate)?.format("YYYY-MM-DD")}
          />
        )}
        {show && (
          <GalleryModal show={show} setShow={setShow} data={data?.thumbnails} />
        )}
      </Box>
    </>
  );
};

export default Layout(PropertyDetails);
