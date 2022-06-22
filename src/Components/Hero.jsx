import React from "react";
import { HashLink } from "react-router-hash-link";
import reactLogo from "../Assets/Images/react-logo.png";
import jsLogo from "../Assets/Images/javascript-logo.png";
import nodeLogo from "../Assets/Images/node-logo.png";
import gitLogo from "../Assets/Images/git-logo.png";
import htmlLogo from "../Assets/Images/html-logo.png";
import cssLogo from "../Assets/Images/css-logo.png";
import "../CSS/App.css";

const Hero = (props) => {
  return (
    <section
      className="hero__container"
      style={{ backgroundImage: `url('${props.onToggleChange}')` }}
    >
      <div className="side-hero-icons">
        <img className="hero-icon" src={nodeLogo} alt="Node Logo" id="node" />
        <img
          className="hero-icon"
          src={reactLogo}
          alt="React Logo"
          id="react"
        />
        <img className="hero-icon" src={gitLogo} alt="Git Logo" id="git" />
      </div>
      <div className="hero__text">
        <h1 className="my-name-text">Hello, I'm Sarah.</h1>
        <h2 className="my-title-text">I build things for the web.</h2>
        <HashLink to="#about">
          <button className="hero-button">LEARN MORE</button>
        </HashLink>
      </div>
      <div className="side-hero-icons">
        <img className="hero-icon" src={cssLogo} alt="CSS3 Logo" id="css" />
        <img className="hero-icon" src={jsLogo} alt="Javascript Logo" id="js" />
        <img className="hero-icon" src={htmlLogo} alt="HTML5 Logo" id="html" />
      </div>
    </section>
  );
};

export default Hero;
