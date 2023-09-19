import { API_URL } from "../../Utils/Constants";
import AuthService from "../../Services/auth.service";
import { error } from "../selectors";

export const REGISTER_SUCCESS = "ACCOUNT::REGISTER_SUCCESS";
export const REGISTER_FAIL = "ACCOUNT::REGISTER_FAIL";

export const LOGIN_SUCCESS = "ACCOUNT::LOGIN_SUCCESS";
export const LOGIN_FAIL = "ACCOUNT::LOGIN_FAIL";
export const LOGOUT = "ACCOUNT::LOGOUT";

export const SET_MESSAGE = "ACCOUNT::SET_MESSAGE";
export const CLEAR_MESSAGE = "ACCOUNT::CLEAR_MESSAGE";

export const OPEN_MODAL = "ACCOUNT::OPEN_MODAL";
export const CLOSE_MODAL = "ACCOUNT::CLOSE_MODAL";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const register = (values) => (dispatch) => {
  return AuthService.register(values).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: response.message,
      // });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.user },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const verificate = (email, otp) => (dispatch) => {
  return AuthService.verificate(email, otp).then(
    (data) => {
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
