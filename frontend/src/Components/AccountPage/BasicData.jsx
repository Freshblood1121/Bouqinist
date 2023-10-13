import React, { Suspense, lazy, useEffect, useState } from "react";
import EmailInput from "../UI/Inputs/AccountInputs/EmailInput";
import TelInput from "../UI/Inputs/AccountInputs/TelInput";
import BaseInput from "../UI/Inputs/AccountInputs/BaseInput";
import DateInput from "../UI/Inputs/AccountInputs/DateInput";
import CountrySelect from "../UI/Inputs/AccountInputs/CountrySelect";
import GenderSelect from "../UI/Inputs/AccountInputs/GenderSelect";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Box, Fade, Snackbar, Typography } from "@mui/material";
import { REQUEST_STATUS, palette } from "../../Utils/Constants";
import { getUserData, setUserData } from "../../Store/account/actions";
import dayjs from "dayjs";

// const DateInput = lazy(() => import("../UI/Inputs/AccountInputs/DateInput"));

const BasicData = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(dispatch));
    console.log(formik.values);
  }, []);

  const userData = useSelector((store) => store.account.user);

  const validationSchema = yup.object({
    email: yup
      .string("Введите ваш email")
      .email("Неверный формат e-mail")
      .required("E-mail обязательно к заполнению"),
    first_name: yup
      .string("Введите ваше настоящее имя")
      .required("Имя обязательно к заполнению"),
    last_name: yup
      .string("Введите ваше настоящее имя")
      .required("Фамилия обязательна к заполнению"),
    phone: yup.string("Укажите номер телефона").max(40, "Не более 40 символов"),
  });

  const formik = useFormik({
    initialValues: {
      email: userData.email,
      phone: userData.phone,
      first_name: userData.first_name,
      last_name: userData.last_name,
      gender: userData.gender,
      birthdate: userData.yo,
      country: userData.country,
      city: userData.city,
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        setUserData({
          ...values,
          yo: values.birthdate,
        })
      )
        .then((data) => {
          // formik.setValues({
          //   email: userData.email,
          //   phone: userData.phone,
          //   first_name: userData.first_name,
          //   last_name: userData.last_name,
          //   gender: userData.gender,
          //   birthdate: userData.yo,
          //   country: userData.country,
          //   city: userData.city,
          // });
          setOpen(true);
        })
        .catch((error) => {
          console.log(error);
          // setMessage("Ошибка!");
          setOpen(true);
        });
    },
  });

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const requestStatus = useSelector((store) => store.account.requestStatus);

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
            {requestStatus.status !== REQUEST_STATUS.PENDING && (
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity={
                    requestStatus.status === REQUEST_STATUS.FAILURE
                      ? "error"
                      : "success"
                  }
                  sx={{ width: "100%" }}
                  variant="filled"
                >
                  {requestStatus.status === REQUEST_STATUS.FAILURE &&
                    requestStatus.error}
                  {requestStatus.status === REQUEST_STATUS.SUCCESS &&
                    requestStatus.message}
                </Alert>
              </Snackbar>
            )}
            <Box>
              <Typography
                component={"div"}
                variant="boldSubtitle1"
                sx={{ marginBottom: "20px" }}
              >
                Контакты
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                columnGap={"20px"}
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                  rowGap: { xs: "40px", md: "0" },
                }}
              >
                <EmailInput
                  id={"email"}
                  name={"email"}
                  label={"E-mail"}
                  {...formik.getFieldProps(`email`)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleSubmit}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
                <TelInput
                  id={"tel"}
                  name="tel"
                  {...formik.getFieldProps(`phone`)}
                  // value={formik.values.phone}
                  // onChange={formik.handleChange}
                  formik={formik}
                  onBlur={formik.handleSubmit}
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
                columnGap={"20px"}
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                  rowGap: { xs: "40px", md: "0" },
                }}
              >
                <BaseInput
                  label={"Имя"}
                  id={"first_name"}
                  name={"first_name"}
                  {...formik.getFieldProps(`first_name`)}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  onBlur={formik.handleSubmit}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
                <BaseInput
                  label={"Фамилия"}
                  id={"last_name"}
                  name="last_name"
                  {...formik.getFieldProps(`last_name`)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleSubmit}
                  error={
                    formik.touched.last_name && Boolean(formik.errors.last_name)
                  }
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                columnGap={"20px"}
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                  rowGap: { xs: "40px", md: "0" },
                }}
              >
                <GenderSelect
                  label={"Пол"}
                  id={"gender"}
                  name={"gender"}
                  {...formik.getFieldProps(`gender`)}
                  formik={formik}
                  onBlur={formik.handleSubmit}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
                {/* <Suspense fallback={<div>Loading...</div>}> */}
                <DateInput
                  label={"Дата рождения"}
                  id={"birthdate"}
                  name="birthdate"
                  {...formik.getFieldProps(`birthdate`)}
                  formik={formik}
                  onChange={formik.handleChange}
                  onBlur={formik.handleSubmit}
                  error={
                    formik.touched.birthdate && Boolean(formik.errors.birthdate)
                  }
                  helperText={
                    formik.touched.birthdate && formik.errors.birthdate
                  }
                />
                {/* </Suspense> */}
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
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                columnGap={"20px"}
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                  rowGap: { xs: "40px", md: "0" },
                }}
              >
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
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={formik.touched.first_name && formik.errors.first_name}
              /> */}
                <BaseInput
                  label={"Страна"}
                  id={"country"}
                  name="country"
                  {...formik.getFieldProps(`country`)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleSubmit}
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
                  onBlur={formik.handleSubmit}
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
