import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Logo from "../Logo/Logo";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import "./Header.css";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="lg">
      <header className="header">
        <Logo />
        <HeaderNavigation />
      </header>
    </Container>
  );
};

export default Header;
