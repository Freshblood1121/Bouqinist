import React from "react";
import { IconButton, SvgIcon, styled } from "@mui/material";
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
const StyledButton = styled(IconButton)`
  width: 57px;
  height: 46px;
  border-radius: 20px;
  border: 2px solid var(--gray-800, #3d3c3c);
  padding: 14px 22px;
  display: flex;
  justifycontent: center;
  alignitems: center;
  background: #fff;
  color: var(--gray-800, #3d3c3c);
  transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  & > svg > svg: {
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  &:hover {
    background-color: #3ab8eb;
  }
  &:hover > svg > svg {
    stroke: #fff;
  }
  && .MuiTouchRipple-child {
    background-color: white;
  }
  && .MuiTouchRipple-rippleVisible {
    opacity: 0.3;
    animation-name: ${enterKeyframe};
    animation-duration: 550ms;
    animation-timing-function: ${({ theme }) =>
      theme.transitions.easing.easeInOut};
  }
`;

const FavourButton = () => {
  return (
    <StyledButton>
      <SvgIcon viewBox="-5 -2 24 24">
        <svg
          width="15"
          height="20"
          viewBox="0 0 15 20"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="BOOKMARK_SIMPLE">
            <path
              id="Vector"
              d="M13.5217 19L7.26087 15.087L1 19V1.78261C1 1.57505 1.08245 1.37599 1.22922 1.22922C1.37599 1.08245 1.57505 1 1.78261 1H12.7391C12.9467 1 13.1458 1.08245 13.2925 1.22922C13.4393 1.37599 13.5217 1.57505 13.5217 1.78261V19Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </SvgIcon>
    </StyledButton>
  );
};

export default FavourButton;
