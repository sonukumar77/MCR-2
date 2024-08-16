import React from "react";

const ArrowIcon = ({ svgProps, polyLineProps }) => {
  return (
    <svg {...svgProps}>
      <g id="Complete">
        <g id="arrow-left">
          <g>
            <polyline
              id="Right-2"
              fill="none"
              stroke="rgb(37, 99, 235)"
              strokeWidth="2"
              points="7.6 7 2.5 12 7.6 17"
              data-name="Right"
              {...polyLineProps}
            />
            <line
              x1="21.5"
              x2="4.8"
              y1="12"
              y2="12"
              fill="none"
              stroke="rgb(37, 99, 235)"
              strokeWidth="2"
              {...polyLineProps}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ArrowIcon;
