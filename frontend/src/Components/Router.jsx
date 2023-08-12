import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import Header from "./Header/Header";
import Layout from "./Layout";
import Books from "./Books/Books";
import BookPage from "./BookPage/BookPage";

const Router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/books/:bookId?",
        element: <BookPage />,
      },
    ],
  },
]);

export default Router;
