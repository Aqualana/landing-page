import "./ElementsInputsDefaultPlaceholder.css";

export const ElementsInputsDefaultPlaceholder = ({
  text = "undefined",
  className,
  ...props
}) => {
  return (
    <div className={"elements-inputs-default-placeholder " + className}>
      <div className="rectangle-17"></div>
      <div className="placeholder">Placeholder </div>
    </div>
  );
};
