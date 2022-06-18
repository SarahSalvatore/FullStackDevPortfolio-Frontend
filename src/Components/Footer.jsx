import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo.png";

const Footer = () => {
  return (
    <footer className="footer__section">
      <ul>
        <li>
          <a href="#" id="home-nav">
            Home
          </a>
        </li>
        <li>
          <a href="#about-link" id="about-nav">
            About
          </a>
        </li>
        <li>
          <a href="#projects-link" id="projects-nav">
            Projects
          </a>
        </li>
        <Link to="/blog" target="_blank" className="footer-link" id="blog-nav">
          Blog
        </Link>
        <li>
          <a href="#contact-link" id="contact-nav">
            Contact
          </a>
        </li>
      </ul>
      <p>This site has been designed and built by Sarah Salvatore.</p>
      <a href="#">
        <img className="logo" src={logo} alt="Logo for Sarah Salvatore" />
      </a>
    </footer>
  );
};

export default Footer;
