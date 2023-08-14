import React, { useRef, useState } from "react";
import "./Popular.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const Popular = () => {
  const swiperRef = useRef();

  return (
    <div className="popular">
      <h2 className="popular_h2">ПОПУЛЯРНЫЕ КНИГИ</h2>
      <div className="popular-cards">
        {/* <img className="popular_ar" src="./img/caret_left.svg" alt="left" /> */}

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="popular_card">
              <img
                className="popular_cover"
                src="./img/popular/cb1_1.jpg"
                alt="cover_book1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="popular_card">
              <img
                className="popular_cover"
                src="./img/popular/cb1_2.jpg"
                alt="cover_book2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="popular_card">
              <img
                className="popular_cover"
                src="./img/popular/cb1_3.jpg"
                alt="cover_book3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="popular_card">
              <img
                className="popular_cover"
                src="./img/popular/cb1_4.jpg"
                alt="cover_book4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="popular_card">
              <img
                className="popular_cover"
                src="./img/popular/cb1_5.jpg"
                alt="cover_book4"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="popular-cards__slide-prev"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <img src="./img/caret_left.svg" alt="Previus slide" />
        </button>
        <button
          className="popular-cards__slide-next"
          onClick={() => swiperRef.current.slideNext()}
        >
          <img src="./img/caret_right.svg" alt="Next slide" />
        </button>
        {/* <img className="popular_ar" src="./img/caret_right.svg" alt="right" /> */}
      </div>
    </div>
  );
};

export default Popular;
