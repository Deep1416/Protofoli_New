import Header from "./Compoments/Header/Header"
import Home from "./Compoments/Home/Home"
import About from "./Compoments/About/About"
import Skills from "./Compoments/Skills/Skills";
import Projects  from "./Compoments/Projects/Projects"
import Contact from "./Compoments/Contact/Contact"
import './index.css'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  let cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Hide default cursor
    document.body.style.cursor = "none";

    // Mouse move event listener
    const onMouseMove = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3,
        ease: "power2.out",
        backgroundColor: getRandomColor(), // Change cursor color randomly
      });
    };

    // Add event listener
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      // Remove event listener on unmount
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "2px solid white",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* Router setup */}
      <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
