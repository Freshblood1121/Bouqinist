import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ruRU } from "@mui/x-date-pickers";

export default function DateInput({ ...props }) {
  const [error, setError] = React.useState(null);
  const errorMessage = React.useMemo(() => {
    switch (error) {
      case "maxDate":
      case "minDate": {
        return "Please select a date in the first quarter of 2022";
      }

      case "invalidDate": {
        return "Your date is not valid";
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
      <DatePicker
        label="Дата рождения"
        value={props.value}
        onError={(newError) => setError(newError)}
        onChange={(data) => {
          console.log(data.$d);
          props.formik.setFieldValue(`${props.name}`, data.$d);
        }}
        slotProps={{
          textField: {
            variant: "standard",
            name: props.name,
            // value: props.value,
            id: props.id,
            helperText: errorMessage,
            // onChange: (event, value) => {
            //   console.log(event, value);
            //   props.formik.setFieldValue(`${props.name}`, event.target.value);
            // },
          },
        }}
      />
    </LocalizationProvider>
  );
}
