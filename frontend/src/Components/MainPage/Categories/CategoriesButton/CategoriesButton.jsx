import React from "react";
// import "./CategoriesButton.css";
// import { Button } from "@mui/material";
import CategoryButton from "../../../UI/CategoryButton";

const CategoriesButton = ({ data }) => {
  return (
    <CategoryButton size="small" variant="category">
      {data}
    </CategoryButton>
  );
};

export default CategoriesButton;
