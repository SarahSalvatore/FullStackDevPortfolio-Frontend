import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import SmallNav from "./NavbarSmall";
import ColorThemeToggle from "./ColorThemeToggle";
import logo from "../Assets/Images/s-logo.png";
import NavLinks from "./NavbarLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <nav>
      <SmallNav />
      <div className="navbar">
        <HashLink to="#">
          <img className="logo" src={logo} alt="Logo for Sarah Salvatore" />
        </HashLink>
        <div className="nav-links" id={hamburgerMenu ? "hamburger-links" : ""}>
          <NavLinks
            className="nav-item"
            onClick={() => setHamburgerMenu(false)}
          />
        </div>
        <div className="color-toggle">
          <label className="toggle-text">{props.label}:</label>
          <ColorThemeToggle
            onChange={props.onToggleChange}
            checked={props.checked}
          />
        </div>
        <button
          className="hamburger-button"
          onClick={() => setHamburgerMenu(!hamburgerMenu)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-icon"
            title="hamburger"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
