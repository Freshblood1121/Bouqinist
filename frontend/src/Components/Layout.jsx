import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Box, typography } from "@mui/system";
import { Outlet } from "react-router";

const sections = [{ title: "Главная", url: "" }];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    itemProp: {
      fontSize: "0.875rem",
      color: "rgb(99, 115, 129)",
    },
    itemValue: {
      fontWeight: "500",
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Bouqinist" sections={sections} />
          <Outlet />
        </Container>
        <Box sx={{ marginTop: "auto" }}>
          <Footer
            title="Bouqinist team"
            description="Откройте дверь в прошлое!"
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
