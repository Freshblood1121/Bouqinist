import React from "react";
import {
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { palette } from "../../../../Utils/Constants";

const theme = createTheme({
  typography: {
    fontFamily: "Golos UI, Roboto, sans-serif",
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
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#3D3C3C",
          "--TextField-brandBorderHoverColor": "#FDBF0F",
          "--TextField-brandBorderFocusedColor": "#3AB8EB",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
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
  },
});

const GenderSelect = ({
  ...props
  // , iconComponent
}) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant="standard"
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
        <MenuItem value="Мужской">Мужской</MenuItem>
        <MenuItem value="Женский">Женский</MenuItem>
        <MenuItem value="Другой">Другой</MenuItem>
      </TextField>
    </ThemeProvider>
  );
};

export default GenderSelect;
