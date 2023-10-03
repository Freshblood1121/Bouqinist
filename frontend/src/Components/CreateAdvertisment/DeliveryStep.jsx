import { Box, Fade, Stack, Typography } from "@mui/material";
import React from "react";
import BaseAdInput from "../UI/Inputs/CreateAdInputs/BaseAdInput";
import AdTelInput from "../UI/Inputs/CreateAdInputs/AdTelInput";

const DeliveryStep = (props) => {
  return (
    <>
      <Fade in={props.step === 2} timeout={500}>
        <Box
          sx={{
            padding: "20px 20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            rowGap: "40px",
            maxWidth: "870px",
          }}
        >
          <Stack rowGap={"20px"}>
            <Typography variant="boldSubtitle1">1. Местоположение</Typography>
            <Typography variant="subtitle2">
              Укажите населенный пункт, где покупатель может получить ваш товар.
            </Typography>
          </Stack>
          <BaseAdInput
            label="Страна"
            {...props.formik.getFieldProps("country")}
            onChange={props.formik.handleChange}
            onBlur={props.formik.handleBlur}
            error={
              props.formik.touched.country &&
              Boolean(props.formik.errors.country)
            }
            helperText={
              props.formik.touched.country && props.formik.errors.country
            }
          />
          <BaseAdInput
            label="Адрес"
            {...props.formik.getFieldProps("location")}
            onChange={props.formik.handleChange}
            onBlur={props.formik.handleBlur}
            error={
              props.formik.touched.location &&
              Boolean(props.formik.errors.location)
            }
            helperText={
              props.formik.touched.location && props.formik.errors.location
            }
          />
        </Box>
      </Fade>
      <Fade in={props.step === 2} timeout={500}>
        <Box
          sx={{
            padding: "20px 20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            rowGap: "40px",
            maxWidth: "870px",
          }}
        >
          <Stack rowGap={"20px"}>
            <Typography variant="boldSubtitle1">2. Контакты</Typography>
            <Typography variant="subtitle2">
              Укажите один или несколько предпочтительных способов связи с
              покупателем.
            </Typography>
          </Stack>
          <AdTelInput
            label="Телефон"
            {...props.formik.getFieldProps("phone")}
            onChange={props.formik.handleChange}
            onBlur={props.formik.handleBlur}
            error={
              props.formik.touched.phone && Boolean(props.formik.errors.phone)
            }
            helperText={props.formik.touched.phone && props.formik.errors.phone}
            formik={props.formik}
          />
          <BaseAdInput
            label="E-mail"
            {...props.formik.getFieldProps("email")}
            onChange={props.formik.handleChange}
            onBlur={props.formik.handleBlur}
            helperText={props.formik.touched.email && props.formik.errors.email}
            error={
              props.formik.touched.email && Boolean(props.formik.errors.email)
            }
            helperText={props.formik.touched.email && props.formik.errors.email}
          />
        </Box>
      </Fade>
    </>
  );
};

export default DeliveryStep;
