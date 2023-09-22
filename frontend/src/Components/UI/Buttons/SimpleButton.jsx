import React from "react";
import { CircularProgress, styled } from "@mui/material";
import { Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import { palette } from "../../../Utils/Constants";

// const StyledButton = styled(Button)`
//   background-color: ${palette.active};
//   height: 42px;
//   width: 200px;
//   border-radius: 10px;
//   padding: 12px 0;
//   display: flex;
//   justifycontent: center;
//   alignitems: center;
//   color: #fff;
//   transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//   text-transform: none;
//   font-size: 14px;
//   & > svg > svg: {
//     transition: stroke 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
//   }
//   &:hover {
//     background-color: ${palette.activeDark};
//   }
//   &:hover > svg > svg {
//     stroke: #fff;
//   }
// `;

const SimpleButton = (props) => {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <Button
      type={props.type}
      className="base-button"
      sx={{
        width: `${props.width}`,
        backgroundColor: `${palette.active}`,
        height: "42px",
        width: "200px",
        borderRadius: "10px",
        padding: "12px 0",
        display: "flex",
        justifycontent: "center",
        alignitems: "center",
        color: "#fff",
        transition: "0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        textTransform: "none",
        fontSize: "14px",
        [`& > svg > svg`]: {
          transition: "stroke 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        [`&:hover`]: {
          backgroundColor: `${palette.activeDark}`,
        },
        [`&:hover > svg > svg`]: {
          stroke: "#fff",
        },
      }}
      onClick={props.handleClick}
    >
      {props.isLoading ? (
        <CircularProgress
          size={20}
          sx={{
            color: palette.basic,
          }}
        />
      ) : (
        props.text
      )}
    </Button>
  );
};

export default SimpleButton;
