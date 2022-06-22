import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = (props) => {
  return (
    <Fragment>
      <a href="mailto:sarah.h.salvatore@gmail.com">
        <FontAwesomeIcon
          icon={faEnvelope}
          className={props.className}
          title="Email Me"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sarah-salvatore-full-stack-developer/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className={props.className}
          title="Stalk Me On LinkedIn"
        />
      </a>
      <a
        href="https://github.com/SarahSalvatore"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className={props.className}
          title="See my GitHub"
        />
      </a>
    </Fragment>
  );
};

export default SocialLinks;
