import React, { useEffect, useRef, useState } from "react";
import {
  MenuItem,
  Select,
  createTheme,
  ThemeProvider,
  FormControl,
  Divider,
  InputLabel,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { palette } from "../../Utils/Constants";
import { CaretDown } from "@phosphor-icons/react";
import DropdownIcon from "./DropdownIcon";
import { useDispatch, useSelector } from "react-redux";
import { setSorting } from "../../Store/books/actions";

const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const theme = createTheme({
  typography: {
    fontFamily: ["Golos UI", "Arial", "sans-serif"].join(","),
    fontSize: 16,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          "--Select-brandBorderColor": `${palette.basic}`,
          "--Select-brandBorderHoverColor": `${palette.hover}`,
          "--Select-brandBorderFocusedColor": `${palette.basic}`,
          transition: "0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          width: "165px",
          height: "50px",
          borderRadius: "20px",
          boxShadow: `6px 7px 0px 0px ${palette.categoryBG}`,
          fontSize: "16px",
          "& .MuiSelect-select": {
            paddingLeft: "30px",
          },
          "&:hover": {
            backgroundColor: `${palette.hover}`,
            boxShadow: "none",
          },
          "& .Mui-focused": {
            color: "var(--Select-brandBorderFocusedColor)",
            boxShadow: "none",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          left: "5px",
          top: "-4px",
          color: `${palette.basic}`,
          fontSize: "16px",
          "&.Mui-focused": {
            zIndex: 6,
            color: `${palette.basic}`,
          },
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
          color: `${palette.basic}`,
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
          scrollbarWidth: "thin",
          scrollbarColor: `${palette.hover} transparent`,
          [`&::-webkit-scrollbar`]: {
            width: "5px",
          },
          [`&::-webkit-scrollbar-track`]: {
            backgroundColor: "transparent",
            marginTop: "10px",
            marginBottom: "10px",
          },
          [`&::-webkit-scrollbar-track-piece`]: {
            backgroundColor: "transparent",
          },
          [`&::-webkit-scrollbar-thumb`]: {
            borderRadius: "10px",
            backgroundColor: `${palette.light}`,
          },
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
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: `${palette.basic}`,
          paddingLeft: "30px",
          fontSize: "16px",
          [`&.Mui-selected`]: {
            backgroundColor: `${palette.active} !important`,
            borderTop: `2px solid ${palette.basic}`,
            borderBottom: `2px solid ${palette.basic}`,
            color: `${palette.basic}`,
          },
        },
      },
    },
  },
});

const SortSelect = () => {
  const chosenSorting = useSelector((store) => store.books.sorting.sortName);

  const [sort, setSort] = useState(chosenSorting);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSort(event.target.value);
    if (event.target.value == "Дешевле") {
      dispatch(
        setSorting({
          sortKey: "price",
          sortType: "ASC",
          sortName: event.target.value,
        })
      );
    } else if (event.target.value == "Дороже") {
      dispatch(
        setSorting({
          sortKey: "price",
          sortType: "DESC",
          sortName: event.target.value,
        })
      );
    }
  };

  // Определяем позицию dropdown-меню и опускаем его на 2px ниже компонента Select

  // const inputSortComponent = useRef(null);
  // const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   setPosition(
  //     inputSortComponent.current
  //       ? inputSortComponent.current.getBoundingClientRect().bottom + 2
  //       : 0
  //   );
  // }, [inputSortComponent]);

  const IconComponent = (props) => {
    return <DropdownIcon inheritViewBox {...props} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="outlined">
        {sort == "" ? (
          <InputLabel shrink={false}>Сортировать</InputLabel>
        ) : null}
        <Select
          // ref={inputSortComponent}
          // MenuProps={{
          //   PaperProps: { sx: { top: `${position}px !important` } },
          // }}
          id="simple-select"
          value={sort}
          onChange={handleChange}
          fullWidth
          IconComponent={IconComponent}
        >
          <MenuItem value={"Дороже"}>Дороже</MenuItem>
          <MenuItem value={"Дешевле"}>Дешевле</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default SortSelect;
