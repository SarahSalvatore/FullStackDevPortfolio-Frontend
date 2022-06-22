import React from "react";

const ContactForm = () => {
  return (
    <div className="form-container">
      <form id="form" action="/">
        <div className="input-control">
          <label for="username">Name:</label>
          <input id="username" name="username" type="text" />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label for="email">Email:</label>
          <input id="email" name="email" type="text" />
          <div className="error"></div>
        </div>
        <div className="input-control">
          <label for="messagebox">Message:</label>
          <textarea id="messagebox" name="messagebox" type="text"></textarea>
          <div className="error"></div>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
