import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
  createTheme,
  Tabs,
  Tab,
} from "@mui/material";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { palette } from "../../Utils/Constants";
import { useFormik } from "formik";
import * as yup from "yup";

const BasicData = lazy(() => import("./BasicData"));
const ChangePassword = lazy(() => import("./ChangePassword"));

const AccountPage = () => {
  const isLoggedIn = useSelector((store) => store.account.isLoggedIn);
  const user = useSelector((store) => store.account.user);

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

  // const Tabs = lazy(() => import("@mui/material/Tabs"));
  // const Tab = lazy(() => import("@mui/material/Tab"));

  return (
    <>
      {isLoggedIn && (
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
              // display={"flex"}
              flexDirection={"column"}
              rowGap={"20px"}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
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
              marginBottom={"40px"}
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
                {/* <Suspense fallback={<CircularProgress />}> */}
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // variant="scrollable"
                  // scrollButtons
                  // allowScrollButtonsMobile
                >
                  {/* <Suspense fallback={<CircularProgress />}> */}
                  <Tab
                    disableRipple
                    label="Основные сведения"
                    {...sectionProps(0)}
                    sx={{
                      fontSize: {
                        xs: "16px",
                        lg: "20px",
                      },
                    }}
                  />
                  <Tab
                    disableRipple
                    label="Смена пароля"
                    {...sectionProps(1)}
                    sx={{
                      fontSize: {
                        xs: "16px",
                        lg: "20px",
                      },
                    }}
                  />
                  {/* </Suspense> */}
                </Tabs>
                {/* </Suspense> */}
              </Box>
              <Suspense fallback={<CircularProgress />}>
                <BasicData value={value} index={0} />
              </Suspense>
              <Suspense fallback={<CircularProgress />}>
                <ChangePassword value={value} index={1} />
              </Suspense>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default AccountPage;
