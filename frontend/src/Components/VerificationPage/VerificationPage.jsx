import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const VerificationPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <img
            src="/img/account/success-anim.png"
            alt="Успешное подтверждение электронной почты"
          />
          <Typography variant="h2" marginBottom={"30px"}>
            Ваша учетная запись подтверждена!
          </Typography>
          <Link to={"/"}>
            <Typography variant="h3" textAlign={"center"}>
              Перейти на главную страницу
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VerificationPage;
