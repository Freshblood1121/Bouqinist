import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { array } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const BookPage = () => {
  const { itemId } = useParams();
  const books = useSelector((store) => store.books.books);
  const book = books.find((item) => item.id == itemId);

  console.log(book);

  return (
    <Grid className="books-item" container padding={2} marginBottom={1}>
      <Grid item md={4}>
        <Avatar
          variant="square"
          src={book.image}
          sx={{
            width: 1 / 1,
            height: 1 / 1,
            borderRadius: "16px",
          }}
        />
      </Grid>
      <Grid item md={8} paddingLeft={2}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h3>{book.title}</h3>
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
  );
};

export default BookPage;
