const Avatar = ({ src, altText, onClick, containerStyle, imageStyle }) => {
  return (
    <div className={`${containerStyle}`} onClick={onClick}>
      <img src={src} alt={altText} className={`${imageStyle}`} />
    </div>
  );
};

export default Avatar;
