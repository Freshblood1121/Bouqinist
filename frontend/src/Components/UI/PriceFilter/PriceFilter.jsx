import {
  FormControl,
  OutlinedInput,
  TextField,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { palette } from "../../../Utils/Constants";
import Slider from "@mui/material/Slider";
import "./PriceFilter.css";
import { useDispatch, useSelector } from "react-redux";
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
  palette: {
    primary: {
      main: `${palette.light}`,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "--Select-brandBorderColor": `${palette.light}`,
          "--Select-brandBorderHoverColor": `${palette.hover}`,
          "--Select-brandBorderFocusedColor": `${palette.active}`,
          width: "95px",
          height: "45px",
          borderRadius: "10px",
          color: `${palette.light}`,
          fontSize: "16px",
          borderColor: "var(--Select-brandBorderColor)",
          // [breakpointsTheme.breakpoints.up("sm")]: {
          //   width: "300px",
          // },
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--Select-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--Select-brandBorderFocusedColor)",
            borderWidth: "1px",
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: `${palette.light}`,
          width: "calc(100% - 20px)",
          marginLeft: "10px",
          [`&.MuiSlider-thumb:hover`]: {
            boxShadow: `0px 0px 0px 8px rgba(103, 103, 103, 0.16)`,
          },
        },
      },
    },
  },
});

const PriceFilter = () => {
  const inititalPriceRange = useSelector(booksSelectors.inititalPriceRange);

  const filteredPriceRange = useSelector(booksSelectors.filteredPriceRange);

  console.log(filteredPriceRange);

  const minPrice = inititalPriceRange[0];
  const maxPrice = inititalPriceRange[1];

  const [values, setValues] = useState(filteredPriceRange);

  const dispatch = useDispatch();

  const handlePriceChange = (event, newValue) => {
    setValues(newValue);
    dispatch(
      setFilters({
        priceRange: {
          initial: [...inititalPriceRange],
          filtered: values,
        },
      })
    );
  };

  const handleChangeCommitted = (event) => {
    dispatch(
      setFilters({
        priceRange: {
          initial: [...inititalPriceRange],
          filtered: values,
        },
      })
    );
  };

  const handleMinPriceChange = (event) => {
    event.preventDefault();
    setValues([Number(event.target.value), priceRange[1]]);
    dispatch(
      setFilters({
        priceRange: values,
      })
    );
    console.log(priceRange);
  };

  const handleMaxPriceChange = (event) => {
    event.preventDefault();
    setValues([priceRange[0], Number(event.target.value)]);
    console.log(priceRange);
  };

  const handleBlur = (event) => {
    dispatch(
      setFilters({
        priceRange: values,
      })
    );
  };

  const valuetext = (value) => {
    return `${value} ₽`;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="price-filter">
        <FormControl variant="outlined">
          <OutlinedInput
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 10,
            }}
            notched={false}
            value={values[0]}
            onChange={handleMinPriceChange}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl variant="outlined">
          <OutlinedInput
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 10,
            }}
            notched={false}
            value={values[1]}
            onChange={handleMaxPriceChange}
            onBlur={handleBlur}
          />
        </FormControl>
        <Slider
          className="price-slider"
          getAriaLabel={() => "Price range"}
          value={values}
          onChange={handlePriceChange}
          onChangeCommitted={handleChangeCommitted}
          valueLabelDisplay="off"
          getAriaValueText={valuetext}
          color={"primary"}
          min={minPrice}
          max={maxPrice}
        />
      </div>
    </ThemeProvider>
  );
};

export default PriceFilter;
