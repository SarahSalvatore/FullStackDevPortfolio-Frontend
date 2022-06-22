import React from "react";
import { HashLink } from "react-router-hash-link";
import "../CSS/App.css";

const Hero = (props) => {
  return (
    <section
      className="hero__container"
      style={{ backgroundImage: `url('${props.onToggleChange}')` }}
    >
      <div className="hero__text">
        <h1 className="my-name-text">Hello, I'm Sarah.</h1>
        <h2 className="my-title-text">I build things for the web.</h2>
        <HashLink to="#about">
          <button className="hero-button">LEARN MORE</button>
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;
