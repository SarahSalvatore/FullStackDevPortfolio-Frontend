import React from "react";
import javascriptLogo from "../Assets/Images/javascript-logo.png";
import reactLogo from "../Assets/Images/react-logo.png";
import nodeLogo from "../Assets/Images/node-logo.png";
import expressLogo from "../Assets/Images/express-logo.png";
import mongoLogo from "../Assets/Images/mongo-logo.png";
import gitLogo from "../Assets/Images/git-logo.png";

const Skills = () => {
  return (
    <div className="skills-background">
      <h1 className="sm-skills-header">What I Know</h1>
      <hr />
      <div className="skill-icons-container">
        <img
          className="skill-logo"
          src={javascriptLogo}
          alt="JavaScript Icon"
        />
        <img className="skill-logo" src={reactLogo} alt="React Icon" />
        <img className="skill-logo" src={nodeLogo} alt="Node.js Icon" />
        <img className="skill-logo" src={mongoLogo} alt="MongoDB Icon" />
        <img className="skill-logo" src={expressLogo} alt="Express Icon" />
        <img className="skill-logo" src={gitLogo} alt="Git Icon" />
      </div>
    </div>
  );
};

export default Skills;
