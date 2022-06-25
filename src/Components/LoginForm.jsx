import React from "react";
import useLogin from "../Hooks/useLogin";

const LoginForm = ({ submitForm }) => {
  const {
    handleLoginChange,
    handleLoginSubmission,
    loginValue,
    loginErrors,
  } = useLogin(submitForm);

  return (
    <div>
      <h2 className="page-header-title">Login</h2>
      <div className="login-container">
        <form id="login-form">
          <div className="input-control">
            <label className="input-label">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={loginValue.username}
              onChange={handleLoginChange}
              required
            />
            {loginErrors.username && (
              <p className="error-message">{loginErrors.username}</p>
            )}
          </div>
          <div className="input-control">
            <label className="input-label">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={loginValue.password}
              onChange={handleLoginChange}
              required
            />
            {loginErrors.password && (
              <p className="error-message">{loginErrors.password}</p>
            )}
          </div>
          <button
            className="submit-button"
            type="submit"
            onClick={handleLoginSubmission}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
