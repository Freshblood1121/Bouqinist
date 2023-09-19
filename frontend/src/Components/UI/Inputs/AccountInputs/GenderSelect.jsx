import React from "react";
import {
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
  OutlinedInput,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { palette } from "../../../../Utils/Constants";
import GolosUI from "../../../../fonts/Golos-UI_Regular.ttf";
import GolosUiBold from "../../../../fonts/Golos-UI_Bold.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "Golos UI, Roboto, sans-serif",
    inputLabel: {
      fontSize: "14px",
      color: `${palette.light}`,
      fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
      lineHeight: "normal",
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "48px",
          width: "100%",
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
    MuiInput: {
      styleOverrides: {
        root: {
          [`&::after`]: {
            borderBottom: `2px solid ${palette.active}`,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          [`&.Mui-selected`]: {
            backgroundColor: `${palette.activeLight}`,
          },
        },
      },
    },
  },
});

const GenderSelect = ({
  ...props
  // , iconComponent
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        maxWidth={"320px"}
      >
        <Typography variant="inputLabel" sx={{ marginBottom: "8px" }}>
          {props.label}
        </Typography>
        <TextField
          variant="outlined"
          label={props.text}
          select
          name={props.name}
          value={props.value}
          id={props.id}
          // onChange={props.handleChange}
          onChange={(event) => {
            props.formik.setFieldValue(`${props.name}`, event.target.value);
          }}
        >
          <MenuItem value="male">Мужской</MenuItem>
          <MenuItem value="female">Женский</MenuItem>
        </TextField>
      </Box>
    </ThemeProvider>
  );
};

export default GenderSelect;
