import {
  Box,
  CircularProgress,
  CssBaseline,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { Suspense, lazy, useMemo, useState } from "react";
import { palette } from "../../../../Utils/Constants";
import GolosUI from "../../../../fonts/Golos-UI_Regular.ttf";
import GolosUiBold from "../../../../fonts/Golos-UI_Bold.ttf";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { countries } from "../../../../Utils/Constants";
import { ruRU } from "@mui/material/locale";

const theme = createTheme(
  {
    typography: {
      inputLabel: {
        fontSize: "14px",
        color: `${palette.light}`,
        fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
        lineHeight: "normal",
      },
    },
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            [`& .MuiOutlinedInput-root`]: {
              padding: "0",
            },
            [`& .MuiOutlinedInput-root .MuiAutocomplete-input`]: {
              padding: "12px",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderRadius: "10px",
            border: `2px solid ${palette.gray300}`,
            transition: "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
          root: {
            borderRadius: "10px",
            fontSize: "14px",
            width: "100%",
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: `${palette.light}`,
            },
            fontSize: "14px",
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: `${palette.active}`,
            },
            [`&.Mui-disabled`]: {
              backgroundColor: `${palette.gray100}`,
              color: `${palette.light}`,
              WebKitTextFillColor: `${palette.light}`,
              borderColor: `${palette.gray300}`,
            },
            [`&.Mui-disabled .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: `${palette.gray300}`,
            },
          },
          input: {
            padding: "12px",
            fontSize: "14px",
            color: `${palette.basic}`,
            height: "18px",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            fontFamily: "Golos UI, Roboto, sans-serif",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
    @font-face {
      font-family: 'Golos UI';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: local('Golos UI'), url(${GolosUI}) format('truetype');
      unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, 0400—04FF;
    }
    * {box-sizing: border-box}
    :root {
      --basic: ${palette.basic};
    }
    @font-face {
      font-family: 'Golos UI Bold';
      font-style: normal;
      font-weight: normal;
      font-display: swap;
      src: local('Golos UI Bold'), 
      url(${GolosUiBold})
       format('truetype');
      unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, 0400—04FF;
    }
    * {box-sizing: border-box}
    :root {
      --basic: ${palette.basic};
    }
    `,
      },
    },
  },
  ruRU
);

const AutoComplete = lazy(() => import("@mui/material/Autocomplete"));

const CountrySelect = ({ ...ParentProps }) => {
  const transformedValue = countries.find(
    (country) => country.label === ParentProps.value
  );
  const [value, setValue] = useState(transformedValue);

  const [inputValue, setInputValue] = useState("");

  console.log("input Value: ", inputValue, "value: ", value);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        maxWidth={"320px"}
      >
        <Typography variant="inputLabel" sx={{ marginBottom: "8px" }}>
          {ParentProps.label}
        </Typography>
        <Suspense fallback={<CircularProgress />}>
          <Autocomplete
            // id="country-select"
            id={ParentProps.id}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            // value={ParentProps.value}
            value={transformedValue}
            // onChange={ParentProps.onChange}
            onChange={(event, newValue) => {
              ParentProps.formik.setFieldValue(`${ParentProps.name}`, newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              console.log(
                "input change event:",
                event,
                "new input value: ",
                newInputValue
              );
              setInputValue(newInputValue);
            }}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 }, fontSize: "16px" }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ fontSize: "16px" }}
                variant="outlined"
                id={ParentProps.id}
                name={ParentProps.name}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </Suspense>
        <div style={{ marginTop: "50px" }}>{`value: ${
          ParentProps.value !== null ? `'${ParentProps.value}'` : "null"
        }`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <br />
      </Box>
    </ThemeProvider>
  );
};

export default CountrySelect;
