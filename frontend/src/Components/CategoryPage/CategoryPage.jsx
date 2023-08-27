import React, { useEffect, useState } from "react";
import CategorySelect from "../UI/CategorySelect";
import ColumnButton from "../UI/CardsView/ColumnButton";
import RowButton from "../UI/CardsView/RowButton";
import SortSelect from "../UI/SortSelect";
import Divider from "../Divider/Divider";
import { Container, Grid } from "@mui/material";
import CategoryFilters from "./CategoryFilters/CategoryFilters";
import "./CategoryPage.css";
import { API_URL } from "../../Utils/Constants";
import { Outlet } from "react-router-dom";

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

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL.CATEGORIES}`)
      .then((data) => data.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="flex-end"
        direction={{ xs: "column", sm: "row" }}
        className="ctg__controls controls"
      >
        {/* <Grid item>
          <RowButton />
          <ColumnButton />
        </Grid> */}
        <Grid item>
          <div className="controls__select-box">
            <CategorySelect categories={categories} />
            <SortSelect />
          </div>
        </Grid>
      </Grid>
      <Divider />

      <main className="ctg__main">
        <CategoryFilters />
        <Outlet />
      </main>
    </Container>
  );
};

export default CategoryPage;
