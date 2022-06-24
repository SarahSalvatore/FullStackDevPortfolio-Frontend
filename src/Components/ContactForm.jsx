import React from "react";

const ContactForm = (props) => {
  return (
    <div className="form-container">
      <form id="form" onSubmit={props.onSubmit}>
        <div className="input-control">
          <label>Name:</label>
          <input
            id="nameEntry"
            name="name"
            type="name"
            value={props.nameValue}
            required
            onChange={props.nameOnChange}
          />
        </div>
        <div className="input-control">
          <label>Email:</label>
          <input
            id="emailEntry"
            name="email"
            type="email"
            value={props.emailValue}
            required
            onChange={props.emailOnChange}
          />
        </div>
        <div className="input-control">
          <label>Message:</label>
          <input
            id="messageEntry"
            name="text"
            type="textarea"
            value={props.messageValue}
            required
            onChange={props.messageOnChange}
          />
        </div>

        <button
          className="submit-button"
          type="submit"
          onClick={props.onButtonClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
