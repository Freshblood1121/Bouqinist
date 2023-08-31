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
    // publishPeriod: [1970, new Date().getFullYear()],
    publishPeriod: [1970, new Date().getFullYear()],
    priceRange: {
      initial: [0, 9999999],
      filtered: [0, 9999999],
    },
    // priceRange: [],
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
      console.log(action.data);
      console.log("sortByAscPrice(action.data)", sortByAscPrice(action.data));
      return {
        ...state,
        books: [...action.data],
        // filters: {
        //   ...state.filters,
        //   priceRange: {
        //     ...state.filters.priceRange,
        //     initial: [
        //       sortByAscPrice(action.data)[0].price,
        //       sortByAscPrice(action.data)[action.data.length - 1].price,
        //     ],
        //     filtered: [
        //       sortByAscPrice(action.data)[0].price,
        //       sortByAscPrice(action.data)[action.data.length - 1].price,
        //     ],
        //   },
        // },
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
    // case SORT_BY_PRICE_ASC: {
    //   return {
    //     ...state,
    //     providedBooks: [...sortBooksByAscPrice(state.books)],
    //   };
    // }
    // case SORT_BY_PRICE_DESC: {
    //   return {
    //     ...state,
    //     providedBooks: [...sortBooksByDescPrice(state.books)],
    //   };
    // }
    // case FILTER_BY_PUBLISH_PERIOD: {
    //   return {
    //     ...state,
    //     filters: { ...state.filters, publishPeriod: action.payload },
    //     providedBooks: [...filterBooks(state.books, state.filters)],
    //   };
    // }
    // case FILTER_BY_PRICE_RANGE: {
    //   return {
    //     ...state,
    //     filters: { ...state.filters, priceRange: action.payload },
    //     providedBooks: [...filterBooks(state.books, state.filters)],
    //   };
    // }
    default:
      return state;
  }
};
