import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";

const partners = [
  {
    url: "https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",
  },
  { url: "https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo-768x432.png" },
  {
    url: "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png",
  },
  { url: "https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo-768x432.png" },
  {
    url: "https://lh3.googleusercontent.com/3azdOwzwVpbQ19g__b5F_-bqsM8cW2kzKTqq27p3EC6JOF-99cC8O9qaYojNHpi7XpVYnCKf5McyGoYa1iMdtIEuhvkVjqb7fkoF",
  },
  {
    url: "https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",
  },
  { url: "https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo-768x432.png" },
  {
    url: "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png",
  },
  { url: "https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo-768x432.png" },
  {
    url: "https://lh3.googleusercontent.com/3azdOwzwVpbQ19g__b5F_-bqsM8cW2kzKTqq27p3EC6JOF-99cC8O9qaYojNHpi7XpVYnCKf5McyGoYa1iMdtIEuhvkVjqb7fkoF",
  },
  {
    url:"https://www.agoda.com/wp-content/themes/agoda-travel-guides/dist/images/agoda-logo_688a8f9e.svg"
  }
];

const PartnerSlider = () => {
  return (
    <Swiper

      effect={"coverflow"}
      spaceBetween={5}
      keyboard={{
        enabled: true,
      }}
      scrollbar={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        400: {
          slidesPerView: 2,
        },
        639: {
          slidesPerView: 3,
        },
        865: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      //   stopOnLastSlide={false}
      modules={[Keyboard, Autoplay, Pagination, Navigation]}
    >
      {partners.map((i, index) => (
        <SwiperSlide key={index}
        >
          <Box
          className="partner_image_slider"
            component={"img"}
            src={i.url}
            width={147.5}
            alt="partner"
            sx={{ ml: 0 }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnerSlider;
