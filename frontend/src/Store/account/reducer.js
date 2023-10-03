import { REQUEST_STATUS } from "../../Utils/Constants";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  OPEN_MODAL,
  CLOSE_MODAL,
  USER_DATA_SUCCESS,
  USER_DATA_REQUEST,
  USER_DATA_ERROR,
} from "./actions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? {
      isLoggedIn: true,
      user,
      requestStatus: { status: REQUEST_STATUS.IDLE, message: "", error: "" },
      modalIsOpened: false,
    }
  : {
      isLoggedIn: false,
      user: null,
      requestStatus: { status: REQUEST_STATUS.IDLE, message: "", error: "" },
      modalIsOpened: false,
    };

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case USER_DATA_SUCCESS:
      return {
        ...state,
        requestStatus: {
          status: REQUEST_STATUS.SUCCESS,
          message: "Данные успешно изменены!",
          error: "",
        },
        user: {
          ...action.payload,
        },
      };
    case USER_DATA_REQUEST:
      return {
        ...state,
        user: {
          ...state.user,
        },
        requestStatus: {
          status: REQUEST_STATUS.PENDING,
          message: "",
          error: "",
        },
      };
    case USER_DATA_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
        },
        requestStatus: {
          status: REQUEST_STATUS.FAILURE,
          message: "",
          error: action.payload,
        },
      };
    case SET_MESSAGE:
      return {
        ...state,
        requestStatus: {
          status: REQUEST_STATUS.IDLE,
          message: action.payload,
          error: "",
        },
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        requestStatus: { status: REQUEST_STATUS.IDLE, message: "", error: "" },
      };

    case OPEN_MODAL:
      return { ...state, modalIsOpened: true };
    case CLOSE_MODAL:
      return { ...state, modalIsOpened: false };
    default:
      return state;
  }
};
