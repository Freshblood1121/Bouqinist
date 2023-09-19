import React from "react";
import {
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
  OutlinedInput,
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
          height: "55px",
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

const BaseSignupInput = ({ ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant="standard"
        label={props.text}
        name={props.name}
        value={props.value}
        id={props.id}
        inputProps={{
          autoComplete: "off",
          onChange: props.onChange,
          onBlur: props.onBlur,
          autoFocus: props.autoFocus ? true : false,
        }}
        error={props.error ? true : false}
        // helperText={props.errors ? props.errors : ""}
        helperText={props.helperText}
        onChange={props.onChange ? props.onChange : null}
      />
    </ThemeProvider>
  );
};

export default BaseSignupInput;
