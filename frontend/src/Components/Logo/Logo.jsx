import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="header__logo">
      <img
        className="header__bookopen_img"
        src="../img/book_open.svg"
        alt="BookOpen"
      />
      <span className="header__logo_text">BOUQINIST</span>
    </div>
  );
};

export default Logo;
