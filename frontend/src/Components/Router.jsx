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
import AdvertismentPage from "./AdvertismentPage/AdvertismentPage";
import CategoryPage from "./CategoryPage/CategoryPage";
import CategoryCardBox from "./CategoryPage/CategoryCardBox/CategoryCardBox";
import ScrollToTop from "./ScrollToTop";
import SignupPage from "./SignupPage/SignupPage";
import AccountPage from "./AccountPage/AccountPage";
import CreateAdvertisment from "./CreateAdvertisment/CreateAdvertisment";
import FavouritePage from "./FavouritePage/FavouritePage";
import MyAdvertismentsPage from "./MyAdvertismentsPage/MyAdvertismentsPage";
import OrdersPage from "./OrdersPage/OrdersPage";

const Router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Layout />
      </ScrollToTop>
    ),
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/favourite",
        element: <FavouritePage />,
      },
      {
        path: "/advertisments",
        element: <MyAdvertismentsPage />,
      },
      {
        path: "/items/:itemId?",
        element: <AdvertismentPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/categories/",
        element: <CategoryPage />,
        children: [
          {
            path: ":categoryId?",
            element: <CategoryCardBox />,
          },
        ],
      },
      {
        path: "/create",
        element: <CreateAdvertisment />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default Router;
