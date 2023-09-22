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

const BasicData = (props) => {
  const validationSchema = yup.object({
    email: yup
      .string("Введите ваш email")
      .email("Неверный формат e-mail")
      .required("E-mail обязательно к заполнению"),
    firstName: yup
      .string("Введите ваше настоящее имя")
      .required("Имя обязательно к заполнению"),
    lastName: yup
      .string("Введите ваше настоящее имя")
      .required("Фамилия обязательна к заполнению"),
    phone: yup.string("Укажите номер телефона").max(40, "Не более 40 символов"),
  });

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "forzeX1@gmail.com",
      phone: "+79852369649",
      firstName: "Артем",
      lastName: "Горбачев",
      gender: "male",
      // birthdate: null,
      birthdate: "1995-12-17T03:24:00",
      country: "Россия",
      city: "Москва",
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
            <Box>
              <Typography
                component={"div"}
                variant="boldSubtitle1"
                sx={{ marginBottom: "20px" }}
              >
                Контакты
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <EmailInput
                  id={"email"}
                  name={"email"}
                  label={"E-mail"}
                  {...formik.getFieldProps(`email`)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <TelInput
                  id={"tel"}
                  name="tel"
                  {...formik.getFieldProps(`phone`)}
                  // value={formik.values.phone}
                  // onChange={formik.handleChange}
                  formik={formik}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                component={"div"}
                variant="boldSubtitle1"
                sx={{ marginBottom: "20px" }}
              >
                Личные данные
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                marginBottom={"20px"}
              >
                <BaseInput
                  label={"Имя"}
                  id={"firstName"}
                  name={"firstName"}
                  {...formik.getFieldProps(`firstName`)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <BaseInput
                  label={"Фамилия"}
                  id={"lastName"}
                  name="lastName"
                  {...formik.getFieldProps(`lastName`)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <GenderSelect
                  label={"Пол"}
                  id={"gender"}
                  name={"gender"}
                  {...formik.getFieldProps(`gender`)}
                  formik={formik}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <DateInput
                  label={"Дата рождения"}
                  id={"birthdate"}
                  name="birthdate"
                  {...formik.getFieldProps(`birthdate`)}
                  formik={formik}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.birthdate && Boolean(formik.errors.birthdate)
                  }
                  helperText={
                    formik.touched.birthdate && formik.errors.birthdate
                  }
                />
              </Box>
            </Box>
            <Box>
              <Typography
                component={"div"}
                variant="boldSubtitle1"
                sx={{ marginBottom: "20px" }}
              >
                Адрес
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                {/* <CountrySelect
                label={"Страна"}
                // value={{ label: "Россия", code: "RU", phone: 7 }}
                id={"country"}
                name="country"
                {...formik.getFieldProps(`country`)}
                formik={formik}
                // onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              /> */}
                <BaseInput
                  label={"Страна"}
                  id={"country"}
                  name="country"
                  {...formik.getFieldProps(`country`)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
                <BaseInput
                  label={"Город"}
                  id={"city"}
                  name="city"
                  {...formik.getFieldProps(`city`)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Box>
            </Box>
          </Box>
        </Fade>
      )}
    </>
  );
};

export default BasicData;
