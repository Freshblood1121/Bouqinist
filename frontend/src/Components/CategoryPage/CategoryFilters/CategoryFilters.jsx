import React, { Suspense, lazy } from "react";
import { CircularProgress, Typography } from "@mui/material";
import "./CategoryFilters.css";

const PeriodFilter = lazy(() => import("../../UI/PeriodFilter/PeriodFilter"));
const PriceFilter = lazy(() => import("../../UI/PriceFilter/PriceFilter"));

const CategoryFilters = () => {
  return (
    <div className="ctg__filters filters">
      <div className="filters__publish-period">
        <Typography variant="subtitle2">Год издания</Typography>
        <div className="publish-period__inputs">
          <Suspense fallback={<CircularProgress />}>
            <PeriodFilter />
          </Suspense>
        </div>
      </div>
      <div className="filters__price">
        <Typography variant="subtitle2">Цена, &#x20bd;</Typography>
        <div className="price__inputs">
          <Suspense fallback={<CircularProgress />}>
            <PriceFilter />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
