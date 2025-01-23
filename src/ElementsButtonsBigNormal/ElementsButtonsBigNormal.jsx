import "./ElementsButtonsBigNormal.css";

export const ElementsButtonsBigNormal = ({
  text = "undefined",
  className,
  ...props
}) => {
  return (
    <div className={"elements-buttons-big-normal " + className}>
      <img className="rectangle-4" src="rectangle-40.svg" />
      <div className="big-cta">Big CTA </div>
    </div>
  );
};
