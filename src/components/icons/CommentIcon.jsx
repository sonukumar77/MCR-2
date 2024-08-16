const CommentIcon = ({ svgProps, pathProps }) => {
  return (
    <svg width="800" height="800" viewBox="0 0 32 32" {...svgProps}>
      <path
        d="M16 0C7.164 0 0 6.269 0 14c0 4.419 2.345 8.354 6 10.919V32l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14S24.836 0 16 0"
        fillRule="evenodd"
        {...pathProps}
      />
    </svg>
  );
};

export default CommentIcon;
