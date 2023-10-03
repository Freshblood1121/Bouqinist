import * as React from "react";
import Logo from "../UI/Logo/Logo";
import "./Footer.css";
import Divider from "../Divider/Divider";
import TelegramButton from "../UI/Buttons/TelegramButton";
import GitHubButton from "../UI/Buttons/GitHubButton";
import AtButton from "../UI/Buttons/AtButton";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <Divider />
      <div
        className="footer-content"
        // style={{ display: "flex", justifyContent: "center" }}
      >
        <Logo />
        <div className="footer_center">
          <TelegramButton></TelegramButton>
          <GitHubButton></GitHubButton>
          <AtButton></AtButton>
        </div>
        <div className="footer_right">
          {/* <span>by Bouqinist Team</span> */}
          <Typography variant="subtitle1">by Bouqinist Team</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
