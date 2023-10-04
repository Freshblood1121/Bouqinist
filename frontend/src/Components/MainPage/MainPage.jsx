import React, { Suspense, lazy, useEffect } from "react";
import PropTypes from "prop-types";
// import Hero from "./Hero/Hero";
// import Popular from "./Popular/Popular";
// import Categories from "./Categories/Categories";
// import Catalog from "./Catalog/Catalog";
import { Box, Container, ThemeProvider, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Store/categories/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories(dispatch);
  }, []);

  const Hero = lazy(() => import("./Hero/Hero"));
  const Popular = lazy(() => import("./Popular/Popular"));
  const Categories = lazy(() => import("./Categories/Categories"));
  const Catalog = lazy(() => import("./Catalog/Catalog"));

  return (
    <main>
      <Container maxWidth="lg">
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Popular />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Categories />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Catalog />
        </Suspense>
      </Container>
    </main>
  );
};

export default MainPage;
