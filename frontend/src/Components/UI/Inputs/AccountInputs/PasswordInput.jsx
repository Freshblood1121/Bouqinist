import {
  Box,
  CssBaseline,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { palette } from "../../../../Utils/Constants";
import GolosUI from "../../../../fonts/Golos-UI_Regular.ttf";
import GolosUiBold from "../../../../fonts/Golos-UI_Bold.ttf";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    inputLabel: {
      fontSize: "14px",
      color: `${palette.light}`,
      fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
      lineHeight: "normal",
    },
  },
  components: {
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
    MuiFormControl: {
      styleOverrides: {
        root: {
          position: "relative",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: `${palette.warning}`,
          fontSize: "12px",
          textAlign: "start",
          position: "absolute",
          left: "0",
          bottom: "-25px",
          margin: "0px",
          fontFamily: "Golos UI",
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
});

const PasswordInput = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          {props.label}
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <InputLabel error={props.error ? true : false} htmlFor={props.id}>
            {props.text}
          </InputLabel>
          <OutlinedInput
            id={props.id}
            type={showPassword ? "text" : "password"}
            name={props.name}
            value={props.value}
            autoComplete="off"
            error={props.error ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
          <FormHelperText error={props.error ? true : false}>
            {props.helperText}
          </FormHelperText>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

export default PasswordInput;
