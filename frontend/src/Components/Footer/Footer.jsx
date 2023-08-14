import * as React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import "./Footer.css";
import Divider from "../Divider/Divider";
import TelegramButton from "../UI/TelegramButton";
import GitHubButton from "../UI/GitHubButton";
import AtButton from "../UI/AtButton";

const Footer = () => {
  return (
    <footer className="footer">
      <Divider />
      <Logo />
      <div className="footer_center">
        <TelegramButton></TelegramButton>
        <GitHubButton></GitHubButton>
        <AtButton></AtButton>
      </div>
      <div className="footer_right">
        <span>by Bouqinist Team</span>
      </div>
    </footer>
  );
};

export default Footer;
