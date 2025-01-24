import "./ComponentsFaQsFaq1Collapsed.css";
import { ElementsImagesIconsSmallQuestion } from "../ElementsImagesIconsSmallQuestion/ElementsImagesIconsSmallQuestion.jsx";

export const ComponentsFaQsFaq1Collapsed = ({
  text = "undefined",
  text2 = "undefined",
  className,
  ...props
}) => {
  return (
    <div className={"components-fa-qs-faq-1-collapsed " + className}>
      <div className="group-19">
        <div className="rectangle-10-copy"></div>
        <img className="line" src="line0.svg" />
        <img className="div" src="div0.svg" />
        <div className="lorem-ipsum-dolor-si">
        {text}
        </div>
      </div>
      <div className="lorem-ipsum-dolor-si2">
        {text2}
      </div>
      <ElementsImagesIconsSmallQuestion className="ui-images-icons-small-question-instance"></ElementsImagesIconsSmallQuestion>
    </div>
  );
};
