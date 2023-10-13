import {
  Box,
  Checkbox,
  CssBaseline,
  Fade,
  FormControl,
  FormControlLabel,
  FormHelperText,
  OutlinedInput,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { palette } from "../../../../Utils/Constants";
import GolosUI from "../../../../fonts/Golos-UI_Regular.ttf";
import SimpleButton from "../../Buttons/SimpleButton";
import { TransitionGroup } from "react-transition-group";

const theme = createTheme({
  palette: {
    primary: {
      main: `${palette.basic}`,
      light: `${palette.light}`,
      dark: "#004c8f",
      contrastText: "#fff",
    },
  },
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
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          width: "max-content",
        },
        label: {
          fontFamily: "Golos UI, Roboto, sans-serif",
          fontSize: "16px",
          alignSelf: "start",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          marginTop: "-9px",
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
    * {box-sizing: border-box}
    :root {
      --basic: ${palette.basic};
    }
    `,
    },
  },
});

const AuthorInput = (props) => {
  // const defaultAuthor = { value: "" };
  const [authors, setAuthors] = useState([{ value: "" }]);
  // const [authorValue, setAuthorValue] = useState({ value: "" });

  const [checked, setChecked] = useState(props.formik.values.author.unknown);

  useEffect(() => {
    if (checked) {
      setAuthors([]);
    }
  }, []);

  const handleChange = (event, index) => {
    setAuthors([
      ...authors.slice(0, index),
      { value: event.target.value },
      ...authors.slice(index + 1),
    ]);

    const newAuthors = [
      ...authors.slice(0, index),
      { value: event.target.value },
      ...authors.slice(index + 1),
    ];

    const joinedAuthors = newAuthors.reduce(
      (accumulator, item, index, array) => {
        if (index === array.length - 1) {
          return accumulator + `${item.value}`;
        } else if (array.length === 1) {
          return item.value;
        } else {
          return accumulator + `${item.value}, `;
        }
      },
      [""]
    );
    props.formik.setFieldValue("author.authors", joinedAuthors);
  };

  const handleAddAuthor = () => {
    setAuthors([...authors, { value: "" }]);
  };

  const handleDeleteAuthor = (index) => {
    setAuthors([...authors.slice(0, index), ...authors.slice(index + 1)]);
  };

  const handleCheckChange = (event) => {
    if (event.target.checked) {
      props.formik.setFieldValue("author.authors", "Автор неизвестен");
      props.formik.setFieldValue("author.unknown", true);
      setChecked(event.target.checked);
      setAuthors([]);
    } else {
      props.formik.setFieldTouched("author", false, false);
      setAuthors([{ value: "" }]);
      props.formik.setFieldValue("author.authors", "");
      props.formik.setFieldValue("author.unknown", false);
      setChecked(event.target.checked);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display={"flex"} flexDirection={"row"} width={"100%"}>
        <Typography
          variant="label"
          sx={{
            alignSelf: "start",
            color: "#000",
            width: "167px", // +27px к стандартным 140 из-за отрицательного margin у Chekbox'a
            paddingRight: "5px",
          }}
        >
          {props.label}
        </Typography>
        <Box
          sx={{
            alignSelf: "start",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleCheckChange} />
            }
            label={"Автор неизвестен"}
            sx={{ mb: "31px" }}
          />
          <Stack direction={"column"} rowGap={"40px"}>
            <TransitionGroup
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "40px",
              }}
            >
              {authors.map((author, index) => {
                if (index === 0) {
                  return (
                    <Fade
                      key={author}
                      in={!checked}
                      {...{ timeout: 250 }}
                      mountOnEnter
                      unmountOnExit
                    >
                      <Stack direction={"row"} columnGap={"20px"}>
                        <FormControl fullWidth sx={{ maxWidth: "320px" }}>
                          <FormHelperText>
                            {props.formik.touched.author &&
                            Boolean(props.formik.errors.author)
                              ? props.formik.touched.author &&
                                props.formik.errors.author.authors
                              : null}
                          </FormHelperText>
                          <OutlinedInput
                            id={props.id}
                            name={props.name}
                            value={authors[index].value}
                            // onChange={props.onChange}
                            onChange={(event) => handleChange(event, index)}
                            onBlur={props.onBlur}
                            error={
                              props.formik.touched.author &&
                              Boolean(props.formik.errors.author)
                                ? true
                                : false
                            }
                            sx={{ maxWidth: "320px" }}
                          />
                        </FormControl>
                        <SimpleButton
                          text={"Добавить автора"}
                          width={"150px"}
                          handleClick={handleAddAuthor}
                        />
                      </Stack>
                    </Fade>
                  );
                } else {
                  return (
                    <Fade
                      key={index}
                      in={!authors.includes(index) && !checked}
                      {...{ timeout: 250 }}
                    >
                      <Stack direction={"row"} columnGap={"20px"}>
                        <FormControl fullWidth sx={{ maxWidth: "320px" }}>
                          <FormHelperText>
                            {props.error ? props.helperText : null}
                          </FormHelperText>
                          <OutlinedInput
                            id={props.id}
                            name={props.name}
                            value={authors[index].value}
                            // onChange={props.onChange}
                            onChange={(event) => handleChange(event, index)}
                            onBlur={props.onBlur}
                            error={props.error ? true : false}
                            sx={{ maxWidth: "320px" }}
                          />
                        </FormControl>
                        <SimpleButton
                          text={"Удалить автора"}
                          width={"150px"}
                          handleClick={(event) => {
                            console.log(index);
                            handleDeleteAuthor(index);
                          }}
                          backgroundColor={palette.error300}
                          hoverBackgroundColor={palette.warning}
                        />
                      </Stack>
                    </Fade>
                  );
                }
              })}
            </TransitionGroup>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AuthorInput;
