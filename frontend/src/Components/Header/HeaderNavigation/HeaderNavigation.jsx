import React from "react";
import "./HeaderNavigation.css";
import Fav from "../../UI/Account";
import Favourite from "../../UI/Favourite";
import Account from "../../UI/Account";
import Cart from "../../UI/Cart";

const HeaderNavigation = () => {
  return (
    <div className="header__nav nav">
      <li className="header__nav-item">
        {/* <img className="nav__user_img" src="/img/user1.svg" alt="user" /> */}
        <Account />
      </li>
      <li className="header__nav-item">
        {/* <img
          className="nav__bookopen_img"
          src="/img/book_mark.svg"
          alt="BookMark"
        /> */}
        <Favourite />
      </li>
      <li className="header__nav-item">
        {/* <img className="nav__cart_img" src="/img/cart1.svg" alt="Cart" /> */}
        <Cart />
      </li>
    </div>
  );
};

export default HeaderNavigation;
