import React, { useState } from "react";
import {
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
    MuiInput: {
      styleOverrides: {
        root: {
          [`&::after`]: {
            borderBottom: `2px solid ${palette.active}`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#3D3C3C",
          "--TextField-brandBorderHoverColor": "#FDBF0F",
          "--TextField-brandBorderFocusedColor": "#3AB8EB",
          "&.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
  },
});

const PasswordSignupInput = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="standard">
        <InputLabel error={props.error ? true : false} htmlFor={props.id}>
          {props.text}
        </InputLabel>
        <Input
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
    </ThemeProvider>
  );
};

export default PasswordSignupInput;
