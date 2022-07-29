import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
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
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={animationVariant}
        className="hero__text"
      >
        <h3 className="hello-text">Hello, I'm</h3>
        <h1 className="my-name-text">Sarah Salvatore</h1>
        <h2 className="my-title-text">FULL STACK DEVELOPER</h2>
        <HashLink to="#about">
          <button className="hero-button">
            <FontAwesomeIcon icon={faAngleDown} className="button-icon" />
            LEARN MORE
          </button>
        </HashLink>
      </motion.div>
    </section>
  );
};

export default Hero;
