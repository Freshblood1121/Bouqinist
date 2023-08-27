import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  TextField,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import React from "react";
import { palette } from "../../../Utils/Constants";
import "./PeriodFilter.css";
import ClearIcon from "../ClearIcon";

const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "--Select-brandBorderHoverColor": `${palette.hover}`,
          "--Select-brandBorderFocusedColor": `${palette.active}`,
          width: "60px",
          height: "45px",
          borderRadius: "10px",
          color: `${palette.light}`,
          fontSize: "16px",
          paddingLeft: "10px",
          paddingRight: "10px",
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--Select-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--Select-brandBorderFocusedColor)",
            borderWidth: "1px",
          },
          [`& .MuiInputBase-input`]: {
            paddingLeft: "0",
            paddingRight: "0",
          },
        },
      },
    },
  },
});

const PeriodFilter = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="period-filter">
        <FormControl variant="outlined">
          <OutlinedInput
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 4,
            }}
            placeholder="1990"
            notched={false}
          />
        </FormControl>
        <FormControl variant="outlined">
          <OutlinedInput
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 4,
            }}
            placeholder="1990"
            notched={false}
          />
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

export default PeriodFilter;
