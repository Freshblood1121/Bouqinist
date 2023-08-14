import React from "react";
import { Button, SvgIcon, styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import { palette } from "../../Utils/Constants";

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

const CategoryButton = styled(Button)`
  width: calc(100% - 9px);
  height: 80px;
  border-radius: 10px;
  border: 2px solid ${palette.basic};
  background: white;
  box-shadow: 9px 15px 0px 0px ${palette.warning};
  text-align: center;
  padding: 0;
  color: ${palette.basic};
  font-size: 24px;
  line-height: normal;
  text-transform: none;
  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: 9px 15px 0px 0px ${palette.hover};
    background-color: white;
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

export default CategoryButton;
