import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import htmlCloud from "../Assets/Images/html-cloud.png";
import cssCloud from "../Assets/Images/css-cloud.png";
import jsCloud from "../Assets/Images/js-cloud.png";
import nodeCloud from "../Assets/Images/node-cloud.png";
import reactCloud from "../Assets/Images/react-cloud.png";
import gitCloud from "../Assets/Images/git-cloud.png";
import "../CSS/App.css";

const Hero = (props) => {
  return (
    <section
      className="hero__container"
      style={{ backgroundImage: `url('${props.onToggleChange}')` }}
    >
      <div className="hero__text">
        <h3 className="hello-text">Hello, I'm</h3>
        <h1 className="my-name-text">Sarah Salvatore</h1>
        <h2 className="my-title-text">Full Stack Developer</h2>
        <HashLink to="#about">
          <button className="hero-button">
            <FontAwesomeIcon icon={faAngleDown} className="button-icon" />
            LEARN MORE
          </button>
        </HashLink>
      </div>
      <div className="hero-image-container">
        <img className="html-cloud" src={htmlCloud} alt="HTML5 Cloud" />
        <img className="css-cloud" src={cssCloud} alt="CSS3 Cloud" />
        <img className="js-cloud" src={jsCloud} alt="JavaScript Cloud" />
        <img className="node-cloud" src={nodeCloud} alt="Node.js Cloud" />
        <img className="react-cloud" src={reactCloud} alt="React Cloud" />
        <img className="git-cloud" src={gitCloud} alt="Git Cloud" />
      </div>
    </section>
  );
};

export default Hero;
