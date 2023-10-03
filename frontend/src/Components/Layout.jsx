import * as React from "react";
import { Grid, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Box, typography } from "@mui/system";
import { Outlet } from "react-router";
import theme from "../Theme";

const Layout = () => {
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
    </ThemeProvider>
  );
};

export default Layout;
