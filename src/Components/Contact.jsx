import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobile,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import ThankYouFormSubmission from "./ThankYouFormSubmission";

const Contact = () => {
  const [formSubmission, setFormSubmission] = useState(false);

  const onSubmit = () => {
    setFormSubmission(true);
  };

  return (
    <section className="contact__section" id="contact">
      <div className="contact__container">
        <h3 id="contact-link" className="sm-section-header">
          Connect
        </h3>
        <h2 className="section-title">Get in Touch</h2>
        <div className="form-flex">
          <div className="contact-details">
            <p className="contact-text">
              Have a question, suggestion or comment? Let's chat! Please feel
              free to reach out and I will get back to you as soon as possible.
            </p>

            <span className="contact-detail-text">
              <FontAwesomeIcon
                icon={faEnvelope}
                title="Email Me"
                className="contact-icon"
              />
              sarah.h.salvatore@gmail.com
            </span>
            <span className="contact-detail-text">
              <FontAwesomeIcon
                icon={faMobile}
                title="Call Me"
                className="contact-icon"
              />
              647-463-9410
            </span>
            <span className="contact-detail-text">
              <FontAwesomeIcon
                icon={faLocationDot}
                title="Where I Live"
                className="contact-icon"
              />
              Toronto, Ontario
            </span>
          </div>
          {!formSubmission ? (
            <ContactForm onSubmit={onSubmit} />
          ) : (
            <ThankYouFormSubmission />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
