import React from "react";

const AnchorButton = (props) => {
  return (
    <a href={props.href} target={"_blank"} className={props.className}>
      {props.name}
    </a>
  );
};

export default AnchorButton;
