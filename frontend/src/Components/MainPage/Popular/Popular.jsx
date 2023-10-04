import React, { useRef, useState } from "react";
import "./Popular.css";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import image1 from "../../../img/popular/cb1_1.jpg";
import image2 from "../../../img/popular/cb1_2.jpg";
import image3 from "../../../img/popular/cb1_3.jpg";
import image4 from "../../../img/popular/cb1_4.jpg";
import image5 from "../../../img/popular/cb1_5.jpg";

const Popular = () => {
  const swiperRef = useRef();

  const popularItems = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
    { img: image5 },
  ];

  const ref = useRef();

  return (
    <div className="popular">
      <h2 className="popular_h2">ПОПУЛЯРНЫЕ КНИГИ</h2>
      <div className="popular-cards">
        <Splide
          className="popular-slider"
          ref={ref}
          tag="section"
          aria-label="Popular"
          hasTrack={false}
          options={{
            arrows: false,
            pagination: false,
            perPage: 4,
            focus: 0,
            omitEnd: true,
            gap: 30,
            breakpoints: {
              460: {
                gap: 10,
                perPage: 1,
              },
              600: {
                gap: 10,
                perPage: 1,
              },
              900: {
                gap: 10,
                perPage: 2,
              },
              1200: {
                gap: 10,
                perPage: 3,
              },
            },
          }}
        >
          <SplideTrack>
            {popularItems.map((item, index) => (
              <SplideSlide key={index}>
                <div className="popular_card">
                  <img
                    className="popular_cover"
                    src={`${item.img}`}
                    alt={`cover_book${index}`}
                  />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows"></div>
        </Splide>
        <button
          className="popular-slider__arrow popular-slider__arrow--prev"
          onClick={() => ref.current.splide.go("<")}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="CARET_LEFT">
              <path
                id="Vector"
                d="M20 26L10 16L20 6"
                stroke="#3D3C3C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        <button
          className="popular-slider__arrow popular-slider__arrow--next"
          onClick={() => ref.current.splide.go(">")}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="CARET_RIGHT">
              <path
                id="Vector"
                d="M12 6L22 16L12 26"
                stroke="#3D3C3C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Popular;
