import React, { Suspense, lazy, useEffect } from "react";
import ColumnButton from "../UI/CardsView/ColumnButton";
import RowButton from "../UI/CardsView/RowButton";
import Divider from "../Divider/Divider";
import { CircularProgress, Container, Grid } from "@mui/material";
import CategoryFilters from "./CategoryFilters/CategoryFilters";
import "./CategoryPage.css";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { booksSelectors } from "../../Store";
import { REQUEST_STATUS } from "../../Utils/Constants";
import {
  getAllBooksData,
  getBooksDataByCategory,
} from "../../Store/books/actions";

const SortSelect = lazy(() => import("../UI/SortSelect"));
const CategorySelect = lazy(() => import("../UI/CategorySelect"));

const CategoryPage = () => {
  const dispatch = useDispatch();
  let { categoryId } = useParams();
  const requestStatus = useSelector(booksSelectors.requestStatus);
  const error = useSelector(booksSelectors.error);

  useEffect(() => {
    if (requestStatus === `${REQUEST_STATUS.IDLE}`) {
      if (categoryId == "all") {
        getAllBooksData(dispatch);
      } else {
        getBooksDataByCategory(dispatch, categoryId);
      }
    }
  }, [requestStatus, dispatch]);

  useEffect(() => {
    if (categoryId == "all") {
      getAllBooksData(dispatch);
    } else {
      getBooksDataByCategory(dispatch, categoryId);
    }
  }, [categoryId]);

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
            <Suspense fallback={<CircularProgress />}>
              <CategorySelect />
            </Suspense>
            <Suspense fallback={<CircularProgress />}>
              <SortSelect />
            </Suspense>
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
