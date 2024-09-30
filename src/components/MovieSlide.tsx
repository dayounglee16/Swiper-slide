import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../index.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { movieImages } from "../movie-images";

interface MovieItem {
  id: number;
}

interface MovieSlideProps {
  slideData: MovieItem[];
}

const MovieSlide: React.FC<MovieSlideProps> = ({ slideData }) => {
  return (
    <>
      <h2>(2) Swiper 영화 슬라이드</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3.5}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slideData.map((movieItem: MovieItem) => {
          return (
            <SwiperSlide key={movieItem.id} className="SwiperSlide">
              <img
                src={movieImages(movieItem.id)}
                alt={`Movie ${movieItem.id}`}
                width="90%"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MovieSlide;
