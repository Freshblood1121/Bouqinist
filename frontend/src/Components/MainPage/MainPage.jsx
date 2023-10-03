import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import Categories from "./Categories/Categories";
import Catalog from "./Catalog/Catalog";
import { Box, Container, ThemeProvider, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Store/categories/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories(dispatch);
  }, []);

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
