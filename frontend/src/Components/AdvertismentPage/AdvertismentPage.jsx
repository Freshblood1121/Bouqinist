import {
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import FavourButton from "../UI/Buttons/FavourButton";
import AuthService from "../../Services/auth.service";
import { palette } from "../../Utils/Constants";

const BookPage = () => {
  const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    AuthService.getBookById(itemId).then((data) => {
      console.log(data);
      setBook(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container maxWidth="lg">
      {!isLoading ? (
        <Grid
          className="books-item"
          container
          marginBottom={1}
          justifyContent="center"
          columnGap="10%"
        >
          <Grid item md={3}>
            <img
              src={`/public/${book.image}`}
              style={{
                width: "240px",
                display: "block",
              }}
            />
          </Grid>
          <Grid item md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                columnGap: "50px",
                rowGap: "20px",
              }}
            >
              <Grid container>
                <Grid item sm={10}>
                  <Stack>
                    <Typography
                      variant="boldSubtitle1"
                      sx={{
                        color: palette.basic,
                        lineHeight: "inherit",
                      }}
                    >
                      {book.title}
                    </Typography>
                    <Typography
                      variant="boldSubtitle2"
                      sx={{ color: palette.light }}
                    >
                      {book.author}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item sm={2}>
                  <Typography
                    component={"div"}
                    variant="boldSubtitle1"
                    sx={{
                      color: palette.basic,
                      lineHeight: "inherit",
                    }}
                  >
                    {book.price}&nbsp;&#8381;
                  </Typography>
                </Grid>
              </Grid>

              <Stack display={"flex"} direction={"column"} rowGap={"5px"}>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightSubtitle2">
                    Издательство:&nbsp;
                  </Typography>
                  <Typography variant="basicMediumText">
                    {book.company}
                  </Typography>
                </Box>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightSubtitle2">
                    Год издания:&nbsp;
                  </Typography>
                  <Typography variant="basicMediumText">{book.age}</Typography>
                </Box>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightSubtitle2">Продавец:</Typography>
                  <Typography variant="basicMediumText">
                    Фамилия И.О.
                  </Typography>
                </Box>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightSubtitle2">
                    Местоположение:
                  </Typography>
                  <Typography variant="basicMediumText">
                    Страна, адрес
                  </Typography>
                </Box>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightSubtitle2">
                    Способ оплаты:
                  </Typography>
                  <Typography variant="basicMediumText">Наличными</Typography>
                  <Divider
                    orientation="vertical"
                    sx={{
                      backgroundColor: palette.basic,
                      height: "auto",
                      width: "auto",
                    }}
                  />
                  <Typography variant="basicMediumText">
                    Система быстрых платежей
                  </Typography>
                </Box>
              </Stack>

              <Box>
                <Typography
                  variant="basicMediumText"
                  component={"div"}
                  sx={{ textAlign: "justify", color: "#000" }}
                >
                  {book.description}
                </Typography>

                {/* <FavourButton></FavourButton> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid
          className="books-item"
          container
          marginBottom={1}
          justifyContent="center"
          columnGap="10%"
        >
          <Grid item md={3}>
            <Skeleton variant="rectangular" width={300} height={350} />
          </Grid>
          <Grid item md={5}>
            <Stack mb={"50px"}>
              <Skeleton variant="text" sx={{ fontSize: "20px" }} />
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            </Stack>
            <Stack sx={{ flexDirection: "column", rowGap: "5px", mb: "50px" }}>
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            </Stack>
            <Stack>
              <Skeleton variant="rounded" height={190} />
            </Stack>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default BookPage;
