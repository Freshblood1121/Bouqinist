import { Box, Fade, Stack, Typography } from "@mui/material";
import React from "react";
import BaseAdInput from "../UI/Inputs/CreateAdInputs/BaseAdInput";
import PayType from "../UI/Inputs/CreateAdInputs/PayType";

const PaymentStep = (props) => {
  return (
    <>
      <Fade in={props.step === 1} timeout={500}>
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
            <Typography variant="boldSubtitle1">Оплата</Typography>
            <Typography variant="subtitle2">
              Укажите стоимость товара, выставляемого на продажу, и возможные
              способы его оплаты.
            </Typography>
          </Stack>
          <BaseAdInput
            label="Цена"
            type={"number"}
            {...props.formik.getFieldProps("price")}
            onChange={props.formik.handleChange}
            onBlur={props.formik.handleBlur}
            error={
              props.formik.touched.price && Boolean(props.formik.errors.price)
            }
            helperText={props.formik.touched.price && props.formik.errors.price}
          />
          <PayType
            label="Способы оплаты"
            {...props.formik.getFieldProps("payType")}
            error={
              props.formik.touched.payType &&
              Boolean(props.formik.errors.payType)
            }
            helperText={
              props.formik.touched.payType && props.formik.errors.payType
            }
            onChange={props.formik.handleChange}
            onBlur={props.formik.handleBlur}
            formik={props.formik}
          />
        </Box>
      </Fade>
    </>
  );
};

export default PaymentStep;
