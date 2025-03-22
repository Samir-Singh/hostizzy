import React from "react";
import "./ServicesSection.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Slider from "react-slick";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    srcSet: `${image}`,
  };
}

const settings = {
  className: "slick-custom-style",
  dots: false,
  infinite: true,
  speed: 1000,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  lazyLoad: true,
  arrows: false,
  dots: false,
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

const ServicesSection = () => {
  const itemData = [
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1051782142192685313/original/7e7dbf83-3e94-4b38-8610-a0382a700ecc.jpeg?im_w=1200",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-45212083/original/15c6ddec-a714-437c-907d-6c165e42f529.jpeg?im_w=720",
      title: "Burger",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1044054374977823464/original/349e752b-53e9-4936-a562-fe2f93a458cd.jpeg?im_w=1200",
      title: "Camera",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-808349919223795696/original/f166a5d4-a795-4822-878d-461ef00a24c9.jpeg?im_w=720",
      title: "Coffee",
      cols: 2,
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-45169742/original/2aac3438-4520-40ae-8a3e-fbef930e056c.jpeg?im_w=1200",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-978193363081128894/original/a56cb200-cb58-4506-9665-f79dfaf254ea.jpeg?im_w=1200",
      title: "Basketball",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-865617897476742315/original/6ce90c1d-303a-417d-9655-5657b21b860e.jpeg?im_w=1200",
      title: "Fern",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-865617897476742315/original/b339f872-1c25-463c-8eed-efc441ca45e3.jpeg?im_w=1200",
      title: "Mushrooms",
      rows: 2,
      cols: 2,
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/46f94310-3b3d-420e-b4d7-7be15165b963.jpg?im_w=1200",
      title: "Tomato basil",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-780786876631355897/original/51db71eb-0944-44e7-8df7-7ff87ebd46ce.jpeg?im_w=1200",
      title: "Sea star",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/45ba69b1-deaa-4f29-9ff5-8fa422bc8c68.jpg?im_w=1200",
      title: "Sea star",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/miso/Hosting-901929285356530863/original/57ed9334-1eee-434d-af86-9da2f32980f4.jpeg?im_w=1200",
      title: "Sea star",
    },
  ];

  return (
    <Container>
      <Slider {...settings}>
        <div
          style={{
            width: "98%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "85%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {itemData?.splice(0, 6)?.map((item) => (
              <img
                src={item?.img}
                style={{
                  width: "32%",
                  height: "40vh",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            width: "98%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "85%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {itemData?.splice(0, 6)?.map((item) => (
              <img
                src={item?.img}
                style={{
                  width: "32%",
                  height: "40vh",
                  borderRadius: "8px",
                  marginBottom: "5px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </div>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default ServicesSection;
