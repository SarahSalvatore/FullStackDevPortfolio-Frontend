import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ThankYouFormSubmission = () => {
  return (
    <div className="form-container">
      <div className="checkbox-container">
        <FontAwesomeIcon
          icon={faCircleCheck}
          title="Successful Submission"
          className="contact-check"
        />
      </div>
      <p className="submission-text">
        Thank you! Your contact form has been submitted.
      </p>
    </div>
  );
};

export default ThankYouFormSubmission;
