import { createSelector } from "@reduxjs/toolkit";

export const requestStatus = (state) => state.books.requestStatus.status;
export const error = (state) => state.books.requestStatus.error;
export const books = (state) => state.books.books;
export const filters = (state) => state.books.filters;
export const filteredPublishPeriod = (state) =>
  state.books.filters.publishPeriod;
export const inititalPriceRange = (state) =>
  state.books.filters.priceRange.initial;
export const filteredPriceRange = (state) =>
  state.books.filters.priceRange.filtered;
export const sortKey = (state) => state.books.sorting.sortKey;
export const sortType = (state) => state.books.sorting.sortType;
export const sortName = (state) => state.books.sorting.sortName;

// Функция проверки аргумента на вхождение в заданный диапазон
// Нужна предварительная сортировка
const inRange = (num, min, max) => {
  if (num >= min && num <= max) {
    return true;
  } else if (!num) {
    return false;
  }
};

export const selectFilteredBooks = createSelector(
  [books, filters],
  (books, filters) => {
    console.log(books);
    console.log(filters);
    const sortedBooks = [...books];

    sortedBooks.sort((a, b) => {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    });

    const filteredByPublishDate = sortedBooks.filter((book) =>
      inRange(book.age, filters.publishPeriod[0], filters.publishPeriod[1])
    );

    console.log("filteredByPublishDate:", filteredByPublishDate);

    // console.log(filteredByPublishDate);
    // console.log("price range min:", filters.priceRange[0]);
    // console.log("price range max:", filters.priceRange[1]);

    const sortedByAscPrice = filteredByPublishDate.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });

    console.log(sortedByAscPrice);

    // filters.initialPriceRange = [
    //   ...filters.initialPriceRange,
    //   sortedByAscPrice[0],
    //   sortedByAscPrice[1],
    // ];
    console.log(
      filteredByPublishDate.filter((book) =>
        inRange(
          book.price,
          filters.priceRange.filtered[0],
          filters.priceRange.filtered[1]
        )
      )
    );
    return filteredByPublishDate.filter((book) =>
      inRange(
        book.price,
        filters.priceRange.filtered[0],
        filters.priceRange.filtered[1]
      )
    );
  }
);

export const selectTransformedBooks = createSelector(
  [selectFilteredBooks, sortKey, sortType],
  (array, sortKey, sortType) => {
    switch (sortType) {
      case "ASC": {
        console.log("sorting: case `ASC`", sortKey);
        const transofrmedArray = [...array];
        return transofrmedArray.sort((a, b) => {
          if (a[sortKey] > b[sortKey]) {
            return 1;
          }
          if (a[sortKey] < b[sortKey]) {
            // console.log(
            //   "sortKey:",
            //   sortKey,
            //   "a.sortKey:",
            //   a.sortKey,
            //   "b.sortKey",
            //   "a.sortKey < b.sortKey"
            // );
            return -1;
          }
          return 0;
        });
      }
      case "DESC": {
        console.log("sorting: case `DESC`");
        const transofrmedArray = [...array];
        return transofrmedArray.sort((a, b) => {
          if (a[sortKey] < b[sortKey]) {
            return 1;
          }
          if (a[sortKey] > b[sortKey]) {
            return -1;
          }
          return 0;
        });
      }
      default:
        console.log("sorting: default case");
        return;
    }
  }
);
