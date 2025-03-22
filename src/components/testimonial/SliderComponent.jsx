import React, { useRef } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
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

const TestimonialSlider = () => {
  const arrowRef = useRef(null);

  let TestimonialArray=[
{
    id:1,
    text:"...Kunzo is very helpful and generous. The local food she cooked for dinner was amazing. The room is comfortable and the blanket is really warm.",
    avatar:"https://a0.muscache.com/im/pictures/user/8296bfac-b207-412c-a21f-9aa8edaea46d.jpg?im_w=240",
    name:"Pleng",
    time:"March 2023"
},
{
    id:2,
    text:"“...The stay was comfortable the food was good and the hosts were very warm. highly recommended when you visit Lachung.”",
    avatar:"https://a0.muscache.com/im/pictures/user/5e255285-413d-4115-9ef3-69f162b94a27.jpg?im_w=240",
    name:"Snigdha",
    time:"May 2022"
},
{
    id:3,
    text:"“...Host is very friendly and makes you feel home. It would be injustice to the nature if I tell you how great the location of homestay is.”",
    avatar:"https://a0.muscache.com/im/pictures/user/a5ded4f5-03da-401e-8838-4715600aab0e.jpg?im_w=240",
    name:"Ravi",
    time:"April 2022"
},
{
    id:4,
    text:"“...Kunzo is very warm and welcoming and makes you feel at home instantly. Herself and Dorjee place a great emphasis on this being a “home” and not just a homestay.”",
    avatar:"https://a0.muscache.com/im/pictures/user/ea0ebc20-50db-4fc5-b88a-6f1bce4aaf9b.jpg?im_w=240",
    name:"Venkatesan",
    time:"April 2022"
},
{
    id:5,
    text:"“...thank you Kunzo and Dorjee for making our short stay very sweet... food was amazing and your hospitality will be remembered.”",
    avatar:"https://a0.muscache.com/im/pictures/user/a5ded4f5-03da-401e-8838-4715600aab0e.jpg?im_w=240",
    name:"Rupande",
    time:"January 2022"
},
{
    id:6,
    text:"“...Pleasant and amazing experience.Superbly designed property and amazing host“",
    avatar:"https://a0.muscache.com/im/pictures/user/8184ca76-5bee-42d7-a472-60abae845821.jpg?im_w=240",
    name:"Anoosh",
    time:"October 2022"
},
{
    id:7,
    text:"“It was a great place, exactly like images, EXTREMELY BEAUTIFUL,  We had a lovely time! :) ✨❤ Highly recommended“",
    avatar:"https://a0.muscache.com/im/pictures/user/87bd980b-f6dd-459d-9a53-60690895a5f1.jpg?im_w=240",
    name:"Mugdha",
    time:"July 2023"
}
  ]
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

export default TestimonialSlider;

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