import React from "react";
import profilePhoto from "../Assets/Images/sarah-photo.jpg";

const About = () => {
  return (
    <section className="about__section" id="about">
      <div className="about__container">
        <div className="sarahpic__container">
          <img
            className="profile__image"
            src={profilePhoto}
            alt="Profile Photo of Sarah Salvatore"
          />
        </div>
        <div className="about__text">
          <h3 id="about-link" className="sm-section-header">
            Intro
          </h3>
          <h2 className="section-title">About Me</h2>
          <p>
            Welcome to my little corner of the internet! My name is Sarah
            Salvatore and I'm a Full Stack Developer based out of Toronto,
            Ontario. If you're looking for a creative and passionate developer,
            then you've come to the right place!
          </p>
          <p>
            I studied Full Stack Development at York University with a focus on
            the MERN stack. Before that, I graduated from George Brown College
            for Graphic Design which has definitely come in handy when working
            on Front-End Development. I consider myself a forever student, eager
            to build on my foundational knowledge and stay in tune with the
            latest and greatest languages and syntax. Below you can learn more
            about me, see samples of my work or get in touch.
          </p>
          <a href="" download className="resume-button">
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/sarah-salvatore-75345b22a"
            target="_blank"
            className="linkedin-button"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SarahSalvatore"
            target="_blank"
            className="github-button"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
