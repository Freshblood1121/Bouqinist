import { Avatar, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { array } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import FavourButton from "../UI/Buttons/FavourButton";

const BookPage = () => {
  const { itemId } = useParams();
  const books = useSelector((store) => store.books.books);
  const book = books.find((item) => item.id == itemId);

  return (
    <Container maxWidth="lg">
      <Grid
        className="books-item"
        container
        marginBottom={1}
        justifyContent="center"
        columnGap="10%"
      >
        <Grid item md={3}>
          <Avatar
            variant="square"
            src={book.image}
            sx={{
              width: "280px",
              height: "420px",
              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item md={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container>
              <Grid item sm={10}>
                <Typography variant="h2">{book.title}</Typography>
              </Grid>
              <Grid item sm={2}>
                <FavourButton></FavourButton>
              </Grid>
            </Grid>

            <div>
              <Typography variant="itemProp">Автор:&nbsp;</Typography>
              <Typography variant="itemValue">{book.author}</Typography>
            </div>
            <div>
              <Typography variant="itemProp">Издатель:&nbsp;</Typography>
              <Typography variant="itemValue">{book.company}</Typography>
            </div>
            <div>
              <Typography variant="itemProp">Год издания:&nbsp;</Typography>
              <Typography variant="itemValue">{book.age}</Typography>
            </div>
            <div>
              <Typography variant="itemProp">Состояние:&nbsp;</Typography>
              <Typography variant="itemValue">{book.status}</Typography>
            </div>
            <div>
              <Typography paddingTop={1}>{book.description}</Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookPage;
