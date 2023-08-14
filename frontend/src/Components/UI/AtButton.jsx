import React from "react";
import { IconButton, ThemeProvider, createTheme, styled } from "@mui/material";
import { At } from "@phosphor-icons/react";

const theme = createTheme({
  components: {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const StyledIconButton = styled(IconButton)`
  width: 53px;
  height: 53px;
  text-align: center;
  padding: 0;
  border-radius: 50px 50px 50px 50px;
  border-width: 2px;
  border-style: solid;
  border-color: #676767;
  box-shadow: 5px 5px 1px 1px #3ab8eb;
  transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: var(--yellow-500, #fdbf0f);
  }
`;

const AtButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledIconButton>
        <At size={28} color="#676767" />
      </StyledIconButton>
    </ThemeProvider>
  );
};

export default AtButton;
