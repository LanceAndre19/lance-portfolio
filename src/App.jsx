import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <div
        key={location.pathname}
        className="page-transition"
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<Hero />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;