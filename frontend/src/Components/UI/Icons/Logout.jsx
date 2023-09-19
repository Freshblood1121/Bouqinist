import React, { useState } from "react";
import { SignOut } from "@phosphor-icons/react";
import { palette } from "../../../Utils/Constants";

const Logout = (props) => {
  const [color, setColor] = useState(`${palette.basic}`);

  const handleMouseEnter = (e) => {
    e.stopPropagation();
    setColor(palette.hover);
  };

  const handleMouseLeave = (e) => {
    e.stopPropagation();
    setColor(palette.basic);
  };

  return (
    <SignOut
      size={props.size ? props.size : 25}
      color={props.noHover ? null : color}
      onMouseEnter={props.noHover ? null : handleMouseEnter}
      onMouseLeave={props.noHover ? null : handleMouseLeave}
      style={{
        transition: "fill 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        marginTop: "2px",
      }}
    />
  );
};

export default Logout;
