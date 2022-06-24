import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ThankYouFormSubmission from "./ThankYouFormSubmission";

const Contact = () => {
  const [formSubmission, setFormSubmission] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const displayInfo = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <section className="contact__section" id="contact">
      <div className="contact__container">
        <h3 id="contact-link" className="sm-section-header">
          Connect
        </h3>
        <h2 className="section-title">Get in Touch</h2>
        <div className="form-flex">
          {!formSubmission ? (
            <ContactForm
              emailOnChange={(event) => setEmail(event.target.value)}
              emailValue={email}
              nameOnChange={(event) => setName(event.target.value)}
              nameValue={name}
              messageOnChange={(event) => setMessage(event.target.value)}
              messageValue={message}
              onButtonClick={displayInfo}
            />
          ) : (
            <ThankYouFormSubmission />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
