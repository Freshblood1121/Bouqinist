import React, { forwardRef, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import EmailInput from "../UI/Inputs/EmailInput";
import PasswordInput from "../UI/Inputs/PasswordInput";
import { Link, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../UI/Logo/Logo";
import { closeModal, login } from "../../Store/account/actions";
import BaseButton from "../UI/Buttons/BaseButton";
import * as yup from "yup";
import { useFormik } from "formik";

const style = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    pt: 7,
    outline: 0,
    borderRadius: "20px",
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Login = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.account.isLoggedIn);
  const message = useSelector((store) => store.account.message);

  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string("Введите ваш email")
      .email("Неверный формат e-mail")
      .required("E-mail обязательно к заполнению"),
    password: yup
      .string("Введите ваш пароль")
      .min(8, "Длина пароля должна быть не менее 6 символов")
      .required("Пароль обязателен к заполнению"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      dispatch(login(values.email, values.password))
        .then(() => {
          setLoading(false);
          dispatch(closeModal());
          redirect("/");
        })
        .catch(() => setLoading(false));
    },
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleClick = () => {
    login({ email, password }, dispatch);
  };

  if (isLoggedIn) {
    console.log("is logged in");
    redirect("/");
  } else {
    return (
      <Box ref={ref} sx={style.box}>
        <Logo />
        <form style={style.form} onSubmit={formik.handleSubmit}>
          <EmailInput
            {...formik.getFieldProps(`email`)}
            text={"E-mail"}
            id={"email"}
            name={"email"}
            // autoFocus
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <PasswordInput
            {...formik.getFieldProps(`password`)}
            text={"Пароль"}
            id={"password"}
            name={"password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <BaseButton
            width={"150px"}
            text={"Войти"}
            handleClick={handleClick}
            isLoading={loading}
            type={"submit"}
          />
          <Typography variant="errorTitle" sx={{ marginTop: "10px" }}>
            {message}
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="h4"
            sx={{ marginTop: "45px" }}
          >
            <Link to="/signup">Создать учетную запись</Link>
          </Typography>
        </form>
      </Box>
    );
  }
});

export default Login;
