import { Box, Divider, Fade, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Camera } from "@phosphor-icons/react";
import { palette } from "../../Utils/Constants";
import { useSelector } from "react-redux";

const SummaryStep = (props) => {
  const user = useSelector((store) => store.account.user);

  const [images, setImages] = useState(props.data.images);
  const img = {
    display: "block",
    width: "150px",
  };

  return (
    <>
      <Fade in={props.step === 3} timeout={500}>
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
            <Typography variant="boldSubtitle1">Завершение</Typography>
            <Typography variant="subtitle2">
              Внимательно проверьте указанные сведения и подтвердите создание
              объявления. Если необходимо что-то исправить, нажмите кнопку
              “Назад”.
            </Typography>
          </Stack>
          <Box display={"flex"} columnGap={"50px"}>
            <Box minWidth={"150px"}>
              {/* шаблон */}
              {/* <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"200px"}
                sx={{
                  backgroundColor: palette.gray300,
                  borderRadius: "10px",
                }}
              >
                <Camera size={28} />
              </Box> */}
              <img
                src={images[0].preview}
                style={img}
                // Revoke data uri after image is loaded
                onLoad={() => {
                  URL.revokeObjectURL(images[0].preview);
                }}
              />
            </Box>
            <Stack
              display={"flex"}
              direction={"column"}
              rowGap={"20px"}
              width={"100%"}
            >
              <Stack
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Stack>
                  <Typography
                    variant="boldSubtitle1"
                    sx={{
                      color: palette.basic,
                      lineHeight: "inherit",
                    }}
                  >
                    {props.data.title}
                  </Typography>
                  <Typography
                    variant="boldSubtitle2"
                    sx={{ color: palette.light }}
                  >
                    {props.data.author}
                  </Typography>
                </Stack>
                <Typography
                  variant="boldSubtitle1"
                  sx={{
                    color: palette.basic,
                    textAlign: "end",
                    lineHeight: "inherit",
                  }}
                >
                  {props.data.price}&nbsp;&#8381;
                </Typography>
              </Stack>
              <Stack display={"flex"} direction={"column"} rowGap={"5px"}>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightHelperText">
                    Издательство:
                  </Typography>
                  <Typography variant="basicSmallText">
                    {props.data.publisher}
                  </Typography>
                </Box>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightHelperText">
                    Год издания:
                  </Typography>
                  <Typography variant="basicSmallText">
                    {props.data.age}
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Typography
                  variant="basicSmallText"
                  component={"div"}
                  sx={{ textAlign: "justify", color: "#000" }}
                >
                  {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. N */}
                  {props.data.description}
                </Typography>
              </Box>
              <Stack display={"flex"} direction={"column"} rowGap={"5px"}>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightHelperText">Продавец:</Typography>
                  <Typography variant="basicSmallText">
                    {user.first_name + ` ${user.last_name}`}
                  </Typography>
                </Box>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightHelperText">
                    Местоположение:
                  </Typography>
                  <Typography variant="basicSmallText">
                    {/* Страна, адрес */}
                    {props.data.country + `, ${props.data.location}`}
                  </Typography>
                </Box>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightHelperText">
                    Способ оплаты:
                  </Typography>
                  {props.data.payType.cash && (
                    <Typography variant="basicSmallText">Наличными</Typography>
                  )}
                  {props.data.payType.sbp && (
                    <Divider
                      orientation="vertical"
                      sx={{ backgroundColor: palette.basic }}
                    />
                  )}
                  {props.data.payType.sbp && (
                    <Typography variant="basicSmallText">
                      Система быстрых платежей
                    </Typography>
                  )}
                </Box>
                <Box display={"flex"} columnGap={"10px"}>
                  <Typography variant="lightHelperText">Контакты:</Typography>
                  <Typography variant="basicSmallText">
                    {props.data.email} {props.data.phone}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </>
  );
};

export default SummaryStep;
