import React from "react";
import "./CatalogCard.css";
import { Link } from "react-router-dom";
import { IconButton, SvgIcon } from "@mui/material";

const CatalogCard = ({ item }) => {
  return (
    <div className="ctl__card">
      <Link
        to={`/items/${item.id}`}
        style={{
          color: "inherit",
          textDecoration: "inherit",
        }}
      >
        <div className="ctl__card_img_wrap">
          <img src={item.image} alt="cover of the book" />
        </div>
        <div className="ctl__card_title">{item.title}</div>
      </Link>
      <div className="ctl__card_price_wrap">
        <div className="ctl__card_price">
          <span>&#8381;100 000.00</span>
        </div>
        <IconButton variant="favourite" color="secondary">
          <SvgIcon viewBox="-5 -2 24 24">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="BOOKMARK_SIMPLE">
                <path
                  id="Vector"
                  d="M13.5217 19L7.26087 15.087L1 19V1.78261C1 1.57505 1.08245 1.37599 1.22922 1.22922C1.37599 1.08245 1.57505 1 1.78261 1H12.7391C12.9467 1 13.1458 1.08245 13.2925 1.22922C13.4393 1.37599 13.5217 1.57505 13.5217 1.78261V19Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </SvgIcon>
        </IconButton>
      </div>
      {/* <div className="ctl__card_cart">
        <img src="/img/cart2.svg" alt="cart_ctl" />
      </div> */}
      <IconButton variant="buy" color="secondary">
        <SvgIcon viewBox="0 -2 29 29">
          <svg
            width="29"
            height="26"
            viewBox="0 0 29 26"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 24C10.75 24.4142 10.4142 24.75 10 24.75C9.58579 24.75 9.25 24.4142 9.25 24C9.25 23.5858 9.58579 23.25 10 23.25C10.4142 23.25 10.75 23.5858 10.75 24Z"
              fill="#3D3C3C"
              stroke-width="2"
            />
            <path
              d="M23.75 24C23.75 24.4142 23.4142 24.75 23 24.75C22.5858 24.75 22.25 24.4142 22.25 24C22.25 23.5858 22.5858 23.25 23 23.25C23.4142 23.25 23.75 23.5858 23.75 24Z"
              fill="#3D3C3C"
              stroke-width="2"
            />
            <path
              d="M5.2875 6H27.7125L24.4125 17.55C24.2948 17.9692 24.0426 18.3381 23.6948 18.6001C23.3471 18.862 22.9229 19.0025 22.4875 19H10.5125C10.0771 19.0025 9.65293 18.862 9.30515 18.6001C8.95738 18.3381 8.70524 17.9692 8.5875 17.55L4.0625 1.725C4.0027 1.51594 3.8764 1.33207 3.70271 1.20125C3.52903 1.07042 3.31744 0.999771 3.1 1H1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </SvgIcon>
      </IconButton>
    </div>
  );
};

export default CatalogCard;
