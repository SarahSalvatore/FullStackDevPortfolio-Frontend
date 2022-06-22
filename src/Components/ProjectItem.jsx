import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnchorButton from "./AnchorButton";

const animationVariant = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.6 },
  },
  hidden: { x: -100, opacity: 0 },
};

const ProjectItem = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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
        />
        <AnchorButton
          href={props.codeHref}
          className="dark-blue-button"
          name="Code"
        />
      </div>
    </motion.article>
  );
};

export default ProjectItem;
