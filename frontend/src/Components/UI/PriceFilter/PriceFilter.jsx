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
  const minPrice = 1;
  const maxPrice = 999999;
  useEffect(() => {
    const minPrice = 1;
    const maxPrice = 999999;
  }, []);

  const [priceRange, setPriceRange] = useState([0, 50000]);
  // const [minPriceRangeValue, setMinPriceRangeValue] = useState(minPrice);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleMinPriceChange = (event) => {
    event.preventDefault();
    setPriceRange([Number(event.target.value), priceRange[1]]);
    console.log(priceRange);
  };

  const handleMaxPriceChange = (event) => {
    event.preventDefault();
    setPriceRange([priceRange[0], Number(event.target.value)]);
    console.log(priceRange);
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
            value={priceRange[0]}
            onChange={handleMinPriceChange}
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
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
          />
        </FormControl>
        <Slider
          className="price-slider"
          getAriaLabel={() => "Price range"}
          value={priceRange}
          onChange={handlePriceChange}
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
