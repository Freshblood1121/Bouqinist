import { useMediaQuery } from "@mui/material";

export const API_URL = {
  BOOKS: "http://bouqinist/backend/v1/all",
};

export const REQUEST_STATUS = {
  IDLE: 1,
  SUCCESS: 2,
  PENDING: 3,
  FAILURE: 4,
};
