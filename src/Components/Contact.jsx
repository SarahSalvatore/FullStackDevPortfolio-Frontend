import React from "react";

const Contact = () => {
  return (
    <section className="contact__section" id="contact">
      <div className="contact__container">
        <h3 id="contact-link" className="sm-section-header">
          Connect
        </h3>
        <h2 className="section-title">Get in Touch</h2>
        <a href="tel:647-463-9410">
          <img
            src="images/call-me.svg"
            className="contact-icon"
            alt="Call Me"
          />
        </a>
        <a href="mailto:sarah.h.salvatore@gmail.com">
          <img
            src="images/email-me.svg"
            className="contact-icon"
            alt="Email Me"
          />
        </a>
        <p>
          Whether you have a question or just want to say hello, please feel
          free to contact me via phone, email or the contact form below.
        </p>
        <div className="form__container">
          <form id="form" action="/">
            <div className="input-control">
              <label for="username">Name</label>
              <input id="username" name="username" type="text" />
              <div className="error"></div>
            </div>
            <div className="input-control">
              <label for="email">Email</label>
              <input id="email" name="email" type="text" />
              <div className="error"></div>
            </div>
            <div className="input-control">
              <label for="messagebox">Message</label>
              <textarea
                id="messagebox"
                name="messagebox"
                type="text"
              ></textarea>
              <div className="error"></div>
            </div>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
