import React from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../Assets/Images/sarah-photo.jpg";
import AnchorButton from "./AnchorButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="about__section" id="about">
      <div className="about__container">
        <img
          className="profile__image"
          src={profilePhoto}
          alt="Profile of Sarah Salvatore"
        />
        <div className="about__text">
          <h3 id="about-link" className="sm-section-header">
            Intro
          </h3>
          <h2 className="section-title">About Me</h2>
          <p>
            Hello and welcome to my little corner of the internet! My name is
            Sarah Salvatore and I'm a Full Stack Developer based out of Toronto,
            Ontario. If you're looking for a creative and passionate developer,
            then you've come to the right place!
          </p>
          <p>
            I studied Full Stack Development at York University with a focus on
            the MERN stack. Before that, I graduated from George Brown College
            for Graphic Design. I would consider myself a forever student, eager
            to build on my foundational programming knowledge, hone my skills
            and continue learning new languages and frameworks.
          </p>
          <p className="about-paragraph">
            On a personal note, I love horror movies, lattes, history, and
            pineapple on pizza. Below you can learn more about me, see samples
            of my work or get in touch.
          </p>

          <Link
            to="./SSalvatoreResume.txt"
            target="_blank"
            className="resume-button"
            download
          >
            <FontAwesomeIcon
              icon={faArrowDown}
              className="button-icon"
              title="Download CV"
            />
            Download CV
          </Link>
          <AnchorButton
            href="https://www.linkedin.com/in/sarah-salvatore-75345b22a"
            className="med-blue-button"
            name="LinkedIn"
            icon={faLinkedin}
            title="LinkedIn"
          />
          <AnchorButton
            href="https://github.com/SarahSalvatore"
            className="dark-blue-button"
            name="GitHub"
            icon={faGithub}
            title="GitHub"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
