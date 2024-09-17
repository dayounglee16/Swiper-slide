import SlideItem from "./components/SlideItem";
import "./index.css";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SlideList = ({ slideData }) => {
  return (
    <SlideListWrap className="SlideListWrap">
      <h2>(1) Swiper 기본옵션</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={15}
        slidesPerView="4.5"
        autoplay={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slideData.map((slideItem) => {
          return (
            <SwiperSlide className="swiper-slide" key={slideItem.id}>
              <SlideItem />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SlideListWrap>
  );
};

export default SlideList;

const SlideListWrap = styled.div`
  .swiper-slide {
    display: flex;
    gap: 10px;
  }
`;
