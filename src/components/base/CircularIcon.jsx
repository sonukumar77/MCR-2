const CircularIcon = ({ containerStyle, onIconClick, children }) => {
  return (
    <div
      className={`w-8 h-8 rounded-full p-1 bg-black flex justify-center items-center ${containerStyle}`}
      onClick={onIconClick}
    >
      {children}
    </div>
  );
};

export default CircularIcon;
