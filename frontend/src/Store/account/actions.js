import { API_URL } from "../../Utils/Constants";
import AuthService from "../../Services/auth.service";
import { error } from "../selectors";

export const REGISTER_SUCCESS = "ACCOUNT::REGISTER_SUCCESS";
export const REGISTER_FAIL = "ACCOUNT::REGISTER_FAIL";

export const LOGIN_SUCCESS = "ACCOUNT::LOGIN_SUCCESS";
export const LOGIN_FAIL = "ACCOUNT::LOGIN_FAIL";
export const LOGOUT = "ACCOUNT::LOGOUT";

export const USER_DATA_SUCCESS = "ACCOUNT::USER_DATA_SUCCESS";
export const USER_DATA_REQUEST = "BOOKS::USER_DATA_REQUEST";
export const USER_DATA_ERROR = "BOOKS::USER_DATA_ERROR";

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

export const userDataRequest = () => ({
  type: USER_DATA_REQUEST,
});

export const userDataSuccess = (data) => {
  return {
    type: USER_DATA_SUCCESS,
    payload: data,
  };
};
export const userDataError = (error) => ({
  type: USER_DATA_ERROR,
  payload: error,
});

export const getUserData = () => (dispatch) => {
  dispatch(userDataRequest());
  AuthService.getUserData()
    .then((data) => {
      console.log(data);
      dispatch(userDataSuccess(data.user));
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        dispatch(userDataError(error.response.data.message));
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        dispatch(userDataError("Не удалось получить ответ от сервера."));
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        dispatch(userDataError(error.message));
      }
    });
};

export const setUserData = (values) => (dispatch) => {
  dispatch(userDataRequest());
  return AuthService.setUserData(values)
    .then((data) => {
      console.log(data);
      dispatch(userDataSuccess(data.data));
      return Promise.resolve();
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        dispatch(userDataError(error.response.data.message));
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        dispatch(userDataError("Не удалось получить ответ от сервера."));
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        dispatch(userDataError(error.message));
      }
      console.log(error);
      return Promise.reject();
    });
};
