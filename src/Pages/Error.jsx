import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import errorbackground from "../Assets/Images/errorbackground.jpg";

const Error = () => {
  return (
    <div
      className="error-container"
      style={{ backgroundImage: `url('${errorbackground}')` }}
    >
      <div className="error-text-container">
        <h2 className="error-header-title">
          404. <br /> You've reached the edge of the universe.
        </h2>
        <p className="error-text">
          ...or well, at least the edge of this website. <br />
          Stay as long as you like but eventually, you'll have to go
        </p>
        <Link to="/" className="error-link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
