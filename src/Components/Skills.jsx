import React from "react";
import htmlLogo from "../Assets/Images/html-logo.png";
import cssLogo from "../Assets/Images/css-logo.png";
import javascriptLogo from "../Assets/Images/javascript-logo.png";
import reactLogo from "../Assets/Images/react-logo.png";
import nodeLogo from "../Assets/Images/node-logo.png";
import expressLogo from "../Assets/Images/express-logo.png";
import mongoLogo from "../Assets/Images/mongo-logo.png";
import mySqlLogo from "../Assets/Images/mysql-logo.png";
import gitLogo from "../Assets/Images/git-logo.png";

const Skills = () => {
  return (
    <div className="skills-background">
      <h1 className="sm-skills-header">What I Know</h1>
      <hr />
      <div className="skill-icons-container">
        <img
          className="skill-logo"
          src={htmlLogo}
          alt="HTML Icon"
          title="HTML"
        />
        <img className="skill-logo" src={cssLogo} alt="CSS Icon" title="CSS" />
        <img
          className="skill-logo"
          src={javascriptLogo}
          alt="JavaScript Icon"
          title="JavaScript"
        />
        <img
          className="skill-logo"
          src={reactLogo}
          alt="React Icon"
          title="React"
        />
        <img
          className="skill-logo"
          src={nodeLogo}
          alt="Node.js Icon"
          title="Node"
        />
        <img
          className="skill-logo"
          src={mongoLogo}
          alt="MongoDB Icon"
          title="MongoDB"
        />
        <img
          className="skill-logo"
          src={expressLogo}
          alt="Express Icon"
          title="Express"
        />
        <img
          className="skill-logo"
          src={mySqlLogo}
          alt="MySQL Icon"
          title="MySQL"
        />
        <img className="skill-logo" src={gitLogo} alt="Git Icon" title="Git" />
      </div>
    </div>
  );
};

export default Skills;
