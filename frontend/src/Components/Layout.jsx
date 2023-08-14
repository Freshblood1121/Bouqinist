import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
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
