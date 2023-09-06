import React, { useState } from "react";
import { User } from "@phosphor-icons/react";
import { palette } from "../../../Utils/Constants";

const Account = () => {
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
    <User
      size={25}
      color={color}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "fill 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        marginTop: "2px",
      }}
    />
  );
};

export default Account;
