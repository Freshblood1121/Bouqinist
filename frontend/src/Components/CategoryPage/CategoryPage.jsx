import React from "react";
import CategorySelect from "../UI/CategorySelect";
import ColumnButton from "../UI/CardsView/ColumnButton";
import RowButton from "../UI/CardsView/RowButton";
import SortSelect from "../UI/SortSelect";
import Divider from "../Divider/Divider";
import { Container, Grid } from "@mui/material";
import CategoryCard from "./CategoryCard/CategoryCard";
import CategoryFilters from "./CategoryFilters/CategoryFilters";
import "./CategoryPage.css";

const CategoryPage = () => {
  const item = {
    id: 1505,
    title: "Production Manager",
    category_id: "413f8def-7a46-3467-b17d-bf0cd1fb1441",
    author: "Olga Hill",
    company: "Kris, Kub and Howell",
    description:
      "Quisquam possimus vel aperiam nemo natus. Quis et maxime in sint.",
    age: 2006,
    status: "Medium",
    image: "https://via.placeholder.com/640x480.png/0022ff?text=molestias",
    price: 12980,
    created_at: "2023-08-17T12:44:16.000000Z",
    updated_at: "2023-08-17T12:44:16.000000Z",
  };
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="space-between" className="ctg__controls">
        <Grid item>
          <RowButton />
          <ColumnButton />
        </Grid>
        <Grid item>
          <CategorySelect />
          <SortSelect />
        </Grid>
      </Grid>
      <Divider />

      <main className="ctg__main">
        <CategoryFilters />

        <div className="category__cards">
          <CategoryCard item={item} />

          <CategoryCard item={item} />

          <CategoryCard item={item} />

          <CategoryCard item={item} />
        </div>
      </main>
    </Container>
  );
};

export default CategoryPage;
