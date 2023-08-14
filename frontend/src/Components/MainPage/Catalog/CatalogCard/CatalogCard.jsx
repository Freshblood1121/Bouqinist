import React from "react";
import "./CatalogCard.css";
import { Link } from "react-router-dom";
import { Button, IconButton, SvgIcon } from "@mui/material";
import CartButton from "../../../UI/CartButton";
import FavourButton from "../../../UI/FavourButton";

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
        <FavourButton></FavourButton>
      </div>
      <CartButton></CartButton>
    </div>
  );
};

export default CatalogCard;
