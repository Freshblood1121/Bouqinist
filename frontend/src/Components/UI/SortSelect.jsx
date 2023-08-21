import React, { useEffect, useRef, useState } from "react";
import {
  styled,
  MenuItem,
  Select,
  createTheme,
  ThemeProvider,
  FormControl,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { keyframes } from "@emotion/react";
import { palette } from "../../Utils/Constants";

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          "--Select-brandBorderColor": `${palette.basic}`,
          "--Select-brandBorderHoverColor": `${palette.hover}`,
          "--Select-brandBorderFocusedColor": `${palette.basic}`,
          transition: "0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          width: "300px",
          height: "50px",
          borderRadius: "20px",
          boxShadow: `6px 7px 0px 0px ${palette.warning}`,
          // "&:before": {
          //   content: '""',
          //   display: "block",
          //   position: "absolute",
          //   width: "100%",
          //   height: "40px",
          //   bottom: "-20px",
          //   backgroundColor: "white",
          //   borderLeft: `2px solid ${palette.basic}`,
          //   borderRight: `2px solid ${palette.basic}`,
          //   transform: "translateZ(-1px)",
          // },
          "&:hover": {
            backgroundColor: `${palette.hover}`,
            boxShadow: "none",
          },
          "& .Mui-focused": {
            color: "var(--Select-brandBorderFocusedColor)",
            boxShadow: "none",
          },
          // "&.Mui-focused:before": {
          //   // Подобрать селектор для псевдоэлемента, когда Select в состоянии focused и его аттрибут aria-expanded равен "true"
          //   content: '""',
          //   display: "block",
          //   position: "absolute",
          //   width: "100%",
          //   height: "40px",
          //   bottom: "-20px",
          //   backgroundColor: "white",
          //   borderLeft: `2px solid ${palette.basic}`,
          //   borderRight: `2px solid ${palette.basic}`,
          //   transform: "translateZ(-1px)",
          // },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderWidth: "2px",
          borderColor: "var(--Select-brandBorderColor)",
          transition: "0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            // borderColor: "var(--Select-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--Select-brandBorderFocusedColor)",
          },
          [`&.Mui-focused`]: {
            backgroundColor: `${palette.hover}`,
            boxShadow: "none",
            position: "relative",
            zIndex: "5",
            transformStyle: "preserve-3d",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "--Select-brandBorderColor": `${palette.basic}`,
          boxShadow: "none",
          border: "2px solid var(--Select-brandBorderColor)",
          borderRadius: "20px",
          // borderTop: "0",
          // borderRadius: "0 0 20px 20px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          paddingTop: "6px",
        },
      },
    },
    // MuiFilledInput: {
    //   styleOverrides: {
    //     root: {
    //       "&:before, &:after": {
    //         borderBottom: "2px solid var(--Select-brandBorderColor)",
    //       },
    //       "&:hover:not(.Mui-disabled, .Mui-error):before": {
    //         borderBottom: "2px solid var(--Select-brandBorderHoverColor)",
    //       },
    //       "&.Mui-focused:after": {
    //         borderBottom: "2px solid var(--Select-brandBorderFocusedColor)",
    //       },
    //     },
    //   },
    // },
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       "&:before": {
    //         borderBottom: "2px solid var(--Select-brandBorderColor)",
    //       },
    //       "&:hover:not(.Mui-disabled, .Mui-error):before": {
    //         borderBottom: "2px solid var(--Select-brandBorderHoverColor)",
    //       },
    //       "&.Mui-focused:after": {
    //         borderBottom: "2px solid var(--Select-brandBorderFocusedColor)",
    //       },
    //     },
    //   },
    // },
  },
});

const SortSelect = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  // Динамически определяем позицию dropdown-меню и меняем его позицию.

  const inputComponent = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(
      inputComponent.current
        ? inputComponent.current.getBoundingClientRect().bottom + 2
        : 0
    );
  }, [inputComponent]);

  console.log(inputComponent);
  console.log(inputComponent.current);

  // useEffect(() => {}, [inputComponent.])

  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="outlined">
        <Select
          ref={inputComponent}
          MenuProps={{
            PaperProps: { sx: { top: `${position}px !important` } },
          }}
          id="simple-select"
          value={category}
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={"Художественные"}>Дороже</MenuItem>
          <MenuItem value={"Научные"}>Дешевле</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default SortSelect;
