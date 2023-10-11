import React from "react";
import { CircularProgress, styled, Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import { palette } from "../../../Utils/Constants";

const SimpleButton = (props) => {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <Button
      type={props.type}
      className="base-button"
      sx={{
        width: props.width ? `${props.width}` : "300px",
        height: props.height ? `${props.height}` : "42px",
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : `${palette.gray500}`,
        borderRadius: "10px",
        padding: "12px 0",
        display: "flex",
        justifycontent: "center",
        alignitems: "center",
        color: "#fff",
        transition: "background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        textTransform: "none",
        fontSize: "14px",
        [`& > svg > svg`]: {
          transition: "stroke 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        [`&:hover`]: {
          backgroundColor: props.hoverBackgroundColor
            ? props.hoverBackgroundColor
            : `${palette.basic}`,
        },
        [`&:hover > svg > svg`]: {
          stroke: "#fff",
        },
        ...props.sx,
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
