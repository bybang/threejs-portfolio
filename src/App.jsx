import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Stars from "./components/canvas/Stars";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary z-0">
        <div className="bg-hero bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
