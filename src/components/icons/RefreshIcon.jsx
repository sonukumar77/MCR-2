import React from "react";

const RefreshIcon = ({ svgProps, pathProps }) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...svgProps}>
      <path
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14"
        {...pathProps}
      />
    </svg>
  );
};

export default RefreshIcon;
