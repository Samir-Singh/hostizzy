import React, { useEffect, useState } from "react";
import "./index.scss";
import Layout from "../../layout";
import Slider from "../../components/Slider/homeSlider";
import Cards from "../../components/cards/cards";
import ExpertsSection from "../../components/expertsSection/expertsSection";
// import Newsletter from "../../components/newsletter/newsletter";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Testimonial from "../../components/testimonial/testimonial";
import AnimatedCounters from "../../components/animatedCounters/animatedCounters";
import { MdOutlineReadMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import Newsletter from "../../components/newsletter/newsletter";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { propertyAction } from "../../store/mostVisitedProperties/mostVisitedProperties";
import MainSlider from "../../components/homePageSlider/testimonial";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { FaRobot } from "react-icons/fa";
import { SiRobotframework } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { Helmet } from "react-helmet";
import BookNowForm from "../../components/dialog/bookNowForm";
const theme = {
  background: "#EFEAE2",
  headerBgColor: "#000",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#FFFFFF",
  botFontColor: "#000",
  userBubbleColor: "#D9FDD2",
  userFontColor: "#000",
};
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [bookNow, setBookNow] = useState(false);
  const handleClose = () => {
    setBookNow(false);
  };
  // useEffect(() => {
  //   // Define the API URL
  //   const apiUrl = "https://app.hostizzy.com/api/properties";

  //   // Make the GET request using Axios
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       // Handle the successful response here

  //       if (response.data?.success == true) {
  //         setData(response?.data?.data);
  //         console.log(response?.data?.data);
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle any errors here
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(propertyAction());
  }, [dispatch]);

  const propertiesList = useSelector(
    (state) => state?.mostVisitedPropertiesReducer
  );

  useEffect(() => {
    // Preload the videos when the component mounts
    let videos = [
      "https://hostizzy.com/static/media/NCR.220333c9c7057ff01d50.mp4",
      "https://hostizzy.com/static/media/bornfire.474be063cf957259beea.mp4",
    ];
    videos.forEach((videoSrc) => {
      const video = document.createElement("video");
      video.src = videoSrc;
      video.preload = "auto";
    });
  }, []);

  // const extractThumbnailUrls = (data) => {
  //   const thumbnailUrls = [];
  //   data?.forEach((item) => {
  //     item.thumbnails.forEach((thumbnail) => {
  //       thumbnail.images.forEach((imageUrl) => {
  //         thumbnailUrls.push(imageUrl);
  //       });
  //     });
  //   });
  //   return thumbnailUrls;
  // };

  // const preloadImages = (imageUrls) => {
  //   imageUrls?.forEach((imageUrl) => {
  //     const img = new Image();
  //     img.src = imageUrl;
  //     img.onload = () => {
  //       // The image is now cached and can be displayed without reloading
  //       console.log(`Image preloaded: ${imageUrl}`);
  //     };
  //   });
  // };

  // useEffect(() => {
  //  if(propertiesList?.result!==null){
  //   console.log(propertiesList,"property")
  //   const thumbnailUrls = extractThumbnailUrls(propertiesList?.result);
  //   preloadImages(thumbnailUrls);
  //  }
  //   }, [propertiesList?.result])

  const steps = [
    {
      id: "1",
      message: "Hi, I am your virtual assistant, What can i help you?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Chat With Us", trigger: "4" },
        { value: 2, label: "Find Best Stays For You", trigger: "4" },
        { value: 3, label: "What we do?", trigger: "5" },
        { value: 4, label: "Partner with us", trigger: "4" },
        { value: 5, label: "Talk to our expert", trigger: "6" },
      ],
    },
    {
      id: "3",
      message: "Wrong answer, try again.",
      trigger: "2",
    },
    {
      id: "4",
      message: "Awesome! I am Redirecting!",
      end: true,
    },
    {
      id: "7",
      options: [{ value: 1, label: "Need More Help?", trigger: "2" }],
    },
    {
      id: "5",
      component: (
        <p>
          At Hostizzy™ Homes & Villas, we specialize in simplifying your hosting
          journey.
          <br />
          <br /> As a leading Airbnb and vacation rental property management
          company in India, we manage all facets of short-term rentals across
          key platforms like Airbnb, Booking.com, and MakeMyTrip. <br />
          <br /> Our full-service management approach takes the burden off your
          shoulders,from guest bookings and communications to impeccable
          cleaning and maintenance services. <br />
          <br />
          Let us enhance your property’s online visibility and ranking across
          multiple rental platforms.
        </p>
      ),
      trigger: "7",
    },
    {
      id: "6",
      message: "Call us at 9560494001",
      trigger: "7",
    },
  ];
  const handleEnd = ({ values }) => {
    console.log(values);
    if (values[values?.length - 1] == 1) {
      const whatsappURL =
        "https://api.whatsapp.com/send?phone=919560494001&text=Hi,%20We%20loved%20your%20property%20Sunahari%20Bagh,%20can%20you%20share%20the%20details?";
      window.open(whatsappURL, "_blank");
      window.location.reload(true);
    } else if (values[values?.length - 1] == 2) {
      navigate("/properties");
      //  window.location.reload(true)
    } else if (values[values?.length - 1] == 4) {
      navigate("/partner-with-us");
      //  window.location.reload(true)
    }
  };
  return (
    <>
      <Helmet>
        <title>
          Hostizzy: India's Leading Airbnb & Vacation Home Management Company
        </title>
        <meta
          name="description"
          content="Hostizzy revolutionizes Airbnb and vacation home management in India. Discover our personalized services that maximize your property's earnings and ensure guest satisfaction."
        />
      </Helmet>
      {/* <Slider /> */}
      <MainSlider setBookNow={setBookNow} />
      <div className="most_visited_properties_div">
        <h2 className="most_visited_heading">OUR MOST VISITED PROPERTIES</h2>
        <h1>
          Experience Premier Airbnb & Vacation Home Management with Hostizzy
        </h1>
      </div>
      <div className="cardsContainer">
        {propertiesList?.isLoading
          ? [1, 2, 3, 4, 5, 6]?.map((item) => (
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
          : propertiesList?.result?.slice(0, 9)?.map((item, idx) => {
              const key = idx;
              let dashName = item.name.split(" ").join("-");
              if (item?.is_active) {
                return (
                  <Cards
                    key={key}
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
      </div>

      <div className="ShowMoreContainer">
        <h3>Continue Exploring Stays</h3>
      </div>
      <div className="ShowMoreContainer">
        <button onClick={() => navigate("/properties")}>Show More</button>
      </div>
      <ExpertsSection />
      {/* <Newsletter/> */}
      <div className="xpertMainSection">
        <h2 className="section-heading galleria_head">GALLERIA</h2>
      </div>
      <ServicesSection />

      <div className="testimonial-heading">
        <h2>Guest's Words About Hostizzy Homes & Villas</h2>
      </div>
      <Testimonial />
      <div className="HomeblogsContainer">
        <div className="left">
          <h2>
            Comprehensive Solutions For Airbnb And Vacation Rental Management
          </h2>
          <p align="justify">
            At Hostizzy™ Homes & Villas, we specialize in Vacation Home
            Management, providing a suite of comprehensive services designed to
            enhance your property’s visibility, streamline operations, and
            elevate guest satisfaction.
          </p>

          <div className="leftImg">
            <FaCheckCircle />
            <h3>Airbnb Managment Solutions</h3>
          </div>
          <p align="justify">
            {" "}
            Say goodbye to the hassles and headaches of managing your vacation
            property. We provide flexible, no-commitment Vacation Home
            Management solutions, customized to fit your unique needs. From
            comprehensive to bookings-only services, enjoy competitive
            commission rates that put more money in your pocket.
          </p>

          <div className="leftImg">
            <FaCheckCircle />
            <h3>Effective Social Media Marketing</h3>
          </div>

          <p align="justify">
            Leverage the potential of social media to extend the reach of your
            vacation property. We skillfully utilize platforms like Facebook and
            Instagram to connect you with an audience that is eagerly looking
            for the next perfect vacation spot, ultimately driving organic
            traffic to your online listings.
          </p>
          <div className="leftImg">
            <FaCheckCircle />
            <h3>Build Your Vacation Rental Brand Online</h3>
          </div>

          <p align="justify">
            Don't be just another property on the list; be the one guests
            remember and return to. With our expertise in Vacation Home
            Management, we help you carve out a unique brand identity. From
            creating a personalized website to executing laser-focused online
            marketing strategies, we ensure you stand out in a crowded
            marketplace.
          </p>
        </div>
        <div className="right">
          <div>
            <img
              alt="image_1"
              src={require("../../assets/images/farmhouseHome.jpeg")}
              className="homeRightImg2"
            />
            <img
              alt="image_2"
              src={require("../../assets/images/farmhouseHouse2.jpeg")}
              className="homeRightImg"
            />
          </div>
        </div>
      </div>
      {/* <AnimatedCounters/> */}
      <div>
        <div class="contact_us_div">
          <div class="left_div">
            <p class="need_help_para">Get the latest Updates.</p>
            <p class="expert_para">
              Subscribe to our Newsletter and stay updated for the latest
              offers.
            </p>
          </div>
          <div class="right_div">
            <div className="newsletter_btn_container">
              <input
                type="text"
                className="newsletter_input"
                placeholder="Enter Your Email"
              />
              <button className="newsletter_btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <ChatBot
          handleEnd={handleEnd}
          headerTitle="Hostizzy AI Support"
          // speechSynthesis={{ enable: true, lang: 'en' }}
          steps={steps}
          floating={true}
          floatingIcon={<BsRobot color="#fff" size="20" />}
        />
      </ThemeProvider>
      {bookNow && <BookNowForm open={bookNow} handleClose={handleClose} />}
    </>
  );
};

export default Layout(Home);
