import React, { useRef } from "react";
import CatalogCard from "../CatalogCard/CatalogCard";
import "./CatalogSection.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const CatalogSection = ({ books, category }) => {
  const ref = useRef();

  return (
    <div className="ctl__categ">
      <div className="ctl__categ_title">
        <img src="./img/path.svg" alt="path" />
        <span>{category}</span>
      </div>
      <div className="ctl__cards">
        <Splide
          className="ctl-slider"
          ref={ref}
          tag="section"
          aria-label="Catalog"
          hasTrack={false}
          options={{
            pagination: false,
            arrows: false,
            perPage: 5,
            focus: 0,
            omitEnd: true,
            gap: 30,
            padding: "2%",
            breakpoints: {
              460: {
                padding: "20%",
                gap: 10,
                perPage: 1,
              },
              700: {
                padding: "0",
                gap: 10,
                perPage: 2,
              },
              900: {
                padding: "0",
                gap: 10,
                perPage: 3,
              },
              1200: {
                padding: "0",
                gap: 10,
                perPage: 4,
              },
            },
          }}
        >
          <SplideTrack>
            {books.map((book, index) => (
              // <SplideSlide key={book.id}> - После добавления уникальных id поменять значение key на book.id
              <SplideSlide key={index}>
                <CatalogCard item={book} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <button
            className="ctl-slider__arrow ctl-slider__arrow--prev"
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
            className="ctl-slider__arrow ctl-slider__arrow--next"
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
        </Splide>
      </div>
    </div>
  );
};

export default CatalogSection;
