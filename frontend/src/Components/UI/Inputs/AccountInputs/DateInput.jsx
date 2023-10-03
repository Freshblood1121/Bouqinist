import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ruRU } from "@mui/x-date-pickers";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { palette } from "../../../../Utils/Constants";
import GolosUI from "../../../../fonts/Golos-UI_Regular.ttf";
import GolosUiBold from "../../../../fonts/Golos-UI_Bold.ttf";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Golos UI, Roboto, sans-serif",
    inputLabel: {
      fontSize: "14px",
      color: `${palette.light}`,
      fontFamily: ["Golos UI Bold", "Roboto", "sans-serif"].join(", "),
      lineHeight: "normal",
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "48px",
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "10px",
          border: `2px solid ${palette.gray300}`,
          transition: "border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        root: {
          borderRadius: "10px",
          fontSize: "14px",
          width: "100%",
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: `${palette.light}`,
          },
          fontSize: "14px",
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
          fontSize: "14px",
          color: `${palette.basic}`,
          height: "18px",
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
  },
});

const DatePicker = React.lazy(() => import("@mui/x-date-pickers/DatePicker"));

export default function DateInput({ ...props }) {
  const [value, setValue] = React.useState(dayjs(props.value));

  React.useEffect(() => {
    console.log(props.value);
    console.log(value);
    if (props.value === undefined) {
      setValue(null);
    }
  }, []);

  const [error, setError] = React.useState(null);
  const errorMessage = React.useMemo(() => {
    switch (error) {
      case "maxDate": {
        return "Выберите дату не позднее сегодняшнего дня";
      }
      case "minDate": {
        return "Выберите дату не ранее 1920 г.";
      }

      case "invalidDate": {
        return "Указана некорректная дата";
      }

      default: {
        return "";
      }
    }
  }, [error]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        maxWidth={"320px"}
      >
        <Typography variant="inputLabel" sx={{ marginBottom: "8px" }}>
          {props.label}
        </Typography>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="ru"
          localeText={
            ruRU.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <React.Suspense fallback={<div>Loading...</div>}>
            <DatePicker
              disableFuture
              label={props.text}
              // value={props.value}
              value={value}
              // onError={(newError) => setError(newError)}
              onClose={props.formik.handleSubmit}
              onChange={(value, context) => {
                if (!value) {
                  props.formik.setFieldValue(`${props.name}`, "");
                } else {
                  props.formik.setFieldValue(`${props.name}`, dayjs(value));
                  setValue(dayjs(value));
                }
              }}
              slotProps={{
                textField: {
                  variant: "outlined",
                  name: props.name,
                  id: props.id,
                  helperText: errorMessage,
                  error: false,
                  onBlur: props.formik.handleSubmit,
                },
              }}
            />
          </React.Suspense>
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
}
