import { REQUEST_STATUS } from "../../Utils/Constants";
import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
  SELECT_CATEGORY,
} from "./actions";

const initialState = {
  categories: [],
  chosenCategory: "",
  requestStatus: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};

export const categoriesReducer = (state = initialState, action) => {
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
        categories: [...action.data],
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
    case SELECT_CATEGORY: {
      return {
        ...state,
        chosenCategory: action.payload,
        // .title
      };
    }
    default:
      return state;
  }
};
