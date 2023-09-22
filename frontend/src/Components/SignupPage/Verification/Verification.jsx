import { Container, Grid, Grow, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL, palette } from "../../../Utils/Constants";
import BaseSignupInput from "../../UI/Inputs/SignupInputs/BaseSignupInput";
import BaseButton from "../../UI/Buttons/BaseButton";
import BaseTextButton from "../../UI/Buttons/BaseTextButton";
import { useDispatch } from "react-redux";
import { verificate } from "../../../Store/account/actions";

const Verification = ({ email }) => {
  // const token = localStorage.getItem("token");
  const [value, setValue] = useState("");
  const [verified, setVerified] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(verificate(email, value))
      .then(() => setVerified(!verified))
      .catch(() => console.log(123));
  };
  return (
    <Container maxWidth="lg">
      {!verified && (
        <>
          <Grow in={!verified}>
            <div className="signup-wrapper" style={{ width: "380px" }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "justify", marginBottom: "50px" }}
              >
                На указанный вами адрес электронной почты было отправлено письмо
                с кодом подтверждения. Пожалуйста, введите полученный код.
              </Typography>
              <BaseSignupInput
                text={"Код подтверждения"}
                name={"code"}
                id={"code"}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                onPaste={(e) => {
                  setValue(event.clipboardData.getData("text"));
                }}
              />
              <BaseTextButton
                sx={{
                  display: "inline-block",
                  marginTop: "28px",
                  marginBottom: "43px",
                  textTransform: "none",
                  color: `${palette.basic}`,
                  borderRadius: "10px",
                }}
                type="submit"
              >
                Отправить код еще раз
              </BaseTextButton>
              <BaseButton
                text={"Подтвердить"}
                handleClick={handleClick}
                width={"200px"}
              />
            </div>
          </Grow>
        </>
      )}
      {verified && (
        <>
          <Grow in={verified}>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid item>
                <img
                  src="/img/account/success-anim.svg"
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
          </Grow>
        </>
      )}
    </Container>
  );
};

export default Verification;
