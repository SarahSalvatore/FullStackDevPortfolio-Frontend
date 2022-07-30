import React from "react";
import { HashLink } from "react-router-hash-link";
import NavLinks from "./NavbarLinks";
import SocialLinks from "./SocialLinks";
import logo from "../Assets/Images/s-logo.png";

const Footer = () => {
  return (
    <footer className="footer__section">
      <ul>
        <NavLinks className="footer-link" />
      </ul>
      <div className="footer-icon-container">
        <SocialLinks className="footer-social-icons" />
      </div>
      <HashLink to="#">
        <img className="logo" src={logo} alt="Logo for Sarah Salvatore" />
      </HashLink>
    </footer>
  );
};

export default Footer;
