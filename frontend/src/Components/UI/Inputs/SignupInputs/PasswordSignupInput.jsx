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
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { palette } from "../../../../Utils/Constants";

const theme = createTheme({
  typography: {
    fontFamily: "Golos UI, Roboto, sans-serif",
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
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
      {/* <TextField
        variant="standard"
        label={text}
        inputProps={{
          inputMode: "text",
          type: `${showPassword ? "text" : "password"}`,
          autoComplete: "off",
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
      ></TextField> */}
      <FormControl variant="standard">
        <InputLabel htmlFor={props.id}>{props.text}</InputLabel>
        <Input
          id={props.id}
          type={showPassword ? "text" : "password"}
          name={props.name}
          value={props.value}
          autoComplete="off"
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
        />
      </FormControl>
    </ThemeProvider>
  );
};

export default PasswordSignupInput;
