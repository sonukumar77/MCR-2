const TextWithLabel = ({
  label,
  title,
  containerStyle,
  labelStyle,
  titleStyle,
}) => {
  return (
    <div
      className={`flex flex-col justify-start text-start w-1/2 ${containerStyle}`}
    >
      <label className={`text-xs text-gray-700 ${labelStyle}`}>{label}</label>
      <p className={`text-xl ${titleStyle}`}>{title}</p>
    </div>
  );
};

export default TextWithLabel;
