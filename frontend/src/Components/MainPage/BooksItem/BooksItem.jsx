import { Avatar, Grid, Typography } from "@mui/material";
import { Box, Container, flexbox } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Booksitem.css";

const BooksItem = (prop) => {
  const item = { ...prop.item };

  return (
    <Link
      to={`/books/${item.id}`}
      style={{
        color: "inherit",
        textDecoration: "inherit",
      }}
    >
      <Grid className="books-item" container padding={2} marginBottom={1}>
        <Grid item md={4}>
          <Avatar
            variant="square"
            src={item.image}
            sx={{
              width: 1 / 1,
              height: 1 / 1,
              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item md={8} paddingLeft={2}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h3>{item.title}</h3>
            <div>
              <Typography variant="itemProp">Автор:&nbsp;</Typography>
              <Typography variant="itemValue">{item.author}</Typography>
            </div>
            <div>
              <Typography variant="itemProp">Издатель:&nbsp;</Typography>
              <Typography variant="itemValue">{item.company}</Typography>
            </div>
            <div>
              <Typography variant="itemProp">Год издания:&nbsp;</Typography>
              <Typography variant="itemValue">{item.age}</Typography>
            </div>
            <div>
              <Typography variant="itemProp">Состояние:&nbsp;</Typography>
              <Typography variant="itemValue">{item.status}</Typography>
            </div>
            <div>
              <Typography paddingTop={1}>{item.description}</Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Link>
  );
};

export default BooksItem;
