import { REQUEST_STATUS } from "../../Utils/Constants";
import {
  getBook,
  GET_BOOK,
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
} from "./actions";

const initialState = {
  books: [],
  requestStatus: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST: {
      return {
        ...state,
        requestStatus: {
          status: REQUEST_STATUS.PENDING,
          error: "",
        },
      };
    }
    case DATA_SUCCESS: {
      return {
        ...state,
        books: [...action.data],
        requestStatus: {
          status: REQUEST_STATUS.SUCCESS,
          error: "",
        },
      };
    }
    case DATA_ERROR: {
      return {
        ...state,
        requestStatus: {
          status: REQUEST_STATUS.FAILURE,
          error: action.error,
        },
      };
    }
    default:
      return state;
  }
};
