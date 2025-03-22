import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const settings = {
  className: "slick-custom-style",
  dots: false,
  infinite: true,
  speed: 2000,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  lazyLoad: true,
  arrows: true,
  dots: true,
  autoplay: true,
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

const PropertySlider = ({ data }) => {
  const [AllPhotos, setAllPhotos] = useState(null);

  useEffect(() => {
    const combined = data?.reduce((acc, item) => {
      return acc.concat(item.images);
    }, []);

    setAllPhotos(combined);
  }, [data]);

  return (
    <Container>
      <Slider {...settings}>
        {AllPhotos?.map((item) => (
          <div style={{ width: "98%" }} className="home-slider-image-main">
            <img src={item} className="home-slider-image" />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default PropertySlider;
