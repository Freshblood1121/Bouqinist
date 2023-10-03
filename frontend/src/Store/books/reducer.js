import { REQUEST_STATUS } from "../../Utils/Constants";
import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
  SET_SORTING,
  SET_FILTERS,
  // SORT_BY_PRICE_ASC,
  // SORT_BY_PRICE_DESC,
  // FILTER_BY_PUBLISH_PERIOD,
  // FILTER_BY_PRICE_RANGE,
} from "./actions";

const initialState = {
  books: [],
  sorting: { sortKey: "price", sortType: "ASC", sortName: "Дешевле" },
  filters: {
    publishPeriod: [0, 0],
    priceRange: {
      initial: [0, 0],
      filtered: [0, 0],
    },
  },
  requestStatus: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};

const sortByAscPrice = (items) => {
  console.log("sorted items", items);
  return items.sort((a, b) => {
    if (a.price > b.price) {
      // console.log("проверка сортировки", a, b);
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    } else {
      return 0;
    }
  });
  // console.log("отсортированный массив:", items);
  // console.log("первый элемент отсортированного массива:", items[0]);
  // console.log(
  //   "последний элемент отсортированного массива:",
  //   items[items.length - 1]
  // );
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
      if (action.data.length > 0) {
        return {
          ...state,
          books: [...action.data],
          filters: {
            ...state.filters,
            publishPeriod: [
              Math.min(
                ...action.data.map((item) => {
                  return item.age;
                })
              ),
              Math.max(
                ...action.data.map((item) => {
                  return item.age;
                })
              ),
            ],
            priceRange: {
              ...state.filters.priceRange,
              initial: [
                Math.min(
                  ...action.data.map((item) => {
                    return item.price;
                  })
                ),
                Math.max(
                  ...action.data.map((item) => {
                    return item.price;
                  })
                ),
              ],
              filtered: [
                Math.min(
                  ...action.data.map((item) => {
                    return item.price;
                  })
                ),
                Math.max(
                  ...action.data.map((item) => {
                    return item.price;
                  })
                ),
              ],
            },
          },
          requestStatus: {
            status: REQUEST_STATUS.SUCCESS,
            error: "",
          },
        };
      } else {
        return {
          ...state,
          books: [...action.data],
          filters: {
            ...state.filters,
            publishPeriod: [0, 0],
            priceRange: {
              ...state.filters.priceRange,
              initial: [0, 0],
              filtered: [0, 0],
            },
          },
          requestStatus: {
            status: REQUEST_STATUS.SUCCESS,
            error: "",
          },
        };
      }
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
    case SET_SORTING: {
      return {
        ...state,
        sorting: {
          sortKey: action.payload.sortKey,
          sortType: action.payload.sortType,
          sortName: action.payload.sortName,
        },
      };
    }
    case SET_FILTERS: {
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    }
    default:
      return state;
  }
};
