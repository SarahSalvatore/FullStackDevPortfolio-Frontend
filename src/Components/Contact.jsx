import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ThankYouFormSubmission from "./ThankYouFormSubmission";

const Contact = () => {
  const [formSubmission, setFormSubmission] = useState(false);

  const submitForm = () => {
    setFormSubmission(true);
  };

  return (
    <section className="contact__section" id="contact">
      <div className="contact__container">
        <h3 id="contact-link" className="sm-section-header">
          Connect
        </h3>
        <h2 className="section-title">Contact Me</h2>
        <div className="form-flex">
          {!formSubmission ? (
            <ContactForm submitForm={submitForm} />
          ) : (
            <ThankYouFormSubmission />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
