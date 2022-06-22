import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Auth from "./Pages/Auth";
import Error from "./Pages/Error";
import "./CSS/App.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Auth />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </motion.div>
  );
}

export default App;
