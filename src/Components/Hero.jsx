import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../Assets/Images/logo.png";
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
          <button className="hero-button">LEARN MORE</button>
        </HashLink>
      </div>
      <div className="hero-image-container">
        <img
          className="hero__image"
          src={logo}
          alt="Logo for Sarah Salvatore"
        />
      </div>
    </section>
  );
};

export default Hero;
