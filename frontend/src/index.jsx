import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "./fonts/DolomanPavljenko.otf";
import "./fonts/Golos-UI_Bold.ttf";
import "./fonts/Golos-UI_Medium.ttf";
import "./fonts/Golos-UI_Regular.ttf";
import { Provider } from "react-redux";
import { persistor, store } from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Components/Router";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor} loading={null}> */}
    <RouterProvider router={Router} />
    {/* </PersistGate> */}
  </Provider>
);
