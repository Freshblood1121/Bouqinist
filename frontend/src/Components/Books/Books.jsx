import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import BooksItem from "./BooksItem/BooksItem";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getBooksData } from "../../Store/books/actions";
import { useEffect } from "react";

const Books = () => {
  const items = useSelector((store) => store.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooksData(dispatch);
  }, []);

  const sidebar = {
    title: "About",
    description:
      "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  };

  return (
    <main>
      <Grid container spacing={5}>
        {/* После доработки бокового меню изменить md на 9: <Grid item xs={12} md={9}>*/}
        <Grid item xs={12} md={12}>
          {items.map((item) => (
            <BooksItem key={item.id} item={item}></BooksItem>
          ))}
        </Grid>
        <Sidebar title={sidebar.title} description={sidebar.description} />
      </Grid>
    </main>
  );
};

export default Books;
