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
import { swiperData } from './../../utils/data';
import { useWindowInner } from "../../hooks/useWindowInner";

export default function SecondSwiper() {
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
       {swiperData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="antique" className="secondSwiper-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
