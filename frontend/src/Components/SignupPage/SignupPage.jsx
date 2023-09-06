import {
  Box,
  Container,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import theme from "../../Theme";
import "./SignupPage.css";
import { Formik, useFormik } from "formik";
import BaseSignupInput from "../UI/Inputs/SignupInputs/BaseSignupInput";
import PasswordSignupInput from "../UI/Inputs/SignupInputs/PasswordSignupInput";
import SignupNavButton from "../UI/Buttons/SignupNavButton";
import { MuiTelInput } from "mui-tel-input";
import CountryInput from "../UI/Inputs/SignupInputs/CountryInput";
import DateInput from "../UI/Inputs/SignupInputs/DateInput";
import BaseButton from "../UI/Buttons/BaseButton";
import GenderSelect from "../UI/Inputs/SignupInputs/GenderSelect";
import { API_URL } from "../../Utils/Constants";

const SignupPage = () => {
  const [step, setStep] = useState(0);
  const titles = ["Основные сведения", "Дополнительные сведения", ""];
  const CurrentPage = (formik) => {
    if (step === 0) {
      return (
        <>
          <BaseSignupInput
            name={"email"}
            text={"E-mail"}
            id={"email"}
            {...formik.getFieldProps(`email`)}
          />
          <BaseSignupInput
            name={"firstName"}
            text={"Имя"}
            id={"firstName"}
            {...formik.getFieldProps(`firstName`)}
          />
          <BaseSignupInput
            name={"lastName"}
            text={"Фамилия"}
            id={"lastName"}
            {...formik.getFieldProps(`lastName`)}
          />
          <PasswordSignupInput
            name={"password"}
            text={"Пароль"}
            id={"password"}
            {...formik.getFieldProps(`password`)}
            // value={values.password}
            // handleChange={handleChange}
          />
          <PasswordSignupInput
            text={"Повторите пароль"}
            id={"confirmedPassword"}
            name={"confirmedPassword"}
            {...formik.getFieldProps(`confirmedPassword`)}
            // value={values.confirmPassword}
            // handleChange={handleChange}
          />
          <SignupNavButton
            handleClick={handleNext}
            text={"Далее"}
            className={`step-forward ${step == 0 ? "visible" : "hidden"}`}
          />
        </>
      );
    } else if (step === 1) {
      return (
        <>
          <MuiTelInput
            id="phone"
            name="phone"
            variant="standard"
            defaultCountry="RU"
            langOfCountryName="RU"
            label="Номер телефона"
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
          <CountryInput
            name={"country"}
            id={"country"}
            text={"Страна"}
            {...formik.getFieldProps(`country`)}
            formik={formik}
          />
          <BaseSignupInput
            text={"Город"}
            name={"city"}
            id={"city"}
            {...formik.getFieldProps(`city`)}
          />
          <GenderSelect
            text={"Пол"}
            id={"gender"}
            name={"gender"}
            {...formik.getFieldProps(`gender`)}
            formik={formik}
          />
          <DateInput
            name={"birthdate"}
            id={"birthdate"}
            {...formik.getFieldProps(`birthdate`)}
            formik={formik}
          />
          <SignupNavButton
            handleClick={handleBack}
            text={"Назад"}
            className={`step-back ${step == 1 ? "visible" : "hidden"}`}
          />
        </>
      );
    }
  };

  const handleBack = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    setStep((currentStep) => currentStep + 1);
  };

  // Делаем поле ввода номера телефона контролируемым

  const [phone, setPhone] = useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const navigate = useNavigate();

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
      birthdate: "",
    },
    // validate,
    onSubmit: (values) => {
      fetch(`${API_URL.REGISTER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password,
            phone: values.phone,
            country: values.country,
            city: values.city,
            gender: values.gender,
            yo: values.birthdate,
          },
          null,
          2
        ),
      })
        .then((response) => response.json())
        .then((data) => navigate("/"));
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
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
                  text={"Зарегистрироваться"}
                  width={"200px"}
                  type={"submit"}
                />
              </form>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SignupPage;
