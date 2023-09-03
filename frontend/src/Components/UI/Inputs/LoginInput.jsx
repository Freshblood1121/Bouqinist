import React from "react";
import {
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Account from "../Icons/Account";
import { User } from "@phosphor-icons/react";

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "48px",
          marginTop: "55px",
          marginBottom: "35px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#3D3C3C",
          "--TextField-brandBorderHoverColor": "#FDBF0F",
          "--TextField-brandBorderFocusedColor": "#3AB8EB",
          width: "calc(100% - 3px)",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
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
        },
        input: {
          padding: "13px 0 13px 25px",
          fontSize: "16px",
          color: "#3D3C3C",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          [`& svg`]: {
            // marginRight: "-6px",
          },
        },
      },
    },
  },
});

const LoginInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant="outlined"
        placeholder="Логин"
        auto
        InputProps={{
          inputMode: "text",
          type: "text",
          autoComplete: "off",
          endAdornment: (
            <InputAdornment position="end">
              <div
                style={{
                  display: "flex",
                  paddingLeft: "10.1px",
                }}
              >
                <User
                  size={24}
                  style={{
                    transition: "fill 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  }}
                />
              </div>
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};

export default LoginInput;
