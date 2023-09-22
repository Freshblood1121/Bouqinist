import React from "react";
import EmailInput from "../UI/Inputs/AccountInputs/EmailInput";
import TelInput from "../UI/Inputs/AccountInputs/TelInput";
import BaseInput from "../UI/Inputs/AccountInputs/BaseInput";
import CountrySelect from "../UI/Inputs/AccountInputs/CountrySelect";
import GenderSelect from "../UI/Inputs/AccountInputs/GenderSelect";
import DateInput from "../UI/Inputs/AccountInputs/DateInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Box, Fade, Typography } from "@mui/material";
import { palette } from "../../Utils/Constants";
import PasswordInput from "../UI/Inputs/AccountInputs/PasswordInput";
import SimpleButton from "../UI/Buttons/SimpleButton";

const ChangePassword = (props) => {
  const validationSchema = yup.object({
    oldPassword: yup
      .string("Введите ваш старый пароль")
      .min(8, "Длина пароля должна быть не менее 8 символов")
      .required("Пароль обязателен к заполнению"),
    newPassword: yup
      .string("Укажите новый пароль")
      .min(8, "Длина пароля должна быть не менее 8 символов")
      .required("Пароль обязателен к заполнению"),
    confirmedPassword: yup
      .string("Введите ваш пароль")
      .required("Пароль обязателен к заполнению")
      .oneOf([yup.ref("password")], "Пароли не совпадают"),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmedPassword: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // dispatch(register(values));
    },
  });

  return (
    <>
      {props.value === props.index && (
        <Fade
          in={props.value === props.index}
          {...(props.value === props.index ? { timeout: 500 } : {})}
        >
          <Box
            component={"div"}
            role="tabpanel"
            sx={{ display: props.value !== props.index ? "none" : "flex" }}
            id={`account-tabpanel-${props.index}`}
            aria-labelledby={`account-tab-${props.index}`}
            flexDirection={"column"}
            rowGap={"40px"}
          >
            {/* <Box display={"flex"} flexDirection={"column"} rowGap={"40px"}> */}
            <PasswordInput
              id={"oldPassword"}
              name={"oldPassword"}
              label={"Старый пароль"}
              {...formik.getFieldProps(`oldPassword`)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
              }
              helperText={
                formik.touched.oldPassword && formik.errors.oldPassword
              }
            />
            <PasswordInput
              id={"newPassword"}
              name={"newPassword"}
              label={"Новый пароль"}
              {...formik.getFieldProps(`newPassword`)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
            />
            <PasswordInput
              id={"confirmedPassword"}
              name={"confirmedPassword"}
              label={"Повторите пароль"}
              {...formik.getFieldProps(`confirmedPassword`)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmedPassword &&
                Boolean(formik.errors.confirmedPassword)
              }
              helperText={
                formik.touched.confirmedPassword &&
                formik.errors.confirmedPassword
              }
            />
            <SimpleButton
              handleClick={formik.handleSubmit}
              text={"Сменить пароль"}
            />
          </Box>
        </Fade>
      )}
    </>
  );
};

export default ChangePassword;
