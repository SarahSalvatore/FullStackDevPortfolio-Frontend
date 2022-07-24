import { useState, useEffect } from "react";
import formValidation from "../Helpers/formValidation";

const useForm = (submitForm) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [successForm, setSuccessForm] = useState(false);

  const handleFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setFormErrors(formValidation(formValue));
    setSuccessForm(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && successForm) {
      submitForm(true);

      fetch("http://localhost:4000/entries", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      })
        .then((res) => res.json())
        .then(() => {
          console.log(formValue);
        });
    }
  }, [formErrors]);

  return { handleFormChange, handleFormSubmission, formValue, formErrors };
};

export default useForm;
