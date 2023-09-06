import { SvgIcon } from "@mui/material";
import React from "react";
import { palette } from "../../Utils/Constants";

const DropdownIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill={palette.basic}
        viewBox="0 0 256 256"
      >
        <path
          // fill="currentColor"
          d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"
        ></path>
      </svg>
    </SvgIcon>
  );
};

export default DropdownIcon;
