import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnchorButton = (props) => {
  return (
    <a href={props.href} target={"_blank"} className={props.className}>
      <FontAwesomeIcon
        icon={props.icon}
        className="button-icon"
        title="Email Me"
      />
      {props.name}
    </a>
  );
};

export default AnchorButton;
