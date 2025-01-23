import "./BlocksContentH3TitleCenter.css";

export const BlocksContentH3TitleCenter = ({
  text = "undefined",
  className,
  ...props
}) => {
  return (
    <div className={"blocks-content-h-3-title-center " + className}>
      <div className="title">
        Lorem ipsum dolor sit amet con sectetur adipisicing elit{" "}
      </div>
    </div>
  );
};
