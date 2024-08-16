const HeartIcon = ({ svgProps, pathProps }) => {
  return (
    <svg width="800" height="800" viewBox="0 0 24 24" fill="none" {...svgProps}>
      <path
        d="M2 9.137C2 14 6.019 16.591 8.962 18.911 10 19.729 11 20.5 12 20.5s2-.771 3.038-1.589C17.981 16.591 22 14 22 9.137S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137z"
        {...pathProps}
      />
    </svg>
  );
};

export default HeartIcon;
