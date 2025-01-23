import "./ComponentsFaQsFaq1Closed.css";
import { ElementsImagesIconsSmallQuestion } from "../ElementsImagesIconsSmallQuestion/ElementsImagesIconsSmallQuestion.jsx";

export const ComponentsFaQsFaq1Closed = ({
  text = "undefined",
  className,
  ...props
}) => {
  return (
    <div className={"components-fa-qs-faq-1-closed " + className}>
      <div className="group-19">
        <div className="rectangle-10-copy"></div>
        <img className="div" src="div0.svg" />
        <div className="lorem-ipsum-dolor-si">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?{" "}
        </div>
      </div>
      <ElementsImagesIconsSmallQuestion className="ui-images-icons-small-question-instance"></ElementsImagesIconsSmallQuestion>
    </div>
  );
};
