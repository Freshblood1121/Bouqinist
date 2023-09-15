import { OPEN_MODAL } from "./actions";

const initialState = {
  openModal: false,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        openModal: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        openModal: false,
      };
    }
    default:
      return state;
  }
};
