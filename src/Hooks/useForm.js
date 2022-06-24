import React, { useState, useEffect } from "react";
import formValidation from "../Helpers/formValidation";

const useForm = (submitForm) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [successForm, setSuccessForm] = useState(false);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setFormErrors(formValidation(formValue));
    setSuccessForm(true);
  };

  const handleFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && successForm) {
      submitForm(true);

      const body = { formValue };
      fetch("/contact_form/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(() => {
        console.log("New contact form entry added.");
      });
    }
  }, [formErrors]);

  return { handleFormChange, handleFormSubmission, formValue, formErrors };
};

export default useForm;
