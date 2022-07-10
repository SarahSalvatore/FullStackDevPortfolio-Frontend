import React from "react";
import SocialLinks from "./SocialLinks";
import useForm from "../Hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ submitForm }) => {
  const {
    handleFormChange,
    handleFormSubmission,
    formValue,
    formErrors,
  } = useForm(submitForm);

  return (
    <div className="form-container">
      <form id="form">
        <div className="input-control">
          <label className="input-label" htmlFor="nameEntry">
            Name:
          </label>
          <input
            id="nameEntry"
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleFormChange}
            required
          />
          {formErrors.name && (
            <p className="error-message">{formErrors.name}</p>
          )}
        </div>
        <div className="input-control">
          <label className="input-label" htmlFor="emailEntry">
            Email:
          </label>
          <input
            id="emailEntry"
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleFormChange}
            required
          />
          {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
        </div>
        <div className="input-control">
          <label className="input-label" htmlFor="messageEntry">
            Message:
          </label>
          <input
            id="messageEntry"
            type="textarea"
            name="message"
            value={formValue.message}
            onChange={handleFormChange}
            required
          />
          {formErrors.message && (
            <p className="error-message">{formErrors.message}</p>
          )}
        </div>

        <button
          className="dark-blue-button"
          type="submit"
          onClick={handleFormSubmission}
        >
          <FontAwesomeIcon icon={faPaperPlane} className="button-icon" />
          Submit
        </button>
      </form>
      <div className="contact-socials">
        <SocialLinks className="contact-social-links" />
      </div>
    </div>
  );
};

export default ContactForm;
