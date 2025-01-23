import "./IPhone14ProColorDeepPurple.css";

export const IPhone14ProColorDeepPurple = ({
  color = "deep-purple",
  className,
  ...props
}) => {
  const variantsClassName = "color-" + color;

  return (
    <img
      className={
        "i-phone-14-pro-color-deep-purple " +
        className +
        " " +
        variantsClassName
      }
      src="i-phone-14-pro-color-deep-purple.svg"
    />
  );
};
