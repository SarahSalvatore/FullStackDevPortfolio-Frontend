import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import Entries from "../Components/Entries";

const Login = () => {
  const [loginSubmission, setLoginSubmission] = useState(false);

  const submitForm = () => {
    setLoginSubmission(true);
  };

  return (
    <section className="login-section">
      {!loginSubmission ? <LoginForm submitForm={submitForm} /> : <Entries />}
    </section>
  );
};

export default Login;
