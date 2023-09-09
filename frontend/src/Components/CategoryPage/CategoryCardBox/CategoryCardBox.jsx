import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useParams } from "react-router-dom";
import { API_URL, REQUEST_STATUS } from "../../../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBooksData,
  getBooksDataByCategory,
} from "../../../Store/books/actions";
import { books } from "../../../Store/selectors";
import { booksSelectors } from "../../../Store";

const CategoryCardBox = () => {
  // const items = useSelector(booksSelectors.books);
  const items = useSelector(booksSelectors.selectTransformedBooks);
  // const items = useSelector(booksSelectors.selectFilteredBooks);

  return (
    <>
      <div className="category__cards">
        {items.map((item) => (
          <CategoryCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default CategoryCardBox;
