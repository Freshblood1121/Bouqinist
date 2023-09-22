import { createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import GolosUI from "./fonts/Golos-UI_Regular.ttf";
import GolosUiBold from "./fonts/Golos-UI_Bold.ttf";
import UnicaOne from "./fonts/UnicaOne-Regular.ttf";
import { palette } from "./Utils/Constants";
import { ruRU } from "@mui/material/locale";

const theme = createTheme(
  {
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
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1300,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1300,
      },
    },
    typography: {
      fontFamily: ["Golos UI", "Unica One", "Roboto", "sans-serif"].join(","),
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
      h3: {
        fontSize: 24,
        color: `${palette.basic}`,
        height: "auto",
        marginBottom: 15,
      },
      h4: {
        fontSize: 16,
        color: `${palette.basic}`,
      },
      title: {
        fontSize: 24,
        fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(","),
        color: `${palette.basic}`,
      },
      subtitle1: {
        fontFamily: ["Golos UI", "Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      subtitle2: {
        fontFamily: ["Golos UI", "Roboto", "sans-serif"].join(","),
        fontSize: 16,
        color: "black",
      },
      boldSubtitle1: {
        fontSize: 20,
        fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(","),
        color: `${palette.basic}`,
      },
      boldSubtitle2: {
        fontSize: 16,
        fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(","),
        color: `${palette.basic}`,
        lineHeight: "normal",
      },
      sidebarItem: {
        fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(","),
        fontSize: 20,
        color: `${palette.basic}`,
      },
      logoBig: {
        fontFamily: ["Unica One", "Roboto", "cursive"].join(" ,"),
        fontSize: 64,
        color: `${palette.basic}`,
      },
      signupTitle: {
        fontFamily: ["Doloman Pavljenko", "Roboto", "sans-serif"].join(","),
        fontSize: 32,
        color: `${palette.basic}`,
      },
      signupSubtitle: {
        fontFamily: ["Doloman Pavljenko", "Roboto", "sans-serif"].join(","),
        fontSize: 24,
        color: `${palette.basic}`,
      },
      itemProp: {
        fontSize: "0.875rem",
        color: "rgb(99, 115, 129)",
      },
      itemValue: {
        fontWeight: "500",
      },
      errorTitle: {
        fontSize: "14px",
        color: `${palette.warning}`,
        textAlign: "center",
      },
      inputLabel: {
        fontSize: "14px",
        color: `${palette.light}`,
        fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
        lineHeight: "normal",
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
      @font-face {
        font-family: 'Unica One';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Unica One'), 
        url(${UnicaOne})
        /* url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap') */
         format('truetype');
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
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: "16px",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: `${palette.basic}`,
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            [`& span`]: {
              fontSize: "16px",
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          noOptions: {
            fontSize: "16px",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: `${palette.gray400}`,
            textTransform: "none",
            borderRadius: "10px",
            fontSize: "20px",
            padding: "12px 32px 20px 0",
            fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
            [`&.Mui-selected`]: {
              color: `${palette.basic}`,
              fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            position: "relative",
            [`&::before`]: {
              display: "block",
              width: "100%",
              height: "3px",
              position: "absolute",
              bottom: "-3px",
              zIndex: "2",
              backgroundColor: `${palette.gray300}`,
            },
          },
          indicator: {
            backgroundColor: `${palette.basic}`,
            height: "3px",
            zIndex: "3",
          },
        },
      },
    },
  },
  ruRU
);

export default theme;
