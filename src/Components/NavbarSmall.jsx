import React from "react";
import SocialLinks from "./SocialLinks";

const SmallNav = () => {
  return (
    <div className="small-nav">
      <div className="small-nav-items">
        <h1 className="nav-name">SARAH SALVATORE</h1>
        <div className="small-nav-icon-container">
          <SocialLinks className="social-icons" />
        </div>
      </div>
    </div>
  );
};

export default SmallNav;
