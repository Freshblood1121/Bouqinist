import React from "react";
import { CircularProgress, styled, Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import { palette } from "../../../Utils/Constants";

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;

const StyledButton = styled(Button)`
  background-color: #fdbf0f;
  height: 46px;
  width: 150px;
  border-radius: 20px;
  border: 1px solid var(--gray-800, #3d3c3c);
  padding: 10px 5px;
  display: flex;
  justifycontent: center;
  alignitems: center;
  background: var(--yellow-500, #fdbf0f);
  color: var(--gray-800, #3d3c3c);
  transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-transform: none;
  & > svg > svg: {
    transition: stroke 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &:hover {
    background-color: #fc9d09;
  }
  &:hover > svg > svg {
    stroke: #fff;
  }
  && .MuiTouchRipple-child {
    background-color: black;
  }
  && .MuiTouchRipple-rippleVisible {
    opacity: 0.3;
    animation-name: ${enterKeyframe};
    animation-duration: 550ms;
    animation-timing-function: ${({ theme }) =>
      theme.transitions.easing.easeInOut};
  }
`;

const BaseButton = (props) => {
  if (!props.width) {
    return <StyledButton>{props.text}</StyledButton>;
  } else {
    return (
      <StyledButton
        type={props.type}
        className="base-button"
        sx={{ width: `${props.width}` }}
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
      </StyledButton>
    );
  }
};

export default BaseButton;
