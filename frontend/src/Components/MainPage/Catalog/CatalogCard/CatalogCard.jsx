import React from "react";
import "./CatalogCard.css";
import { Link } from "react-router-dom";
import { Button, IconButton, SvgIcon } from "@mui/material";
import CartButton from "../../../UI/Buttons/CartButton";
import FavourButton from "../../../UI/Buttons/FavourButton";

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
          <img src={`public/${item.image}`} alt="cover of the book" />
        </div>
        <div className="ctl__card_title">{item.title}</div>
      </Link>
      <div className="ctl__card_price_wrap">
        <div className="ctl__card_price">
          <span>
            &#8381;&nbsp;{Intl.NumberFormat("ru-RU").format(item.price)}
          </span>
        </div>
        <FavourButton></FavourButton>
      </div>
      <CartButton></CartButton>
    </div>
  );
};

export default CatalogCard;
