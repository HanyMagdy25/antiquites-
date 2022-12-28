import React from "react";
import "./SecondSwiper.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { useWindowInner } from "../../hooks/useWindowInner";
const url_main = "https://dashboard.mahmoud-antiquites.com/";
export default function SecondSwiper({reviews}) {
  const { isMobile } = useWindowInner();
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={60}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={`${url_main}/public/uploads/reviews/${item.photo}`} alt="antique" className="secondSwiper-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
