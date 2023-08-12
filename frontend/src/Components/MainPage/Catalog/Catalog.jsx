import React, { useEffect } from "react";
import "./Catalog.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooksData } from "../../../Store/books/actions";
import CatalogSection from "./CatalogSection/CatalogSection";

const Catalog = () => {
  const items = useSelector((store) => store.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooksData(dispatch);
  }, []);

  const categories = [
    "Художественные",
    "Научно-популярные",
    "Научные",
    "Справочные",
    "Учебные",
    "Полиграфия",
  ];

  return (
    <div className="ctl">
      {categories.map((category, index) => (
        <CatalogSection key={index} books={items} />
      ))}
    </div>
  );
};

export default Catalog;
