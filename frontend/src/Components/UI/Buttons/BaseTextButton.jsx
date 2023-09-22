import React from "react";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { palette } from "../../../Utils/Constants";

const theme = createTheme({
  palette: {
    primary: {
      main: `${palette.basic}`,
      light: `${palette.light}`,
    },
  },
  typography: {
    fontFamily: "Golos UI, Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
        },
      },
    },
  },
});

const BaseTextButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}></Button>
    </ThemeProvider>
  );
};

export default BaseTextButton;
