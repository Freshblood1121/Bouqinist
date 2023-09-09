import React, { useState } from "react";
import "./HeaderNavigation.css";
import Fav from "../../UI/Icons/Account";
import Favourite from "../../UI/Icons/Favourite";
import Account from "../../UI/Icons/Account";
import Cart from "../../UI/Icons/Cart";
import { Box, Modal, Typography } from "@mui/material";
import Logo from "../../UI/Logo/Logo";
import BaseButton from "../../UI/Buttons/BaseButton";
import EmailInput from "../../UI/Inputs/EmailInput";
import SearchIconComponent from "../../UI/Icons/SearchIconComponent";
import PasswordInput from "../../UI/Inputs/PasswordInput";
import { Link } from "react-router-dom";

const HeaderNavigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    pt: 7,
    outline: 0,
    borderRadius: "20px",
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="header__nav nav">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style}>
          <Logo />
          <EmailInput />
          <PasswordInput />
          <BaseButton text={"Войти"} />
          <Typography
            id="modal-modal-description"
            variant="h4"
            sx={{ marginTop: "55px" }}
          >
            <Link to="/signup">Создать учетную запись</Link>
          </Typography>
        </Box>
      </Modal>
      <li className="header__nav-item" onClick={handleOpen}>
        <Account />
      </li>
      <li className="header__nav-item">
        <Favourite />
      </li>
      <li className="header__nav-item">
        <Cart />
      </li>
    </div>
  );
};

export default HeaderNavigation;
