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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?{" "}
        </div>
      </div>
      <div className="lorem-ipsum-dolor-si2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </div>
      <ElementsImagesIconsSmallQuestion className="ui-images-icons-small-question-instance"></ElementsImagesIconsSmallQuestion>
    </div>
  );
};
