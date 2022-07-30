import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
        <h1 className="my-name-text">SARAH SALVATORE</h1>
        <h2 className="my-title-text">Full Stack Developer</h2>
        <HashLink to="#about">
          <button className="hero-button">LEARN MORE</button>
        </HashLink>
      </motion.div>
    </section>
  );
};

export default Hero;
