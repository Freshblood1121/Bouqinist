import { Alert, Box, Fade, Snackbar, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import BaseAdInput from "../UI/Inputs/CreateAdInputs/BaseAdInput";
import AdCategorySelect from "../UI/Inputs/CreateAdInputs/AdCategorySelect";
import AuthorInput from "../UI/Inputs/CreateAdInputs/AuthorInput";
import MultiLineInput from "../UI/Inputs/CreateAdInputs/MultiLineInput";
import FileUploader from "../UI/Inputs/CreateAdInputs/FileUploader";
import { REQUEST_STATUS, palette } from "../../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Store/categories/actions";
import { Modal } from "@mui/base";
import { useNavigate } from "react-router-dom";

const BasicData = (props) => {
  const categories = useSelector((store) => store.categories.categories);
  const requestStatus = useSelector((store) => store.categories.requestStatus)

  const dispatch = useDispatch();

  useEffect(() => {
    getCategories(dispatch);
  }, []);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      <Fade in={props.step === 0} timeout={500}>
        <Box
          sx={{
            padding: "20px 20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            rowGap: "40px",
            maxWidth: "870px",
          }}
        >
          <Typography variant="boldSubtitle1">1. Основные сведения</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "40px",
            }}
          >
            <BaseAdInput
              label={"Название"}
              {...props.formik.getFieldProps("title")}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.title && Boolean(props.formik.errors.title)
              }
              helperText={
                props.formik.touched.title && props.formik.errors.title
              }
            />
            <AdCategorySelect
              label={"Категория"}
              {...props.formik.getFieldProps("category")}
              formik={props.formik}
              categories={categories}
            />
            <AuthorInput
              label={"Автор"}
              {...props.formik.getFieldProps("author")}
              formik={props.formik}
            />
          </Box>
        </Box>
      </Fade>

      <Fade in={props.step === 0} timeout={500}>
        <Box
          sx={{
            padding: "20px 20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            rowGap: "40px",
            maxWidth: "870px",
          }}
        >
          <Stack rowGap={"20px"}>
            <Typography variant="boldSubtitle1">
              2. Сведения об издании
            </Typography>
            <Typography variant="subtitle2">
              Если у вас нет нужных сведений, то оставьте соответствующее поле
              пустым.
            </Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "40px",
            }}
          >
            <BaseAdInput
              label={"Издательство"}
              {...props.formik.getFieldProps("publisher")}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.publisher &&
                Boolean(props.formik.errors.publisher)
              }
              helperText={
                props.formik.touched.publisher && props.formik.errors.publisher
              }
            />
            <BaseAdInput
              label={"Год издания"}
              {...props.formik.getFieldProps("age")}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.touched.age && Boolean(props.formik.errors.age)
              }
              helperText={props.formik.touched.age && props.formik.errors.age}
            />
          </Box>
        </Box>
      </Fade>

      <Fade in={props.step === 0} timeout={500}>
        <Box
          sx={{
            padding: "20px 20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            rowGap: "40px",
            maxWidth: "870px",
          }}
        >
          <Stack rowGap={"20px"}>
            <Typography variant="boldSubtitle1">3. Изображения</Typography>
            <Typography variant="subtitle2">
              Перетащите фото сюда или
              <FileUploader
                text={" выберите их на своем устройстве…"}
                {...props.formik.getFieldProps("images")}
                formik={props.formik}
              />
            </Typography>
            {props.formik.errors && (
              <Typography
                variant="lightHelperText"
                sx={{ color: palette.warning }}
              >
                {props.formik.errors.images}
              </Typography>
            )}
            <Typography variant="lightHelperText">
              Первое фото будет отображаться в результатах поиска. Выберите
              наиболее удачное. Вы можете загрузить до 5 фотографий в формате
              JPG, PNG или WEBP. Разрешение каждого изображения не должно быть
              более 400px х 600px.
            </Typography>
          </Stack>
        </Box>
      </Fade>

      <Fade in={props.step === 0} timeout={500}>
        <Box
          sx={{
            padding: "20px 20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            rowGap: "40px",
            maxWidth: "870px",
          }}
        >
          <Typography variant="boldSubtitle1">4. Описание</Typography>
          <MultiLineInput
            {...props.formik.getFieldProps("description")}
            formik={props.formik}
            error={
              props.formik.touched.description &&
              Boolean(props.formik.errors.description)
            }
            helperText={
              props.formik.touched.description &&
              props.formik.errors.description
            }
          />
        </Box>
      </Fade>
      {requestStatus.status == REQUEST_STATUS.FAILURE && (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
            variant="filled"
          >
            {`${requestStatus.error}. Вы будете переведены на главную страницу`}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default BasicData;
