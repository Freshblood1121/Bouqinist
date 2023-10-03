import {
  Box,
  CssBaseline,
  FormControl,
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
  typography: {
    inputLabel: {
      fontSize: "14px",
      color: `${palette.light}`,
      fontFamily: ["Golos UI", "Roboto", "sans-serif"].join(", "),
      lineHeight: "normal",
    },
    lightHelperText: {
      fontSize: "14px",
      color: `${palette.light}`,
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
          fontSize: "16px",
          color: `${palette.basic}`,
          // height: "18px",
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
          right: "0",
          top: "-20px",
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

const MultiLineInput = (props) => {
  // const [value, setValue] = useState("");
  const [length, setLength] = useState(0);
  console.log(length);

  const handleChange = (e) => {
    console.log(e);
    setLength(e.target.value.length);
    props.formik.setFieldValue("description", e.target.value);
    console.log(props.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControl variant="outlined" fullWidth>
        <FormHelperText>{props.error ? props.helperText : null}</FormHelperText>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          rowGap={"10px"}
          // justifyContent={"space-between"}
          // alignItems={"center"}
          // maxWidth={"460px"}
        >
          <OutlinedInput
            id={props.id}
            name={props.name}
            value={props.value}
            // onChange={props.onChange}
            onChange={handleChange}
            onBlur={props.onBlur}
            error={props.error ? true : false}
            multiline
            rows={9}
            inputProps={{
              maxLength: 1000,
            }}
          />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="lightHelperText">До 1000 символов</Typography>
            <Typography variant="lightHelperText" sx={{ textAlign: "end" }}>
              {length}/1000
            </Typography>
          </Stack>
        </Box>
      </FormControl>
    </ThemeProvider>
  );
};

export default MultiLineInput;
