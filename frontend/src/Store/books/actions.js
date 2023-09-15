import { API_URL } from "../../Utils/Constants";

export const DATA_REQUEST = "BOOKS::DATA_REQUEST";
export const DATA_SUCCESS = "BOOKS::DATA_SUCCESS";
export const DATA_ERROR = "BOOKS::DATA_ERROR";
export const SET_SORTING = "BOOKS::SET_SORTING";
export const SET_FILTERS = "BOOKS::SET_FILTERS";
// export const SORT_BY_PRICE_ASC = "BOOKS:SORT_BY_PRICE_ASC";
// export const SORT_BY_PRICE_DESC = "BOOKS:SORT_BY_PRICE_DESC";
// export const FILTER_BY_PUBLISH_PERIOD = "BOOKS:FILTER_BY_PUBLISH_PERIOD";
// export const FILTER_BY_PRICE_RANGE = "BOOKS:FILTER_BY_PRICE_RANGE";

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

export const getAllBooksData = (dispatch) => {
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

export const getBooksDataByCategory = (dispatch, id) => {
  dispatch(booksDataRequest());
  fetch(`${API_URL.CATEGORY_BOOKS}/${id}`, {
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

export const setSorting = (sorting) => {
  return {
    type: SET_SORTING,
    payload: {
      sortKey: sorting.sortKey,
      sortType: sorting.sortType,
      sortName: sorting.sortName,
    },
  };
};

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    payload: filters,
  };
};

// export const sortBooksByPriceAsc = () => {
//   return {
//     type: SORT_BY_PRICE_ASC,
//   };
// };

// export const sortBooksByPriceDesc = () => {
//   return {
//     type: SORT_BY_PRICE_DESC,
//   };
// };

// export const filterByPublishPeriod = (publishPeriod) => {
//   return {
//     type: FILTER_BY_PUBLISH_PERIOD,
//     payload: publishPeriod,
//   };
// };

// export const filterByPrice = (priceRange) => {
//   return {
//     type: FILTER_BY_PRICE_RANGE,
//     payload: priceRange,
//   };
// };
