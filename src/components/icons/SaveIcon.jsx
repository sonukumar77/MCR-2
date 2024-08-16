const SaveIcon = ({ svgProps, pathProps }) => {
  return (
    <svg width="800" height="800" viewBox="0 0 24 24" fill="none" {...svgProps}>
      <path
        fillRule="evenodd"
        d="M6.75 6l.75-.75h9l.75.75v13.316L12 16.205l-5.25 3.111V6zm1.5.75v9.934L12 14.462l3.75 2.222V6.75h-7.5z"
        fill="#080341"
        {...pathProps}
      />
    </svg>
  );
};
export default SaveIcon;
