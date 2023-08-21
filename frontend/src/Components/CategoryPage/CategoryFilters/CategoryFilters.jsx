import React from "react";
import { TextField, Typography } from "@mui/material";
import "./CategoryFilters.css";

const CategoryFilters = () => {
  return (
    <div className="ctg__filters filters">
      <div className="filters__publish-period filters-publish-period">
        <Typography variant="h3">Период издания</Typography>
        <div className="publish-period__inputs">
          <TextField variant="outlined" />
          <TextField variant="outlined" />
        </div>
      </div>
      <div className="filters__price filters-price">
        <Typography variant="h3">Цена, &#x20bd;</Typography>
        <div className="price__inputs">
          <TextField variant="outlined" sx={{ width: 150 }} />
          <TextField variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
