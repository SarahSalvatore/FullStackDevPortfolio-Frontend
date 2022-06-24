import React from "react";
import { HashLink } from "react-router-hash-link";
import SmallNav from "./NavbarSmall";
import ColorThemeToggle from "./ColorThemeToggle";
import logo from "../Assets/Images/logo.png";
import NavLinks from "./NavbarLinks";

const Navbar = (props) => {
  return (
    <nav>
      <SmallNav />
      <div className="navbar">
        <HashLink to="#">
          <img className="logo" src={logo} alt="Logo for Sarah Salvatore" />
        </HashLink>
        <div className="nav-links">
          <NavLinks className="nav-item" />
          <label className="toggle-text">{props.label}:</label>
        </div>
        <ColorThemeToggle
          onChange={props.onToggleChange}
          checked={props.checked}
        />
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
