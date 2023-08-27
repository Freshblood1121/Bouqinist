import React from "react";
import { TextField, Typography } from "@mui/material";
import "./CategoryFilters.css";
import PeriodFilter from "../../UI/PeriodFilter/PeriodFilter";
import PriceFilter from "../../UI/PriceFilter/PriceFilter";

const CategoryFilters = () => {
  return (
    <div className="ctg__filters filters">
      <div className="filters__publish-period">
        <Typography variant="subtitle2">Год издания</Typography>
        <div className="publish-period__inputs">
          <PeriodFilter />
        </div>
      </div>
      <div className="filters__price">
        <Typography variant="subtitle2">Цена, &#x20bd;</Typography>
        <div className="price__inputs">
          {/* <TextField variant="outlined" sx={{ width: 150 }} />
          <TextField variant="outlined" /> */}
          <PriceFilter />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
