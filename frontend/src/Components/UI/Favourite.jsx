import React, { useState } from "react";
import { BookmarkSimple } from "@phosphor-icons/react";
import { palette } from "../../Utils/Constants";

const Favourite = () => {
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
    <BookmarkSimple
      size={25}
      color={color}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    />
  );
};

export default Favourite;
