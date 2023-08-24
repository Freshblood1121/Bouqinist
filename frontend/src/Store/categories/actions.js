import { API_URL } from "../../Utils/Constants";

export const DATA_REQUEST = "CATEGORIES::DATA_REQUEST";
export const DATA_SUCCESS = "CATEGORIES::DATA_SUCCESS";
export const DATA_ERROR = "CATEGORIES::DATA_ERROR";

export const categoriesDataRequest = () => ({
  type: DATA_REQUEST,
});

export const categoriesDataSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    data,
  };
};
export const categoriesDataError = (error) => ({
  type: DATA_ERROR,
  error,
});

export const getCategories = (dispatch) => {
  dispatch(categoriesDataRequest());
  fetch(API_URL.CATEGORIES, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        // Свойство "ok" полученного объекта response становится true, если HTTP-статус находится в диапазоне 200-299
        throw new Error(`Ошибка ` + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dispatch(categoriesDataSuccess(data));
    })
    .catch((error) => {
      dispatch(categoriesDataError(error.message));
      console.log(error);
    });
};
