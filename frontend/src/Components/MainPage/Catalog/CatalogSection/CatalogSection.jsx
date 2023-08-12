import React from "react";
import CatalogCard from "../CatalogCard/CatalogCard";
import "./CatalogSection.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

const CatalogSection = ({ books }) => {
  return (
    <div className="ctl__categ">
      <div className="ctl__categ_title">
        <img src="./img/path.svg" alt="path" />
        <span>Художественные</span>
      </div>
      <div className="ctl__cards">
        <Splide
          tag="section"
          aria-label="Catalog"
          hasTrack={false}
          options={{
            pagination: "false",
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
                padding: "1%",
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
            {books.map((book) => (
              <SplideSlide key={book.id}>
                <CatalogCard item={book} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
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
            <button className="splide__arrow splide__arrow--next">
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
        </Splide>
      </div>
    </div>
  );
};

export default CatalogSection;
