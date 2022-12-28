import React from "react";
// Import Swiper React components
import "./FirstSwiper.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useWindowInner } from "../../hooks/useWindowInner";
const url_main = "https://dashboard.mahmoud-antiquites.com/";
export default function FirstSwiper({photos}) {
  const { isMobile } = useWindowInner();
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={60}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {photos.map((item,index) => (
          <SwiperSlide key={index}>
            <img src={`${url_main}/public/uploads/photos/${item.photo}`} alt="antique" className="firstSwiper-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
