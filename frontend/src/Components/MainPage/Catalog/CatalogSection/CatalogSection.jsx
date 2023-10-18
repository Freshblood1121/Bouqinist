import React, { useEffect, useRef, useState } from "react";
import CatalogCard from "../CatalogCard/CatalogCard";
import "./CatalogSection.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { useDispatch, useSelector } from "react-redux";
import { getBooksDataByCategory } from "../../../../Store/books/actions";
import { REQUEST_STATUS } from "../../../../Utils/Constants";
import AuthService from "../../../../Services/auth.service";
import pathImg from "../../../../img/path.svg";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

const CatalogSection = ({ category }) => {
  const ref = useRef();

  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.PENDING);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setRequestStatus(REQUEST_STATUS.PENDING);
    AuthService.getBooksDataByCategory(category.id).then(
      (data) => {
        setBooks([...data]);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
      },
      (error) => {
        console.log("error: ", error);
      }
    );
  }, []);

  const [isSplideMounted, setIsSplideMounted] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsSplideMounted(true);
    }
  });

  return (
    <>
      {requestStatus === REQUEST_STATUS.PENDING && (
        <Skeleton variant="rounded" width={"100%"} height={480} />
      )}
      {requestStatus === REQUEST_STATUS.SUCCESS && (
        <div className="ctl__categ">
          <div className="ctl__categ_title">
            <img
              // src="./img/path.svg"
              src={pathImg}
              alt="path"
            />
            <Link to={`/categories/${category.id}`}>{category.title}</Link>
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
                perPage: books.length < 5 ? null : 5,
                autoWidth: books.length < 5 ? true : false,
                focus: 0,
                omitEnd: true,
                gap: 30,
                padding: "2%",
                breakpoints: {
                  460: {
                    padding: "20%",
                    gap: 10,
                    perPage: books.length < 1 ? null : 1,
                    autoWidth: books.length < 1 ? true : false,
                  },
                  700: {
                    padding: "0",
                    gap: 10,
                    perPage: books.length < 2 ? null : 2,
                    autoWidth: books.length < 2 ? true : false,
                  },
                  900: {
                    padding: "0",
                    gap: 10,
                    perPage: books.length < 3 ? null : 3,
                    autoWidth: books.length < 3 ? true : false,
                  },
                  1200: {
                    padding: "0",
                    gap: 10,
                    perPage: books.length < 4 ? null : 4,
                    autoWidth: books.length < 4 ? true : false,
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
              {isSplideMounted
                ? !ref.current.splide.options.autoWidth && (
                    <>
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
                    </>
                  )
                : null}
            </Splide>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogSection;
