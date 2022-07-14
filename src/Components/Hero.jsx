import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import blimp from "../Assets/Images/blimp.png";
import htmlCloud from "../Assets/Images/html-cloud.png";
import cssCloud from "../Assets/Images/css-cloud.png";
import jsCloud from "../Assets/Images/js-cloud.png";
import nodeCloud from "../Assets/Images/node-cloud.png";
import reactCloud from "../Assets/Images/react-cloud.png";
import gitCloud from "../Assets/Images/git-cloud.png";
import "../CSS/App.css";

const animationVariant = {
  visible: {
    x: 0,

    transition: { duration: 1.3 },
  },
  hidden: {
    x: -200,
    transition: { duration: 1.3 },
  },
};

const Hero = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className="hero__container"
      style={{ backgroundImage: `url('${props.onToggleChange}')` }}
    >
      <div className="blimp-div">
        <img className="blimp" src={blimp} alt="Flying Blimp" />
      </div>
      <div className="text-cloud-container">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animationVariant}
          className="hero__text"
        >
          <h3 className="hello-text">Hello, I'm</h3>
          <h1 className="my-name-text">Sarah Salvatore</h1>
          <h2 className="my-title-text">Full Stack Developer</h2>
          <HashLink to="#about">
            <button className="hero-button">
              <FontAwesomeIcon icon={faAngleDown} className="button-icon" />
              LEARN MORE
            </button>
          </HashLink>
        </motion.div>
        <div className="hero-image-container">
          <img className="html-cloud" src={htmlCloud} alt="HTML5 Cloud" />
          <img className="css-cloud" src={cssCloud} alt="CSS3 Cloud" />
          <img className="js-cloud" src={jsCloud} alt="JavaScript Cloud" />
          <img className="node-cloud" src={nodeCloud} alt="Node.js Cloud" />
          <img className="react-cloud" src={reactCloud} alt="React Cloud" />
          <img className="git-cloud" src={gitCloud} alt="Git Cloud" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
