import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Logo from "../Logo/Logo";
import "./Footer.css";
import Divider from "../Divider/Divider";

const Footer = () => {
  return (
    <footer className="footer">
      <Divider />
      <Logo />
      <div className="footer_center">
        <div className="footer_social1">
          <img
            className="footer_social1_img"
            src="/img/telegram.svg"
            alt="telegram"
          />
        </div>
        <div className="footer_social2">
          <img className="footer_social2_img" src="/img/git.svg" alt="git" />
        </div>
        <div className="footer_social3">
          <img
            className="footer_social3_img"
            src="/img/email.svg"
            alt="email"
          />
        </div>
      </div>
      <div className="footer_right">
        <span>by Bouqinist Team</span>
      </div>
    </footer>
  );
};

export default Footer;
