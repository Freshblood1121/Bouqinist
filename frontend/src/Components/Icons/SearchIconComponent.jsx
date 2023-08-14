import * as React from "react";
const SearchIconComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#3D3C3C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.875 16.75a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75ZM14.444 14.444 19 19"
    />
  </svg>
);
export default SearchIconComponent;
