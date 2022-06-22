import React, { useState, createContext } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import lighthero from "../Assets/Images/herobannerday.jpg";
import darkhero from "../Assets/Images/herobannernight.jpg";

export const ThemeContext = createContext(null);

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [hero, setHero] = useState(lighthero);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    setHero((current) => (current === lighthero ? darkhero : lighthero));
  };

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div id={theme}>
        <header>
          <Navbar
            onToggleChange={toggleTheme}
            checked={theme === "dark"}
            label={theme === "light" ? "Light Mode" : "Dark Mode"}
          />
          <Hero onToggleChange={hero} />
        </header>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Home;