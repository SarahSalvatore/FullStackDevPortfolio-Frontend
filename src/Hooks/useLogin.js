import { useState, useEffect } from "react";
import loginValidation from "../Helpers/loginValidation";

const useLogin = (submitForm) => {
  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [successLogin, setSuccessLogin] = useState(false);
  const [entries, setEntries] = useState(null);

  const handleLoginSubmission = (event) => {
    event.preventDefault();
    setLoginErrors(loginValidation(loginValue));
    setSuccessLogin(true);
  };

  const handleLoginChange = (event) => {
    setLoginValue({
      ...loginValue,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(loginErrors).length === 0 && successLogin) {
      submitForm(true);

      fetch("http://localhost:5000/contact_form/entries")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setEntries(data);
        });
    }
  }, [loginErrors]);

  return {
    handleLoginChange,
    handleLoginSubmission,
    loginValue,
    loginErrors,
    entries,
  };
};

export default useLogin;
