import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./index.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { movieImages } from "./movie-images";

const MovieSlide = ({ slideData }) => {
  return (
    <>
      <h2>(2) Swiper 영화 슬라이드</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3.5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slideData.map((movieItem, i) => {
          return (
            <SwiperSlide key={movieItem.id} className="SwiperSlide">
              <img src={movieImages(i + 1)} width="90%" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MovieSlide;
