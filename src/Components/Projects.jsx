import React from "react";

const Projects = () => {
  return (
    <section className="projects__section" id="projects">
      <h3 id="projects-link" className="sm-section-header">
        See My Work
      </h3>
      <h2 className="section-title">Featured Projects</h2>
      <article className="project__card">
        <div className="project__preview">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="project__image"
              src="images/project-placeholder.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="project__desc">
          <h4>Placeholder Project One</h4>
          <span className="badge">HTML</span>
          <span className="badge">CSS</span>
          <span className="badge">Javascript</span>
          <p>
            Here is my description of the project. This will include the client,
            a brief description outlining what it is, what it does, what
            programs were used and how, as well as any cool or interesting facts
            about it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam, voluptas! Minus magni fugiat pariatur veniam quis, nihil
            qui impedit mollitia.
          </p>
        </div>
      </article>
      <article className="project__card">
        <div className="project__preview">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="project__image"
              src="images/project-placeholder.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="project__desc">
          <h4>Placeholder Project Two</h4>
          <span className="badge">HTML</span>
          <span className="badge">CSS</span>
          <span className="badge">Javascript</span>
          <p>
            Here is my description of the project. This will include the client,
            a brief description outlining what it is, what it does, what
            programs were used and how, as well as any cool or interesting facts
            about it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam, voluptas! Minus magni fugiat pariatur veniam quis, nihil
            qui impedit mollitia.
          </p>
        </div>
      </article>
      <article className="project__card">
        <div className="project__preview">
          <a href="https://www.google.com/" target="_blank">
            {" "}
            <img
              className="project__image"
              src="images/project-placeholder.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="project__desc">
          <h4>Placeholder Project Three</h4>
          <span className="badge">HTML</span>
          <span className="badge">CSS</span>
          <span className="badge">Javascript</span>
          <p>
            Here is my description of the project. This will include the client,
            a brief description outlining what it is, what it does, what
            programs were used and how, as well as any cool or interesting facts
            about it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam, voluptas! Minus magni fugiat pariatur veniam quis, nihil
            qui impedit mollitia.
          </p>
        </div>
      </article>
      <article className="project__card">
        <div className="project__preview">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="project__image"
              src="images/project-placeholder.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="project__desc">
          <h4>Placeholder Project Four</h4>
          <span className="badge">HTML</span>
          <span className="badge">CSS</span>
          <span className="badge">Javascript</span>
          <p>
            Here is my description of the project. This will include the client,
            a brief description outlining what it is, what it does, what
            programs were used and how, as well as any cool or interesting facts
            about it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam, voluptas! Minus magni fugiat pariatur veniam quis, nihil
            qui impedit mollitia.
          </p>
        </div>
      </article>
      <article className="project__card">
        <div className="project__preview">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="project__image"
              src="images/project-placeholder.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="project__desc">
          <h4>Placeholder Project Five</h4>
          <span className="badge">HTML</span>
          <span className="badge">CSS</span>
          <span className="badge">Javascript</span>
          <p>
            Here is my description of the project. This will include the client,
            a brief description outlining what it is, what it does, what
            programs were used and how, as well as any cool or interesting facts
            about it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam, voluptas! Minus magni fugiat pariatur veniam quis, nihil
            qui impedit mollitia.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Projects;
