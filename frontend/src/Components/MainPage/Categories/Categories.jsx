import React, { useEffect } from "react";
import "./Categories.css";
import { Button, Grid } from "@mui/material";
import CategoryButton from "../../UI/CategoryButton";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Store/categories/actions";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((store) => store.categories.categories);

  return (
    <div className="ctgs">
      <div className="ctgs__title">
        <img src="./img/folder_no.svg" alt="folder" />
        <h3 className="ctgs__h3">Категории</h3>
      </div>

      <div className="ctgs__btns">
        <Grid container columns={12} columnSpacing={3} rowSpacing={5}>
          {categories.map((category, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} lg={4}>
                <Link to={`/categories/${category.id}`}>
                  <CategoryButton>{category.title}</CategoryButton>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Categories;
