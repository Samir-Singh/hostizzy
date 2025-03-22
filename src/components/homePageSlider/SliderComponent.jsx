import React, { useRef } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const settings = {
  className: "slick-custom-style",
  // centerMode: true,
  dots:false,
  infinite: true,
  speed: 2000,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  lazyLoad: true,
  arrows: false,
  dots:true,
  autoplay:true,
  // autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
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

const HomePageSlider = () => {
  const arrowRef = useRef(null);

  let TestimonialArray= [
    {
      id: 20,
      avatar: "https://a0.muscache.com/im/pictures/684a1487-e3dc-4e30-b9b8-02807fd9bd7c.jpg?im_w=1440",
    },
    {
      id: 1,
      avatar: require("../../assets/images/img1.webp"),
    },
    {
      id: 34,
      avatar: "https://a0.muscache.com/im/pictures/41178a43-5db6-4dbc-8c2f-67fcfa9db0b8.jpg?im_w=1440",
    },
    // {
    //   id: 3,
    //   avatar: require("../../assets/images/img3.webp"),
    //   backgroundPosition: 'cover',
    // },
    {
      id: 4,
      avatar: "https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/e1421d8d-e7bc-4503-a0b3-d62430f833f7.jpeg?im_w=1440",
    },
    {
      id: 5,
      avatar: require("../../assets/images/img5.webp"),
    },
    {
      id: 6,
      avatar:"https://a0.muscache.com/im/pictures/a5e25895-3b95-4731-9abb-801454ecc764.jpg?im_w=1440",
    },
    {
      id: 2,
      avatar: require("../../assets/images/img2.webp"),
    },
    // {
    //   id: 7,
    //   avatar: require("../../assets/images/img7.webp"),
    // },
    {
      id: 8,
      avatar:require("../../assets/images/img8.webp"),
    },
    {
      id: 9,
      avatar: require("../../assets/images/img9.webp"),
    },
    // {
    //   id: 10,
    //   avatar: require("../../assets/images/img10.webp"),
    // },
    // {
    //   id: 11,
    //   avatar:require("../../assets/images/img11.webp"),
    // },
    // {
    //   id: 12,
    //   avatar: require("../../assets/images/img12.webp"),
    // },
    // {
    //   id: 13,
    //   avatar: "https://a0.muscache.com/im/pictures/miso/Hosting-889832614763578419/original/411e2f89-d93e-4de8-9fa3-a2ad4eb019cb.jpeg?im_w=1440",
    // }
    
  ];
  let sliderProject = "";
  sliderProject = TestimonialArray?.map((item, i) => <TestimonialCard data={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      {/* <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons> */}
    </Container>
  );
};

export default HomePageSlider;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;