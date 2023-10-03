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
      <div className="logo">
        <img className="logo__img" src="/img/book_open.svg" alt="BookOpen" />
        <span className="logo__text">BOUQINIST</span>
      </div>
    </Link>
  );
};

export default Logo;
