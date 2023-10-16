import React, { lazy, useMemo, useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ruRU } from "@mui/x-date-pickers";

const DatePicker = lazy(() => import("../Datepicker"));

export default function DateInput({ ...props }) {
  console.log(props);

  const [value, setValue] = useState(props.value);

  const [error, setError] = useState(null);
  const errorMessage = useMemo(() => {
    switch (error) {
      case "maxDate": {
        return "Выберите дату не позднее сегодняшнего дня";
      }
      case "minDate": {
        return "Выберите дату не ранее 1900 г.";
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
          onError={(newError) => setError(newError)}
          onChange={(value, context) => {
            if (value.$d === null) {
              console.log(123);
              setError("invalidDate");
              props.formik.setFieldValue(`${props.name}`, null);
            }
            props.formik.setFieldValue(`${props.name}`, value.$d);
            setValue(value);
            console.log(props.formik.values);
          }}
          slotProps={{
            textField: {
              variant: "standard",
              name: props.name,
              id: props.id,
              helperText: errorMessage,
            },
          }}
        />
      </React.Suspense>
    </LocalizationProvider>
  );
}
