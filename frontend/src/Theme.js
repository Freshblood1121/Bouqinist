import { createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import GolosUI from "./fonts/Golos-UI_Regular.ttf";
import { palette } from "./Utils/Constants";

const golosUI = {
  fontFamily: "Golos UI",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
    local("Golos UI"),
    url(${GolosUI}) format("truetype")
  `,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#3ab9eb",
      light: "#ade1f7",
      dark: "#004c8f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fdbe0f",
      light: "#ffebb3",
      dark: "#fc9d09",
    },
    success: { main: "#00A878", light: "#9adbc1", dark: "#076446" },
  },
  typography: {
    fontFamily: ["Golos UI", "Roboto", "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontFamily: ["Golos UI", "Roboto", "sans-serif"].join(","),
      fontSize: 69,
      "@media (max-width:599px)": {
        fontSize: 36,
      },
      "@media (min-width:600px) and (max-width: 900px)": {
        fontSize: 52,
      },
      fontFamily: ["Golos UI", "sans-serif"].join(","),
    },
    h2: {
      fontFamily: ["Doloman Pavljenko", "Roboto", "sans-serif"].join(","),
      fontSize: 36,
      color: `${palette.basic}`,
    },
    subtitle1: {
      fontFamily: ["Golos UI", "Roboto", "sans-serif"].join(","),
      fontSize: 20,
    },
    itemProp: {
      fontSize: "0.875rem",
      color: "rgb(99, 115, 129)",
    },
    itemValue: {
      fontWeight: "500",
    },
  },
  components: {
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
      `,
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "48px",
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
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "20px",
          border: "2px solid var(--TextField-brandBorderColor)",
          boxShadow: "3px 15px 0px 0px #FDBF0F",
          height: "57px",
          transition:
            "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
            boxShadow:
              "3px 15px 0px 0px var(--TextField-brandBorderHoverColor)",
            transition:
              "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
            boxShadow:
              "3px 15px 0px 0px var(--TextField-brandBorderFocusedColor)",
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
  },
});

export default theme;
