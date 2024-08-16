const ReTweetIcon = ({ svgProps, pathProps }) => {
  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 24 24"
      stroke="#000000"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...svgProps}
    >
      <path d="M13 18H6V7M3 9l3-3 3 3m2-3h7v11m3-2l-3 3-3-3" {...pathProps} />
    </svg>
  );
};

export default ReTweetIcon;
