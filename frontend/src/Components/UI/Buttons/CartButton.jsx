import React from "react";
import { SvgIcon, styled, Button } from "@mui/material";
import { keyframes } from "@emotion/react";

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
  border-radius: 20px;
  border: 2px solid var(--gray-800, #3d3c3c);
  padding: 10px 5px;
  display: flex;
  justifycontent: center;
  alignitems: center;
  background: var(--yellow-500, #fdbf0f);
  color: var(--gray-800, #3d3c3c);
  transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
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

const CartButton = () => {
  return (
    <StyledButton>
      <SvgIcon viewBox="0 -2 29 29">
        <svg
          width="29"
          height="26"
          viewBox="0 0 29 26"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 24C10.75 24.4142 10.4142 24.75 10 24.75C9.58579 24.75 9.25 24.4142 9.25 24C9.25 23.5858 9.58579 23.25 10 23.25C10.4142 23.25 10.75 23.5858 10.75 24Z"
            fill="#3D3C3C"
            strokeWidth="2"
          />
          <path
            d="M23.75 24C23.75 24.4142 23.4142 24.75 23 24.75C22.5858 24.75 22.25 24.4142 22.25 24C22.25 23.5858 22.5858 23.25 23 23.25C23.4142 23.25 23.75 23.5858 23.75 24Z"
            fill="#3D3C3C"
            strokeWidth="2"
          />
          <path
            d="M5.2875 6H27.7125L24.4125 17.55C24.2948 17.9692 24.0426 18.3381 23.6948 18.6001C23.3471 18.862 22.9229 19.0025 22.4875 19H10.5125C10.0771 19.0025 9.65293 18.862 9.30515 18.6001C8.95738 18.3381 8.70524 17.9692 8.5875 17.55L4.0625 1.725C4.0027 1.51594 3.8764 1.33207 3.70271 1.20125C3.52903 1.07042 3.31744 0.999771 3.1 1H1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SvgIcon>
    </StyledButton>
  );
};

export default CartButton;
