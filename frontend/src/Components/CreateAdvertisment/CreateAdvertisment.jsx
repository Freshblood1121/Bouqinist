import React, { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Fade,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
  Container,
  CircularProgress,
} from "@mui/material";
import { palette } from "../../Utils/Constants";
import SimpleButton from "../UI/Buttons/SimpleButton";
import { Info, Wallet, Package, Check } from "@phosphor-icons/react";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useFormik } from "formik";
import * as yup from "yup";

import PayType from "../UI/Inputs/CreateAdInputs/PayType";
import AuthService from "../../Services/auth.service";

const BasicData = lazy(() => import("./BasicData"));
const DeliveryStep = lazy(() => import("./DeliveryStep"));
const PaymentStep = lazy(() => import("./PaymentStep"));
const SummaryStep = lazy(() => import("./SummaryStep"));

const CreateAdvertisment = () => {
  const isLoggedIn = useSelector((store) => store.account.isLoggedIn);

  const ColorLibStepIcon = (props) => {
    const { active, completed, error, className } = props;

    const icons = {
      1: <Info size={48} />,
      2: <Wallet size={48} />,
      3: <Package size={48} />,
      4: <Check size={48} />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active, error }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.grey[800]
            : `${palette.basic}`,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.grey[800]
            : `${palette.basic}`,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.grey[800]
          : `${palette.gray300}`,
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#fff",
    zIndex: 1,
    color: `${palette.gray300}`,
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    transition:
      "color 2500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, fill 2500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    ...(ownerState.active && {
      color: `${palette.basic}`,
    }),
    ...(ownerState.completed && {
      color: `${palette.basic}`,
    }),
    ...(ownerState.error && {
      color: `${palette.warning}`,
    }),
  }));

  const steps = ["Сведения", "Оплата", "Получение", "Завершение"];

  const [step, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const [failedStep, setFailedStep] = useState(null);

  const setError = (step) => {
    setFailedStep(step);
  };

  const hideError = () => {
    setFailedStep(null);
  };

  const isStepFailed = (index) => {
    if (index === failedStep) {
      return step === index;
    }
  };

  const basicDataValidationSchema = yup.object({
    title: yup.string().required("Название обязательно к заполнению"),
    // category: yup.string().required("Укажите категорию"),
    author: yup.object({
      authors: yup
        .string()
        .test("is-unknown", "Укажите автора", function (authors) {
          const unknown = this.parent.unknown;
          console.log(unknown);
          if (unknown === false && authors === undefined) {
            return false;
          } else {
            return true;
          }
        }),
      // .required("Укажите автора"),
      unknown: yup.boolean(),
    }),
    publisher: yup.string(),
    age: yup.string(),
    images: yup
      .array()
      // .required("Загрузите хотя бы одну фотографию")
      .test(
        "is-any-images",
        "Вы можете загрузить не более 5 фотографий",
        (images) => images.length < 6
      )
      .test(
        "is-at-least-one-image",
        "Загрузите хотя бы одну фотографию",
        (images) => images.length > 0
      ),
    description: yup.object({
      text: yup.string().required("Поле обязательно к заполнению"),
      charNumber: yup
        .number()
        .max(1000, "Описание должно состоять не более, чем из 1000 символов"),
    }),
  });

  const paymentSchema = yup.object({
    price: yup.number().required("Введите цену товара"),
    payType: yup.object({
      cash: yup
        .boolean()
        .test(
          "is-any-field-checked",
          "Выберите хотя бы один способ оплаты",
          function (cash) {
            const spb = this.parent.sbp;
            console.log(cash, this.parent.sbp);
            if (cash === false && spb === false) {
              return false;
            } else {
              return true;
            }
          }
        ),
      sbp: yup
        .boolean()
        .test(
          "is-any-field-checked",
          "Выберите хотя бы один способ оплаты",
          function (sbp) {
            const cash = this.parent.cash;
            if (sbp === "" && cash === "") {
              return false;
            } else {
              return true;
            }
          }
        ),
    }),
  });

  const deliverySchema = yup.object({
    country: yup.string().required("Поле обязательно к заполнению"),
    location: yup.string().required("Поле обязательно к заполнению"),
    email: yup
      .string()
      .email("Введите корректный e-mail")
      .test(
        "is-any-field-checked",
        "Укажите хотя бы один способ связи",
        function (email) {
          const { phone } = this.parent;
          console.log("phone: ", phone, "email: ", email);
          if (email == undefined && phone == undefined) {
            return false;
          } else {
            return true;
          }
        }
      ),
    phone: yup
      .string()
      .test(
        "is-any-field-checked",
        "Укажите хотя бы один способ связи",
        function (phone) {
          const { email } = this.parent;
          if (email == undefined && phone == undefined) {
            return false;
          } else {
            return true;
          }
        }
      ),
  });

  const formikBasicData = useFormik({
    initialValues: {
      title: "",
      category: { title: "", id: "" },
      author: { authors: "", unknown: false },
      publisher: "",
      age: "",
      images: [],
      description: { text: "", charNumber: 0 },
    },
    validationSchema: basicDataValidationSchema,
    onSubmit: (values) => {
      handleNext();
    },
  });

  const formikPayment = useFormik({
    initialValues: {
      price: "",
      payType: {
        cash: false,
        sbp: false,
      },
    },
    validationSchema: paymentSchema,
    onSubmit: (values) => {
      handleNext();
    },
  });

  const formikDelivery = useFormik({
    initialValues: {
      country: "",
      location: "",
      email: "",
      phone: "",
    },
    validationSchema: deliverySchema,
    onSubmit: (values) => {
      handleNext();
    },
  });

  const handleSubmit = () => {
    console.log("submitted! step: ", step);
    switch (step) {
      case 0:
        formikBasicData.handleSubmit();
        break;
      case 1:
        formikPayment.handleSubmit();
        break;
      case 2:
        formikDelivery.handleSubmit();
        break;
      case 3:
        // formikSummary.handleSubmit();
        handleSubmitForm();
        break;
    }
  };

  const data = {
    title: formikBasicData.values.title,
    category: formikBasicData.values.category,
    publisher: formikBasicData.values.publisher,
    age: formikBasicData.values.age,
    author: formikBasicData.values.author.authors,
    images: formikBasicData.values.images,
    description: formikBasicData.values.description.text,
    price: formikPayment.values.price,
    payType: formikPayment.values.payType,
    country: formikDelivery.values.country,
    location: formikDelivery.values.location,
    email: formikDelivery.values.email,
    phone: formikDelivery.values.phone,
  };
  const navigate = useNavigate();
  const handleSubmitForm = () => {
    const values = new FormData();
    values.append("title", formikBasicData.values.title);
    values.append("image", formikBasicData.values.images[0]);
    // values.append("cetegories", formikBasicData.values.category);
    values.append("categories", formikBasicData.values.category.id);
    values.append("company", formikBasicData.values.publisher);
    values.append("age", formikBasicData.values.age);
    values.append("author", formikBasicData.values.author.authors);
    values.append("description", formikBasicData.values.description.text);
    values.append("price", formikPayment.values.price);
    values.append("payType", formikPayment.values.payType);
    values.append("country", formikDelivery.values.country);
    values.append("location", formikDelivery.values.location);
    values.append("email", formikDelivery.values.email);
    values.append("phone", formikDelivery.values.phone);

    AuthService.createAdvertisment(values).then((response) => {
      console.log(response);
      navigate("/");
    });
  };

  return isLoggedIn ? (
    <Container maxWidth="lg">
      <Typography component={"h2"} variant="pageTitle" sx={{ mb: "40px" }}>
        Новое объявление
      </Typography>
      <Stepper
        alternativeLabel
        activeStep={step}
        connector={<ColorlibConnector />}
        sx={{ mb: "40px" }}
      >
        {steps.map((item, index) => {
          const itemProps = {};
          if (isStepFailed(index)) {
            itemProps.error = true;
          }
          return (
            <Step key={index}>
              <StepLabel
                children={{}}
                StepIconComponent={ColorLibStepIcon}
                {...itemProps}
              >
                <Typography variant="boldSubtitle1">{item}</Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{ paddingBottom: "40px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: `${palette.gray000}`,
              padding: "20px",
              minWidth: "870px",
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
            }}
          >
            {step === 0 && (
              <Suspense fallback={<CircularProgress />}>
                <BasicData step={step} formik={formikBasicData} />
              </Suspense>
            )}
            {step === 1 && (
              <Suspense fallback={<CircularProgress />}>
                <PaymentStep step={step} formik={formikPayment} />
              </Suspense>
            )}
            {step === 2 && (
              <Suspense fallback={<CircularProgress />}>
                <DeliveryStep step={step} formik={formikDelivery} />
              </Suspense>
            )}
            {step === 3 && (
              <Suspense fallback={<CircularProgress />}>
                <SummaryStep step={step} data={data} />
              </Suspense>
            )}
            {step === steps.length && (
              <div>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
              </div>
            )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <SimpleButton handleClick={handleBack} text={"Назад"} />
            {step === steps.length - 1 && (
              <SimpleButton
                handleClick={handleSubmitForm}
                text={"Создать объявление"}
              />
            )}
            {step < steps.length - 1 && (
              <SimpleButton handleClick={handleSubmit} text={"Далее"} />
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default CreateAdvertisment;
