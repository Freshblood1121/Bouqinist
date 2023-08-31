import { useMediaQuery } from "@mui/material";

export const API_URL = {
  BOOKS: "http://bouqinist/api/v1/books",
  CATEGORIES: "http://bouqinist/api/v1/categories",
  CATEGORY_BOOKS: "http://bouqinist/api/v1/categories/has",
};

export const REQUEST_STATUS = {
  IDLE: 1,
  SUCCESS: 2,
  PENDING: 3,
  FAILURE: 4,
};

export const palette = {
  basic: "#3D3C3C",
  light: "#676767",
  lighter: "#C5C5C5",
  hover: "#FDBF0F",
  active: "#3AB8EB",
  success: "#00A878",
  buttonHover: "#FC9D09",
  warning: "#F9784B",
};
