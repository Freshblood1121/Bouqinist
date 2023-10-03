import {
  Box,
  CssBaseline,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { palette } from "../../../../Utils/Constants";
import GolosUI from "../../../../fonts/Golos-UI_Regular.ttf";
import GolosUiBold from "../../../../fonts/Golos-UI_Bold.ttf";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

const theme = createTheme({
  typography: {
    inputLabel: {
      fontSize: "16px",
      color: `${palette.light}`,
      fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
      lineHeight: "normal",
    },
    label: {
      fontSize: "16px",
      color: `#000`,
      fontFamily: ["Golos UI", "Roboto", "sans-serif"].join(", "),
      lineHeight: "normal",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "10px",
          border: `2px solid ${palette.gray300}`,
          transition: "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        root: {
          borderRadius: "10px",
          fontSize: "16px",
          width: "100%",
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: `${palette.light}`,
          },
          fontSize: "16px",
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
          fontSize: "16px",
          color: `${palette.basic}`,
          height: "18px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontFamily: "Golos UI, Roboto, sans-serif",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          position: "relative",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: `${palette.warning}`,
          fontSize: "12px",
          textAlign: "end",
          position: "absolute",
          right: "0",
          top: "-20px",
          margin: "0px",
          fontFamily: "Golos UI",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "16px",
        },
      },
    },
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
  },
});

const values = [
  "Художественные",
  "Научно-популярные",
  "Научные",
  "Справочные",
  "Учебные",
  "Полиграфия",
];

// const styledDropdownIcon = () => {
//   return <CaretDown size={30} color={palette.basic} />;
// };

const AdCategorySelect = (props) => {
  // const [categories, setCategories] = useState(props.categories);

  const categories = useSelector((store) => store.categories.categories);
  const [stateCategories, setStateCategories] = useState(categories);
  const [value, setValue] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControl variant="outlined" fullWidth>
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          maxWidth={"460px"}
        >
          <Typography
            variant="label"
            sx={{ color: "#000", width: "140px", paddingRight: "5px" }}
          >
            {props.label}
          </Typography>
          <Stack position={"relative"} maxWidth={"320px"} width={"100%"}>
            <FormHelperText>
              {props.error ? props.helperText : null}
            </FormHelperText>

            <TextField
              variant="outlined"
              label={props.text}
              select
              SelectProps={{
                IconComponent: ExpandMoreIcon,
              }}
              name={props.name}
              // value={props.value.title}
              value={value}
              id={props.id}
              fullWidth
              sx={{ maxWidth: "320px" }}
              onChange={(event) => {
                props.formik.setFieldValue(`${props.name}`, {
                  id: event.target.value.id,
                  title: event.target.value.title,
                });
                setValue(event.target.value);
              }}
              onBlur={props.onBlur}
            >
              {categories.map((item, index) => {
                return (
                  <MenuItem key={item.id} value={item}>
                    {item.title}
                  </MenuItem>
                );
              })}
            </TextField>
          </Stack>
        </Box>
      </FormControl>
    </ThemeProvider>
  );
};

export default AdCategorySelect;
