import React from "react";
import blogbackground from "../Assets/Images/blogbackground.jpg";

const Blog = () => {
  return (
    <div
      className="blog-container"
      style={{ backgroundImage: `url('${blogbackground}')` }}
    >
      <h2 className="page-header-title">Coming soon!</h2>
    </div>
  );
};

export default Blog;
