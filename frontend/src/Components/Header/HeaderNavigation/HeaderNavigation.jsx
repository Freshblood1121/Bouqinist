import React, { Suspense, forwardRef, lazy, useRef, useState } from "react";
import "./HeaderNavigation.css";
import Favourite from "../../UI/Icons/Favourite";
import Account from "../../UI/Icons/Account";
import Cart from "../../UI/Icons/Cart";
import { CircularProgress, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessage,
  closeModal,
  openModal,
} from "../../../Store/account/actions";
import LoggedInButton from "../../UI/Buttons/LoggedInButton";
import { useNavigate } from "react-router-dom";

const Login = lazy(() => import("../../Login/Login"));

const HeaderNavigation = () => {
  const dispatch = useDispatch();
  const modalIsOpened = useSelector((store) => store.account.modalIsOpened);
  const user = useSelector((store) => store.account.user);
  const isLoggedIn = useSelector((store) => store.account.isLoggedIn);

  const handleOpenModal = () => {
    dispatch(clearMessage());
    dispatch(openModal());
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(clearMessage());
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
            <Suspense fallback={<CircularProgress />}>
              <Login ref={ref} />
            </Suspense>
          </>
        </Modal>
      )}
      {isLoggedIn ? (
        <li className="header__nav-item">
          <LoggedInButton
            name={user.first_name ? user.first_name[0] : ""}
            // name={"Artem"}
          />
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
