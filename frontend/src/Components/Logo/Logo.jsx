import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      style={{
        color: "inherit",
        textDecoration: "inherit",
      }}
    >
      <div className="header__logo">
        <img
          className="header__bookopen_img"
          src="../img/book_open.svg"
          alt="BookOpen"
        />
        <span className="header__logo_text">BOUQINIST</span>
      </div>
    </Link>
  );
};

export default Logo;
