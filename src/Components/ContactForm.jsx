import React from "react";
import useForm from "../Hooks/useForm";

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
          <label className="input-label" for="nameEntry">
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
          <label className="input-label" for="emailEntry">
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
          <label className="input-label" for="messageEntry">
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
          className="submit-button"
          type="submit"
          onClick={handleFormSubmission}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
