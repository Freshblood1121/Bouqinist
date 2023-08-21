import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import CartButton from "../../UI/CartButton";
import FavourButton from "../../UI/FavourButton";
import "./CategoryCard.css";

const CategoryCard = ({ item }) => {
  return (
    <div className="ctg__card">
      <Link
        to={`/items/${item.id}`}
        style={{
          color: "inherit",
          textDecoration: "inherit",
        }}
      >
        <div className="ctg__card_img_wrap">
          <img src={item.image} alt="cover of the book" />
        </div>
        <div className="ctg__card_title">{item.title}</div>
        <div className="ctg__card_author">{item.author}</div>
      </Link>
      <div className="ctg__card_price_wrap">
        <div className="ctg__card_price">
          <span>
            &#8381;&nbsp;{Intl.NumberFormat("ru-RU").format(item.price)}
          </span>
        </div>
        <FavourButton />
      </div>
      <CartButton />
    </div>
  );
};

export default CategoryCard;
