import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnchorButton from "./AnchorButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faCode } from "@fortawesome/free-solid-svg-icons";

const animationVariant = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.6 },
  },
  hidden: {
    x: -200,
    opacity: 0,
    transition: { duration: 1.6 },
  },
};

const ProjectItem = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.article
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariant}
      className="project__card"
    >
      <div className="project__preview">
        <img className="project__image" src={props.image} alt={props.alt} />
      </div>
      <div className="project__desc">
        <h4>{props.projectTitle}</h4>
        <p className="project-desc-para">{props.description}</p>
        <AnchorButton
          href={props.demoHref}
          className="med-blue-button"
          name="Demo"
          icon={faDisplay}
        />
        <AnchorButton
          href={props.codeHref}
          className="dark-blue-button"
          name="Code"
          icon={faCode}
        />
      </div>
    </motion.article>
  );
};

export default ProjectItem;
