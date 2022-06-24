import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginbackground from "../Assets/Images/loginbackground.jpg";

const Login = () => {
  return (
    <section
      className="login-section"
      style={{ backgroundImage: `url('${loginbackground}')` }}
    >
      <h2 className="login-title">Login</h2>
      <div className="login-container">
        <form id="login-form">
          <div className="input-control">
            <label>Username:</label>
            <input id="username" name="username" type="username" required />
          </div>
          <div className="input-control">
            <label>Password:</label>
            <input id="password" name="password" type="password" required />
          </div>
          <button className="submit-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );

  //   const [backendData, setBackendData] = useState([{}]);
  //   useEffect(() => {
  //     fetch("/api")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setBackendData(data);
  //       });
  //   }, []);
  //   let history = useNavigate();
  //   let location = useLocation();
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [auth, setAuth] = useState(true);
  //   const loginSubmit = async (event) => {
  //     event.preventDefault();
  //     const response = await fetch("/login", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     const payload = await response.json();
  //     if (response.status >= 400) {
  //       setAuth(false);
  //     } else {
  //       sessionStorage.setItem("token", payload.token);
  //       let { from } = location.state || { from: { pathname: "/" } };
  //       // history.replace(from);
  //       history(from, { replace: true });
  //     }
  //   };
  // return (
  //   <div>
  //     {!auth && (
  //       <div className="card-container">
  //         <div className="card-body">
  //           <h1>Invalid credentials, please try again</h1>
  //           Invalid credentials, please try again
  //         </div>
  //       </div>
  //     )}
  //     <form className="my-5" onSubmit={loginSubmit}>
  //       <label for="usernameEntry">Username</label>
  //       <input
  //         type="text"
  //         name="username"
  //         id="usernameEntry"
  //         placeholder="Username"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //       />
  //       <label for="passwordEntry">Password</label>
  //       <input
  //         type="password"
  //         name="password"
  //         id="passwordEntry"
  //         placeholder="Valid password"
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button>Sign in</button>
  //     </form>
  //   </div>
  // );
};

export default Login;
