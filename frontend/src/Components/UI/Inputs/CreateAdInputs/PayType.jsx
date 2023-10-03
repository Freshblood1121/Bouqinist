import {
  Box,
  Checkbox,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
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

const theme = createTheme({
  palette: {
    primary: {
      main: `${palette.basic}`,
      light: `${palette.light}`,
      dark: "#004c8f",
      contrastText: "#fff",
    },
  },
  typography: {
    inputLabel: {
      fontSize: "16px",
      color: `${palette.light}`,
      fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
      lineHeight: "normal",
    },
    label: {
      fontSize: "16px",
      color: `#000`,
      fontFamily: ["Golos UI", "Roboto", "sans-serif"].join(", "),
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
          fontSize: "16px",
          width: "100%",
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: `${palette.light}`,
          },
          fontSize: "16px",
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
          fontSize: "16px",
          color: `${palette.basic}`,
          height: "18px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "16px",
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
          textAlign: "end",
          position: "absolute",
          bottom: "-20px",
          left: "0",
          margin: "0px",
          fontFamily: "Golos UI",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          width: "max-content",
        },
        label: {
          fontFamily: "Golos UI, Roboto, sans-serif",
          fontSize: "16px",
          alignSelf: "start",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          marginTop: "-9px",
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

const PayType = (props) => {
  console.log(props.value);
  const [cashChecked, setCashChecked] = useState(props.value.cash);

  const handleCashChange = (e) => {
    setCashChecked(event.target.checked);
    props.formik.setFieldValue("payType.cash", event.target.checked);
  };

  const [sbpChecked, setSbpChecked] = useState(props.value.cash);

  const handleSbpChange = (e) => {
    setSbpChecked(event.target.checked);
    props.formik.setFieldValue("payType.sbp", event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControl variant="outlined" fullWidth>
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"100%"}
          // justifyContent={"space-between"}
          alignItems={"center"}
          maxWidth={"460px"}
        >
          <Typography
            variant="label"
            sx={{
              alignSelf: "start",
              color: "#000",
              width: "140px",
              paddingRight: "5px",
            }}
          >
            {props.label}
          </Typography>
          <Stack direction={"column"} rowGap={"20px"} position={"relative"}>
            <FormHelperText>
              {props.error
                ? props.helperText.cash
                  ? props.helperText.cash
                  : props.helperText.sbp
                : null}
            </FormHelperText>
            <FormControlLabel
              control={
                <Checkbox
                  checked={cashChecked}
                  onChange={handleCashChange}
                  onBlur={props.onBlur}
                  id="payType.cash"
                  name="payType.cash"
                />
              }
              label={"Наличные"}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sbpChecked}
                  onChange={handleSbpChange}
                  onBlur={props.onBlur}
                  id="payType.sbp"
                  name="payType.sbp"
                />
              }
              label={"Система быстрых платежей"}
            />
          </Stack>
        </Box>
      </FormControl>
    </ThemeProvider>
  );
};

export default PayType;
