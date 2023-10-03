import {
  Box,
  CssBaseline,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { palette } from "../../../../Utils/Constants";
import GolosUI from "../../../../fonts/Golos-UI_Regular.ttf";
import GolosUiBold from "../../../../fonts/Golos-UI_Bold.ttf";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
// import { MuiTelInput } from "mui-tel-input";

const MuiTelInput = lazy(() => import("mui-tel-input"));

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
          top: "0",
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
          [`& .${outlinedInputClasses.notchedOutline} legend`]: {
            display: "none",
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

const AdTelInput = (props) => {
  const [phone, setPhone] = useState("");

  const handleChange = (value) => {
    console.log(event);
    setPhone(value);
    props.formik.setFieldValue("phone", value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControl variant="outlined" fullWidth>
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"100%"}
          // justifyContent={"space-between"}
          alignItems={"center"}
          maxWidth={"460px"}
        >
          <Typography
            variant="label"
            sx={{ color: "#000", width: "140px", paddingRight: "5px" }}
          >
            {props.label}
          </Typography>
          {/* <OutlinedInput
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            error={props.error ? true : false}
            sx={{ maxWidth: "320px" }}
          /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <MuiTelInput
              fullWidth
              defaultCountry="RU"
              sx={{ maxWidth: "320px" }}
              autoComplete="off"
              id={props.id}
              name={props.name}
              variant="outlined"
              // defaultCountry="RU"
              // langOfCountryName="RU"
              label={false}
              value={phone}
              // value={phone}
              // onChange={props.onChange}
              onChange={(value) => {
                handleChange(value);
              }}
              onBlur={props.onBlur}
              error={props.error ? true : false}
              helperText={props.helperText}
              inputProps={{
                style: {
                  fontSize: "16px",
                  fontFamily: "Golos UI, Roboto, sans-serif",
                },
                inputMode: "numeric",
              }}
            />
          </Suspense>
        </Box>
      </FormControl>
    </ThemeProvider>
  );
};

export default AdTelInput;

// import React, { useState } from "react";
// import { MuiTelInput } from "mui-tel-input";
// import {
//   Box,
//   CssBaseline,
//   ThemeProvider,
//   Typography,
//   createTheme,
//   outlinedInputClasses,
// } from "@mui/material";
// import { palette } from "../../../../Utils/Constants";
// import GolosUI from "../../../../fonts/Golos-UI_Regular.ttf";
// import GolosUiBold from "../../../../fonts/Golos-UI_Bold.ttf";

// const theme = createTheme({
//   typography: {
//     inputLabel: {
//       fontSize: "14px",
//       color: `${palette.light}`,
//       fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
//       lineHeight: "normal",
//     },
//   },
//   components: {
//     MuiOutlinedInput: {
//       styleOverrides: {
//         notchedOutline: {
//           borderRadius: "10px",
//           border: `2px solid ${palette.gray300}`,
//           transition: "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
//           top: "0",
//         },
//         root: {
//           borderRadius: "10px",
//           fontSize: "14px",
//           width: "100%",
//           [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
//             borderColor: `${palette.light}`,
//           },
//           fontSize: "14px",
//           [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
//             borderColor: `${palette.active}`,
//           },
//           [`&.Mui-disabled`]: {
//             backgroundColor: `${palette.gray100}`,
//             color: `${palette.light}`,
//             WebKitTextFillColor: `${palette.light}`,
//             borderColor: `${palette.gray300}`,
//           },
//           [`&.Mui-disabled .${outlinedInputClasses.notchedOutline}`]: {
//             borderColor: `${palette.gray300}`,
//           },
//           [`& .${outlinedInputClasses.notchedOutline} legend`]: {
//             display: "none",
//           },
//         },
//         input: {
//           padding: "12px",
//           fontSize: "14px",
//           color: `${palette.light}`,
//           height: "18px",
//         },
//       },
//     },
//     MuiFormControl: {
//       styleOverrides: {
//         root: {
//           position: "relative",
//         },
//       },
//     },
//     MuiFormHelperText: {
//       styleOverrides: {
//         root: {
//           color: `${palette.warning}`,
//           fontSize: "12px",
//           textAlign: "end",
//           position: "absolute",
//           right: "0",
//           top: "-25px",
//           margin: "0px",
//           fontFamily: "Golos UI",
//         },
//       },
//     },
//     MuiCssBaseline: {
//       styleOverrides: `
//     @font-face {
//       font-family: 'Golos UI';
//       font-style: normal;
//       font-display: swap;
//       font-weight: 400;
//       src: local('Golos UI'), url(${GolosUI}) format('truetype');
//       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, 0400—04FF;
//     }
//     * {box-sizing: border-box}
//     :root {
//       --basic: ${palette.basic};
//     }
//     @font-face {
//       font-family: 'Golos UI Bold';
//       font-style: normal;
//       font-weight: normal;
//       font-display: swap;
//       src: local('Golos UI Bold'),
//       url(${GolosUiBold})
//        format('truetype');
//       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, 0400—04FF;
//     }
//     * {box-sizing: border-box}
//     :root {
//       --basic: ${palette.basic};
//     }
//     `,
//     },
//   },
// });

// const TelInput = (props) => {
//   // const [phone, setPhone] = useState("");

//   // const handleChange = (newPhone) => {
//   //   setPhone(newPhone);
//   // };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         display={"flex"}
//         flexDirection={"column"}
//         width={"100%"}
//         maxWidth={"320px"}
//       >
//         <Typography variant="inputLabel" sx={{ marginBottom: "8px" }}>
//           Номер телефона
//         </Typography>
//         <MuiTelInput
//           fullWidth
//           autoComplete="off"
//           id={props.id}
//           name={props.name}
//           variant="outlined"
//           // defaultCountry="RU"
//           // langOfCountryName="RU"
//           label={false}
//           value={props.value}
//           // onChange={props.onChange}
//           onChange={(event) => {
//             console.log(event);
//             props.formik.setFieldValue("phone", event);
//           }}
//           onBlur={props.onBlur}
//           error={props.error ? true : false}
//           helperText={props.helperText}
//           inputProps={{
//             style: {
//               fontSize: "14px",
//               fontFamily: "Golos UI, Roboto, sans-serif",
//             },
//             inputMode: "numeric",
//           }}
//         ></MuiTelInput>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default TelInput;
