import React, { useState } from "react";
import { Binoculars } from "@phosphor-icons/react";
import { palette } from "../../../Utils/Constants";

const FindIconComponent = () => {
  return <Binoculars size={25} color={`${palette.basic}`} />;
};

export default FindIconComponent;
