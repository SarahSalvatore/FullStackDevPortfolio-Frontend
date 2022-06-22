import React from "react";
import ReactSwitch from "react-switch";

const ColorThemeToggle = (props) => {
  return (
    <div className="switch">
      <ReactSwitch
        onChange={props.onChange}
        checked={props.checked}
        handleDiameter={10}
        onColor={"#0288d1"}
        width={40}
        height={22}
      />
    </div>
  );
};

export default ColorThemeToggle;
