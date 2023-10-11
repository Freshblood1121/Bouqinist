import * as React from "react";
import { Grid, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Box, typography } from "@mui/system";
import { Outlet, useNavigate, useMatch } from "react-router";
import theme from "../Theme";
import { useDispatch, useSelector } from "react-redux";
import { palette } from "../Utils/Constants";
import SimpleButton from "./UI/Buttons/SimpleButton";

const Layout = () => {
  const isLoggedIn = useSelector((store) => store.account.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const match = useMatch("/create");

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/create");
    } else {
      dispatch(openModal());
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box>
          <Header title="Bouqinist" />
          <Outlet />
        </Box>
        <Box sx={{ marginTop: "auto" }}>
          <Container maxWidth="lg">
            <Footer />
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
        }}
      >
        {!match && (
          <SimpleButton
            text="Разместить объявление"
            backgroundColor={palette.active}
            hoverBackgroundColor={palette.activeDark}
            height={"32px"}
            width={"200px"}
            handleClick={handleClick}
            sx={{
              position: { xs: "fixed" },
              bottom: { xs: "10px" },
              zIndex: { xs: "10000" },
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              display: { sm: "none" },
            }}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
