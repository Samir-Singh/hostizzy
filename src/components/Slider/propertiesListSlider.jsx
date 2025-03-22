import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slider.css";
import GalleryModal from "../GalleryModal/GalleryModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdPhotos } from "react-icons/io";
import Skeleton from "@mui/material/Skeleton";
const images = [
  {
    id: 1,
    url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-52717816/original/66c37612-fc35-4ba1-945f-18f1563ff879.jpeg",
  },
  {
    id: 2,
    url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-780786876631355897/original/d27bf7f1-6245-4141-a2ef-c18c7dc18f03.jpeg",
  },
  {
    id: 3,
    url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/e899abe4-9503-4527-be74-f31aced46e8a.jpeg",
  },
  {
    id: 4,
    url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-54008169/original/cb5f832e-453a-4101-9aea-e6e63929a640.jpeg",
  },
  {
    id: 5,
    url:
      "https://a0.muscache.com/im/pictures/7038119b-91a3-4c7d-b6ce-44ac2ba6a2d9.jpg",
  },
  {
    id: 6,
    url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-52717816/original/66c37612-fc35-4ba1-945f-18f1563ff879.jpeg",
  },
  {
    id: 7,
    url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-780786876631355897/original/d27bf7f1-6245-4141-a2ef-c18c7dc18f03.jpeg",
  },
  {
    id: 8,
    url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-45942402/original/e899abe4-9503-4527-be74-f31aced46e8a.jpeg",
  },
  {
    id: 9,
    url:
      "https://a0.muscache.com/im/pictures/miso/Hosting-54008169/original/cb5f832e-453a-4101-9aea-e6e63929a640.jpeg",
  },
  {
    id: 10,
    url:
      "https://a0.muscache.com/im/pictures/7038119b-91a3-4c7d-b6ce-44ac2ba6a2d9.jpg",
  },
];

const PropertiesListSlider = ({ data, setShow, cover, loading }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [show, setShow] = useState(false)
  const [AllPhotos, setAllPhotos] = useState(null);

  useEffect(() => {
    const combined = data?.reduce((acc, item) => {
      return acc.concat(item.images);
    }, []);

    setAllPhotos(combined);
  }, [data]);

  return (
    <>
      <div className="propertySliderContainer">
        {!loading ? (
          <>
            <div className="propertySliderFirst">
              <div className="propertySliderFirstImg">
                <LazyLoadImage
                  effect="blur"
                  height={"100%"}
                  src={Array.isArray(AllPhotos) && AllPhotos[0]}
                  width={"100%"}
                />
              </div>
              <div className="propertySliderFirstImg">
                <LazyLoadImage
                  effect="blur"
                  height={"100%"}
                  src={Array.isArray(AllPhotos) && AllPhotos[1]}
                  width={"100%"}
                />
              </div>
            </div>
            <div className="propertySliderLeft">
              <div className="midPhotoContainer">
                <LazyLoadImage
                  effect="blur"
                  height={"100%"}
                  src={cover}
                  width={"100%"}
                />
              </div>
            </div>
            <div className="propertySliderRight">
              <div className="propertySliderRightImg">
                <div className="propertySliderFirstImg">
                  <LazyLoadImage
                    effect="blur"
                    height={"100%"}
                    src={Array.isArray(AllPhotos) && AllPhotos[3]}
                    width={"100%"}
                  />
                </div>
                <div className="propertySliderFirstImg">
                  <LazyLoadImage
                    effect="blur"
                    height={"100%"}
                    src={Array.isArray(AllPhotos) && AllPhotos[4]}
                    width={"100%"}
                    threshold={100}
                  />
                </div>
              </div>
              <div onClick={() => setShow(true)} className="seeAllPhotos">
                <IoMdPhotos /> <p>See all Photos</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="propertySliderFirst">
              <div className="propertySliderFirstImg">
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="propertySliderFirstImg">
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="propertySliderLeft">
              <div className="midPhotoContainer">
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="propertySliderRight">
              <div className="propertySliderRightImg">
                <div className="propertySliderFirstImg">
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="propertySliderFirstImg">
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PropertiesListSlider;

{
  /* <div className="propertySliderContainer">
<div className="propertySliderLeft">
<img loading="lazy" src="https://a0.muscache.com/im/pictures/miso/Hosting-920074452618023826/original/7c327360-0de3-4a6b-b2d8-88aa72849706.jpeg?im_w=1200"/>

</div>
<div className="propertySliderRight">
<img loading="lazy" src="https://a0.muscache.com/im/pictures/miso/Hosting-920074452618023826/original/7c327360-0de3-4a6b-b2d8-88aa72849706.jpeg?im_w=1200"/>
<img loading="lazy" src="https://a0.muscache.com/im/pictures/miso/Hosting-920074452618023826/original/ee5f2ddb-4b94-4bea-8ccc-dea25d74b1f3.jpeg?im_w=720"/>
<img loading="lazy" src="https://a0.muscache.com/im/pictures/miso/Hosting-920074452618023826/original/e0a46534-7e9e-4c24-b881-8d9be0277c23.jpeg?im_w=720"/>
<img loading="lazy" src="https://a0.muscache.com/im/pictures/miso/Hosting-920074452618023826/original/56355c98-6158-4848-95fa-a1c63a3b4afe.jpeg?im_w=720"/>
</div>

    </div> */
}
