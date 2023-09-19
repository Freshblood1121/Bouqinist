import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../../../../Utils/Constants";

const CountryInput = ({ ...ParentProps }) => {
  return (
    <Autocomplete
      id="country-select"
      options={countries}
      onInputChange={(event, newValue) => {
        console.log(event, newValue);
        ParentProps.formik.setFieldValue(`${ParentProps.name}`, newValue);
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 }, fontSize: "16px" }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ fontSize: "16px" }}
          label="Страна"
          variant="standard"
          name={ParentProps.name}
          value={ParentProps.value}
          id={ParentProps.id}
          onChange={(event) => {
            ParentProps.formik.setFieldValue(
              `${ParentProps.name}`,
              event.target.value
            );
          }}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
            style: { fontSize: "16px" },
          }}
        />
      )}
    />
  );
};

export default CountryInput;
