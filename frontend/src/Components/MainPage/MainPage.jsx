import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Hero from "./Hero/Hero";
import { useSelector, useDispatch } from "react-redux";
import { getBooksData } from "../../Store/books/actions";
import { useEffect } from "react";
import Popular from "./Popular/Popular";
import Categories from "./Categories/Categories";
import Catalog from "./Catalog/Catalog";
import { Box, Container, ThemeProvider } from "@mui/material";

const MainPage = () => {
  return (
    <main>
      <Container maxWidth="lg">
        <Hero />
        <Popular />
        <Categories />
        <Catalog />
      </Container>
    </main>
  );
};

export default MainPage;
