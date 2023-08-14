import React from "react";
import "./Hero.css";
import Divider from "../../Divider/Divider";
import {
  FormControl,
  Grid,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import Search from "../../../img/search.svg";
import SearchIconComponent from "../../Icons/SearchIconComponent";
import FindIconComponent from "../../Icons/FindIconComponent";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Grid
          container
          columnSpacing={{ xs: 0, lg: 6 }}
          sx={{
            justifyContent: {
              xs: "center",
              lg: "start",
              xlg: "start",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            lg={6}
            display={"flex"}
            justifyContent={"center"}
          >
            <div className="hero_left">
              <div className="hero_title">
                <Typography variant="h1">
                  Какую книгу
                  <br />
                  вы ищете?
                </Typography>
                <p className="hero_left_text1">Найдите книгу себе по душе</p>
                <img
                  className="hero_title_img"
                  src="/img/book_gif.png"
                  alt="book"
                />
              </div>

              <div className="hero_search">
                <form className="hero_search_form">
                  <TextField
                    variant="outlined"
                    placeholder="Введите название книги или ее автора"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIconComponent />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: "calc(100% - 3px)",
                      marginBottom: "35px",
                    }}
                  ></TextField>
                </form>
              </div>
              <div className="hero_explorer">
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  endIcon={<FindIconComponent />}
                  sx={{
                    textTransform: "none",
                    border: "2px solid black",
                    borderRadius: "20px",
                    padding: "0 27px 0",
                    minWidth: "160px",
                    maxWidth: "100%",
                    minHeight: "57px",
                    margin: "0",
                    boxShadow: "none",
                  }}
                >
                  Найти
                </Button>
                <Divider />
              </div>
            </div>
          </Grid>
          <Grid item xs={0} lg={6}>
            <div className="hero_right">
              <img
                className="hero_right_img"
                src="/img/banner_img.jpg"
                alt="banner"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Hero;
