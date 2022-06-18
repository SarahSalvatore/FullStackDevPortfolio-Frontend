import React from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import logo from "../Assets/Images/logo.png";
import "../CSS/App.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <a href="#">
        <img className="logo" src={logo} alt="Logo for Sarah Salvatore" />
      </a>
      <div class="nav-links">
        <ul className="nav-menu">
          <a href="#">
            <li className="nav-item" id="home-nav">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="nav-item" id="about-nav">
              About
            </li>
          </a>
          <a href="#projects">
            <li className="nav-item" id="projects-nav">
              Projects
            </li>
          </a>
          <Link to="/blog" target="_blank" className="nav-item" id="blog-nav">
            Blog
          </Link>
          <a href="#contact">
            <li className="nav-item" id="contact-nav">
              Contact
            </li>
          </a>
          <Link to="/login" target="_blank" className="nav-item" id="login-nav">
            Login
          </Link>
          <label className="toggle-text">{props.label}:</label>
        </ul>
      </div>
      <div className="switch">
        <ReactSwitch
          onChange={props.onToggleChange}
          checked={props.checked}
          handleDiameter={10}
          onColor={"#0288d1"}
          width={40}
          height={22}
        />
      </div>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
