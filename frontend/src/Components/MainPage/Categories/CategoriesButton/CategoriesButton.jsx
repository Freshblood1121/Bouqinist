import React from "react";
import "./CategoriesButton.css";
import { Button } from "@mui/material";

const CategoriesButton = ({ data }) => {
  return (
    // ToDo: поменять кнопки на MUI Button. Гайд - https://dev.to/headwayio/global-styling-with-material-ui-theme-overrides-and-props-2clh
    <Button size="small" variant="category">
      {data}
    </Button>
    // <button className="ctgs__btn">{data}</button>
  );
};

export default CategoriesButton;
