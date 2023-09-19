import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <img
            src="/img/error.svg"
            alt="Непредвиденная ошибка"
            width={"300px"}
            height={"300px"}
          />
          <Typography variant="h2" marginBottom={"30px"} textAlign={"center"}>
            Что-то пошло не так!
          </Typography>
          <Typography variant="h3" marginBottom={"20px"} textAlign={"center"}>
            Пожалуйста, обновите страницу или попробуйте позже
          </Typography>
          <Link to={"/"}>
            <Typography variant="subtitle1" textAlign={"center"}>
              Перейти на главную страницу
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default ErrorPage;
