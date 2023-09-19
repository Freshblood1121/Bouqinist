import React from "react";
import { styled } from "@mui/material";
import { Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import { palette } from "../../../Utils/Constants";

// const enterKeyframe = keyframes`
//   0% {
//     transform: scale(0);
//     opacity: 0.1;
//   }
//   100% {
//     transform: scale(1);
//     opacity: 0.3;
//   }
// `;

const StyledButton = styled(Button)`
  color: var(--gray-800, #3d3c3c);
  font-size: 20px;
  text-transform: none;
  &:hover {
    background-color: var(--gray-600, ${palette.gray300});
  }
`;

const SignupNavButton = ({ text, handleClick, className, disabled }) => {
  return (
    <StyledButton
      className={`step-button ${className}`}
      size="small"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default SignupNavButton;
