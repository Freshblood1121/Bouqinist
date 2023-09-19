import React, { forwardRef, useRef, useState } from "react";
import "./HeaderNavigation.css";
import Favourite from "../../UI/Icons/Favourite";
import Account from "../../UI/Icons/Account";
import Cart from "../../UI/Icons/Cart";
import Login from "../../Login/Login";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessage,
  closeModal,
  openModal,
} from "../../../Store/account/actions";
import LoggedInButton from "../../UI/Buttons/LoggedInButton";
import { useNavigate } from "react-router-dom";

const HeaderNavigation = () => {
  const dispatch = useDispatch();
  // const [isModalOpened, setModalOpened] = useState(false);
  // console.log(isModalOpened);
  const modalIsOpened = useSelector((store) => store.account.modalIsOpened);
  const user = useSelector((store) => store.account.user);
  const isLoggedIn = useSelector((store) => store.account.isLoggedIn);

  const handleOpenModal = () => {
    dispatch(clearMessage());
    dispatch(openModal());
    // setModalOpened(true);
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(clearMessage());
    // setModalOpened(false);
  };
  const ref = useRef(null);

  // Настройки меню аккаунта
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className="header__nav nav">
      {!isLoggedIn && (
        <Modal
          open={modalIsOpened}
          // open={isModalOpened}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modal"
        >
          <>
            <Login ref={ref} />
          </>
        </Modal>
      )}
      {isLoggedIn ? (
        <li className="header__nav-item">
          <LoggedInButton name={user.first_name} />
        </li>
      ) : (
        <li className="header__nav-item" onClick={handleOpenModal}>
          <Account />
        </li>
      )}
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
