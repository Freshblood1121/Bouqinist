import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="header__nav nav">
      <li className="header__nav-item">
        <img className="nav__user_img" src="/img/user1.svg" alt="user" />
      </li>
      <li className="header__nav-item">
        <img
          className="nav__bookopen_img"
          src="/img/book_mark.svg"
          alt="BookMark"
        />
      </li>
      <li className="header__nav-item">
        <img className="nav__cart_img" src="/img/cart1.svg" alt="Cart" />
      </li>
    </div>
  );
};

export default Navigation;
