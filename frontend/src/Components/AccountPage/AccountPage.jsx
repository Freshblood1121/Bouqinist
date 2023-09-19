import {
  Box,
  Container,
  Fade,
  Grid,
  Tab,
  Tabs,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { palette } from "../../Utils/Constants";
import EmailInput from "../UI/Inputs/AccountInputs/EmailInput";
import TelInput from "../UI/Inputs/AccountInputs/TelInput";
import BaseInput from "../UI/Inputs/AccountInputs/BaseInput";
import CountrySelect from "../UI/Inputs/AccountInputs/CountrySelect";
import GenderSelect from "../UI/Inputs/AccountInputs/GenderSelect";
import DateInput from "../UI/Inputs/AccountInputs/DateInput";
import { useFormik } from "formik";
import * as yup from "yup";
import BasicData from "./BasicData";
import ChangePassword from "./ChangePassword";

const AccountPage = () => {
  const isLoggedIn = useSelector((store) => store.account.isLoggedIn);
  const user = useSelector((store) => store.account.user);

  // if (!isLoggedIn) {
  //   redirect("/");
  // }
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sectionProps = (index) => {
    return {
      id: `account-tab-${index}`,
      "aria-controls": `account-tabpanel-${index}`,
    };
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Grid
          item
          md={2}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"20px"}
        >
          <Typography variant="sidebarItem">Объявления</Typography>
          <Typography variant="sidebarItem">Заказы</Typography>
          <Typography variant="sidebarItem">Избранное</Typography>
          <Typography variant="sidebarItem">Настройки</Typography>
        </Grid>
        <Grid
          md={7}
          item
          display={"flex"}
          flexDirection={"column"}
          rowGap={"40px"}
        >
          <Box>
            <Typography variant="title">Настройки аккаунта</Typography>
          </Box>
          <Box
            display={"flex"}
            sx={{
              // borderBottom: `3px solid ${palette.basic}`,
              // paddingBottom: "20px",
              position: "relative",
              [`&::before`]: {
                content: `""`,
                display: "block",
                width: "100%",
                height: "3px",
                position: "absolute",
                bottom: "0",
                zIndex: "2",
                backgroundColor: `${palette.gray300}`,
              },
            }}
          >
            <Tabs value={value} onChange={handleChange}>
              <Tab
                disableRipple
                label="Основные сведения"
                {...sectionProps(0)}
              />
              <Tab disableRipple label="Смена пароля" {...sectionProps(1)} />
              <Tab
                disableRipple
                label="Подтверждение почты"
                {...sectionProps(2)}
              />
            </Tabs>
            {/* <Typography variant="boldSubtitle1">Основные сведения</Typography> */}
          </Box>
          <BasicData value={value} index={0} />
          <ChangePassword value={value} index={1} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountPage;
