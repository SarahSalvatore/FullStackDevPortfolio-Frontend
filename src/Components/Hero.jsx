import React from "react";
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
        <button
          className="transparent-button"
          onClick={"window.location.href='#about-link';"}
        >
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default Hero;
