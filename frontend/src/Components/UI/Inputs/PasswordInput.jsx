import React, { useState } from "react";
import {
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "48px",
          marginBottom: "45px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#3D3C3C",
          "--TextField-brandBorderHoverColor": "#FDBF0F",
          "--TextField-brandBorderFocusedColor": "#3AB8EB",
          "--TextField-brandBorderErrorColor": "#D32F2F",
          width: "100%",
          minWidth: "320px",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
          "& label.Mui-focused.Mui-error": {
            color: "var(--TextField-brandBorderErrorColor)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "20px",
          border: "2px solid var(--TextField-brandBorderColor)",
          boxShadow: "3px 10px 0px 0px #FDBF0F",
          height: "57px",
          transition:
            "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
            boxShadow:
              "3px 10px 0px 0px var(--TextField-brandBorderHoverColor)",
            transition:
              "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
            boxShadow:
              "3px 10px 0px 0px var(--TextField-brandBorderFocusedColor)",
            transition:
              "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
          [`&.Mui-error .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderErrorColor)",
            boxShadow: `3px 10px 0px 0px var(--TextField-brandBorderHoverColor)`,
            transition:
              "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
        },
        input: {
          padding: "13px 0 13px 25px",
          fontSize: "16px",
          color: "#3D3C3C",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          right: "0",
          top: "-25px",
          fontSize: "0.6rem",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          lineHeight: "normal",
        },
      },
    },
  },
});

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant="outlined"
        label={props.text}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange ? props.onChange : null}
        error={props.error ? true : false}
        helperText={props.helperText}
        InputProps={{
          inputMode: "text",
          type: `${showPassword ? "text" : "password"}`,
          autoComplete: "off",
          onChange: props.onChange,
          onBlur: props.onBlur,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};

export default PasswordInput;
