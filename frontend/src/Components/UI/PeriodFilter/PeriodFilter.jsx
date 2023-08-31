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
import React, { useState } from "react";
import { palette } from "../../../Utils/Constants";
import "./PeriodFilter.css";
import ClearIcon from "../ClearIcon";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { booksSelectors } from "../../../Store";
import { setFilters } from "../../../Store/books/actions";

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
  // const periods = useSelector(booksSelectors.validPublishPeriod);
  const periods = useSelector(booksSelectors.filteredPublishPeriod);

  const [values, setValues] = useState(periods);

  const handleChange = (e) => {
    if (e.target.name == "min") {
      setValues([Number(e.target.value), values[1]]);
    } else {
      setValues([values[0], Number(e.target.value)]);
    }
  };

  const dispatch = useDispatch();
  const handleBlur = (event) => {
    dispatch(
      setFilters({
        publishPeriod: values,
      })
    );
  };

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
            notched={false}
            value={values[0]}
            name="min"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl variant="outlined">
          <OutlinedInput
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 4,
            }}
            notched={false}
            value={values[1]}
            name="max"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

export default PeriodFilter;
