import React, { useState } from "react";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { palette } from "../../../Utils/Constants";

const Cart = () => {
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
    <ShoppingCartSimple
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

export default Cart;
