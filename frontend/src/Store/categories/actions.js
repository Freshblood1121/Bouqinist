import authService from "../../Services/auth.service";
import { API_URL } from "../../Utils/Constants";

export const DATA_REQUEST = "CATEGORIES::DATA_REQUEST";
export const DATA_SUCCESS = "CATEGORIES::DATA_SUCCESS";
export const DATA_ERROR = "CATEGORIES::DATA_ERROR";
export const SELECT_CATEGORY = "CATEGORIES::SELECT_CATEGORY";

export const categoriesDataRequest = () => ({
  type: DATA_REQUEST,
});

export const categoriesDataSuccess = (data) => ({
  type: DATA_SUCCESS,
  data,
});

export const categoriesDataError = (error) => ({
  type: DATA_ERROR,
  error,
});

export const getCategories = (dispatch) => {
  dispatch(categoriesDataRequest());
  authService
    .getCategoriesList()
    .then((response) => {
      console.log(response);
      dispatch(categoriesDataSuccess(response.data));
    })
    .catch((error) => {
      if (error.response) {
        dispatch(categoriesDataError(error.response.data));
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        dispatch(categoriesDataError("Не удалось получить ответ от сервера"));
      } else {
        // Something happened in setting up the request that triggered an Error
        dispatch(categoriesDataError("Возникла непредвиденная ошибка"));
      }
    });
};

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});
