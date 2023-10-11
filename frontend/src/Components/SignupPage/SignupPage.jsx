import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Grow,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import theme from "../../Theme";
import "./SignupPage.css";
import { useFormik } from "formik";
import { API_URL } from "../../Utils/Constants";
import * as yup from "yup";
import dayjs from "dayjs";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store";
import Verification from "./Verification/Verification";
import { register } from "../../Store/account/actions";

const MuiTelInput = lazy(() => import("mui-tel-input"));
const DateInput = lazy(() => import("../UI/Inputs/SignupInputs/DateInput"));
const BaseSignupInput = lazy(() =>
  import("../UI/Inputs/SignupInputs/BaseSignupInput")
);
const PasswordSignupInput = lazy(() =>
  import("../UI/Inputs/SignupInputs/PasswordSignupInput")
);
const SignupNavButton = lazy(() => import("../UI/Buttons/SignupNavButton"));
const CountryInput = lazy(() =>
  import("../UI/Inputs/SignupInputs/CountryInput")
);
const BaseButton = lazy(() => import("../UI/Buttons/BaseButton"));
const GenderSelect = lazy(() =>
  import("../UI/Inputs/SignupInputs/GenderSelect")
);

const SignupPage = () => {
  const [step, setStep] = useState(0);
  const titles = ["Основные сведения", "Дополнительные сведения"];

  const handleBack = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const [loading, setLoading] = useState(false);

  const [phone, setPhone] = useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string("Введите ваш email")
      .email("Неверный формат e-mail")
      .required("E-mail обязательно к заполнению"),
    firstName: yup
      .string("Введите ваше настоящее имя")
      .min(1, "Длина имени должна быть не менее 1 символа")
      .required("Имя обязательно к заполнению"),
    lastName: yup
      .string("Введите ваше настоящее имя")
      .min(1, "Длина имени должна быть не менее 1 символа")
      .required("Фамилия обязательна к заполнению"),
    password: yup
      .string("Введите ваш пароль")
      .min(8, "Длина пароля должна быть не менее 6 символов")
      .required("Пароль обязателен к заполнению"),
    confirmedPassword: yup
      .string("Введите ваш пароль")
      .required("Пароль обязателен к заполнению")
      .oneOf([yup.ref("password")], "Пароли не совпадают"),
  });

  const [submittedForm, setSubmittedForm] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmedPassword: "",
      phone: "",
      country: "",
      city: "",
      gender: "",
      birthdate: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(register(values));
      setSubmittedForm(true);
    },
  });

  const CurrentPage = (formik) => {
    if (step === 0) {
      return (
        <>
          <Suspense fallback={<CircularProgress />}>
            <BaseSignupInput
              name={"email"}
              text={"E-mail"}
              id={"email"}
              {...formik.getFieldProps(`email`)}
              autoFocus
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <BaseSignupInput
              name={"firstName"}
              text={"Имя"}
              id={"firstName"}
              {...formik.getFieldProps(`firstName`)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <BaseSignupInput
              name={"lastName"}
              text={"Фамилия"}
              id={"lastName"}
              {...formik.getFieldProps(`lastName`)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <PasswordSignupInput
              name={"password"}
              text={"Пароль"}
              id={"password"}
              {...formik.getFieldProps(`password`)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <PasswordSignupInput
              text={"Повторите пароль"}
              id={"confirmedPassword"}
              name={"confirmedPassword"}
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
          </Suspense>
          <SignupNavButton
            handleClick={handleNext}
            text={"Далее"}
            className={`step-forward ${step == 0 ? "visible" : "hidden"}`}
            disabled={formik.dirty && formik.isValid ? false : true}
          />
        </>
      );
    } else if (step === 1) {
      return (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <MuiTelInput
              autoFocus
              autoComplete="off"
              id="phone"
              name="phone"
              variant="standard"
              defaultCountry="RU"
              langOfCountryName="RU"
              label="Номер телефона (не обязательно)"
              inputProps={{
                style: {
                  fontSize: "16px",
                },
              }}
              value={formik.values.phone}
              // {...formik.getFieldProps(`phone`)}
              onChange={(event) => {
                console.log(event);
                formik.setFieldValue("phone", event);
              }}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <CountryInput
              name={"country"}
              id={"country"}
              text={"Страна (не обязательно)"}
              {...formik.getFieldProps(`country`)}
              formik={formik}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <BaseSignupInput
              text={"Город (не обязательно)"}
              name={"city"}
              id={"city"}
              {...formik.getFieldProps(`city`)}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <GenderSelect
              text={"Пол (не обязательно)"}
              id={"gender"}
              name={"gender"}
              {...formik.getFieldProps(`gender`)}
              formik={formik}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <DateInput
              name={"birthdate"}
              id={"birthdate"}
              text={"Дата рождения (не обязательно)"}
              {...formik.getFieldProps(`birthdate`)}
              formik={formik}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.birthdate && Boolean(formik.errors.birthdate)
              }
              helperText={formik.touched.birthdate && formik.errors.birthdate}
            />
          </Suspense>
          <Suspense fallback={<CircularProgress />}>
            <SignupNavButton
              handleClick={handleBack}
              text={"Назад"}
              className={`step-back ${step == 1 ? "visible" : "hidden"}`}
            />
          </Suspense>
        </>
      );
    }
  };

  const account = useSelector((store) => store.account.account);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundImage:
              "url(img/account/gradient.svg), url(img/account/blue.svg), url(img/account/yellow.svg), url(img/account/red.svg)",
            backgroundSize: "30%, 20%, 20%, 15%",
            backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
            backgroundPosition: "left top, right 5%, left 95%, 90% 85%",
            [`@media screen and (min-width: 2000px)`]: {
              background: "none",
            },
            [`@media screen and (max-width: 1024px)`]: {
              background: "none",
            },
          }}
        >
          <Container maxWidth="xlg">
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "200px",
                rowGap: "55px",
              }}
            >
              <Link
                to={"/"}
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                }}
              >
                <div className="logo-big">
                  <img
                    className="logo-big__img"
                    src="../img/book_open.svg"
                    alt="BookOpen"
                  />
                  <Typography variant="logoBig" sx={{ lineHeight: "1" }}>
                    BOUQINIST
                  </Typography>
                </div>
              </Link>
              <div className="signup-wrapper">
                {!submittedForm && (
                  <>
                    <Typography
                      sx={{ lineHeight: "1", marginBottom: "10px" }}
                      variant="signupTitle"
                    >
                      Создание аккаунта
                    </Typography>
                    <Typography
                      sx={{ lineHeight: "1", marginBottom: "30px" }}
                      variant="signupSubtitle"
                    >
                      {titles[step]}
                    </Typography>

                    <form className="form" onSubmit={formik.handleSubmit}>
                      {CurrentPage(formik)}
                      <BaseButton
                        text={"Отправить заявку"}
                        width={"200px"}
                        type={"submit"}
                        isLoading={loading}
                      />
                    </form>
                  </>
                )}
                {submittedForm && <Verification email={formik.values.email} />}
              </div>
            </Box>
          </Container>
        </Box>
        {/* <ErrorPage /> */}
      </ThemeProvider>
    </>
  );
};

export default SignupPage;
