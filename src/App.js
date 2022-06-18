import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Auth from "./Pages/Auth";
import Error from "./Pages/Error";
import "./CSS/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
