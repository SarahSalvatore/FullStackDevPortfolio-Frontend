import React, { useState } from "react";
import loginbackground from "../Assets/Images/loginbackground.jpg";
import LoginForm from "../Components/LoginForm";
import Entries from "../Components/Entries";

const Login = () => {
  const [loginSubmission, setLoginSubmission] = useState(false);

  const submitForm = () => {
    setLoginSubmission(true);
  };

  return (
    <section
      className="login-section"
      style={{ backgroundImage: `url('${loginbackground}')` }}
    >
      {!loginSubmission ? <LoginForm submitForm={submitForm} /> : <Entries />}
    </section>
  );
};

export default Login;
