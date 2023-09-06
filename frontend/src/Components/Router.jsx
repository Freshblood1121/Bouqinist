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
import MainPage from "./MainPage/MainPage";
// import AdvertismentPage from "./AdvertismentPage/AdvertismentPage";
// import CategoryPage from "./CategoryPage/CategoryPage";
// import CategoryCardBox from "./CategoryPage/CategoryCardBox/CategoryCardBox";
// import ScrollToTop from "./ScrollToTop";
import SignupPage from "./SignupPage/SignupPage";

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
        element: <MainPage />,
      },
      // {
      //   path: "/items/:itemId?",
      //   element: <BookPage />,
      // },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default Router;
