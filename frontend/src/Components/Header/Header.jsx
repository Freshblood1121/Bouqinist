import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Logo from "../UI/Logo/Logo";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import "./Header.css";
import { Container, Link } from "@mui/material";
import SimpleButton from "../UI/Buttons/SimpleButton";
import { palette } from "../../Utils/Constants";
import { openModal } from "../../Store/account/actions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const isLoggedIn = useSelector((store) => store.account.isLoggedIn);

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/create");
    } else {
      dispatch(openModal());
    }
  };

  return (
    <Container maxWidth="lg">
      <header className="header">
        <Logo />
        <SimpleButton
          text="Разместить объявление"
          backgroundColor={palette.gray500}
          hoverBackgroundColor={palette.basic}
          height={"32px"}
          width={"200px"}
          handleClick={handleClick}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        />
        <HeaderNavigation />
      </header>
    </Container>
  );
};

export default Header;
