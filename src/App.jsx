import { useState } from "react";

import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Reveal from "./components/Reveal";

import "./App.css";

function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={`app ${lightMode ? "light" : ""}`}>
      {/* CANVAS EN ARRIÈRE-PLAN */}
      <AnimatedBackground />
      <CustomCursor />

      {/* CONTENU AU-DESSUS */}
      <div className="app-content">
        <Navbar
          lightMode={lightMode}
          setLightMode={setLightMode}
        />

        <main>
          <Hero />
          <Reveal><Stats /></Reveal>
          <Reveal><About /></Reveal>
          <Reveal><Projects /></Reveal>
          <Reveal><Contact /></Reveal>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;