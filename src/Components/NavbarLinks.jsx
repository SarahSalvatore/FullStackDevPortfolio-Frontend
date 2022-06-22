import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = (props) => {
  return (
    <Fragment>
      <HashLink to="#" className={props.className} id="home-nav">
        Home
      </HashLink>

      <HashLink to="#about" className={props.className} id="about-nav">
        About
      </HashLink>

      <HashLink to="#projects" className={props.className} id="projects-nav">
        Projects
      </HashLink>

      <Link
        to="/blog"
        target="_blank"
        className={props.className}
        id="blog-nav"
      >
        Blog
      </Link>

      <HashLink to="#contact" className={props.className} id="contact-nav">
        Contact
      </HashLink>

      <Link
        to="/login"
        target="_blank"
        className={props.className}
        id="login-nav"
      >
        Login
      </Link>
    </Fragment>
  );
};

export default NavLinks;
