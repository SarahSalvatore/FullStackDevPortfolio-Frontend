import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = (props) => {
  return (
    <Fragment>
      <HashLink
        to="#"
        className={props.className}
        id="home-nav"
        onClick={props.onClick}
      >
        Home
      </HashLink>

      <HashLink
        to="#about"
        className={props.className}
        id="about-nav"
        onClick={props.onClick}
      >
        About
      </HashLink>

      <HashLink
        to="#projects"
        className={props.className}
        id="projects-nav"
        onClick={props.onClick}
      >
        Projects
      </HashLink>

      <HashLink
        to="#contact"
        className={props.className}
        id="contact-nav"
        onClick={props.onClick}
      >
        Contact
      </HashLink>

      <Link
        to="/blog"
        target="_blank"
        className={props.className}
        id="blog-nav"
        onClick={props.onClick}
      >
        Blog
      </Link>

      <Link
        to="/login"
        target="_blank"
        className={props.className}
        id="login-nav"
        onClick={props.onClick}
      >
        Login
      </Link>
    </Fragment>
  );
};

export default NavLinks;
