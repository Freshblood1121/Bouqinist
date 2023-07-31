import { API_URL } from "../../Utils/Constants";

export const DATA_REQUEST = "BOOKS::DATA_REQUEST";
export const DATA_SUCCESS = "BOOKS::DATA_SUCCESS";
export const DATA_ERROR = "BOOKS::DATA_ERROR";

export const booksDataRequest = () => ({
  type: DATA_REQUEST,
});

export const booksDataSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    data,
  };
};
export const booksDataError = (error) => ({
  type: DATA_ERROR,
  error,
});

export const getBooksData = (dispatch) => {
  dispatch(booksDataRequest());
  fetch(API_URL.BOOKS, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        // Свойство "ok" полученного объекта response становится true, если HTTP-статус находится в диапазоне 200-299
        throw new Error(`Ошибка ` + response.status);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(booksDataSuccess(data));
    })
    .catch((error) => {
      dispatch(booksDataError(error.message));
      console.log(error);
    });
};
