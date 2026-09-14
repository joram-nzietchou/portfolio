import { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const total = projects.length;

  const goTo = (index) => {
    // Boucle infinie
    if (index < 0) setActiveIndex(total - 1);
    else if (index >= total) setActiveIndex(0);
    else setActiveIndex(index);
  };

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  // Navigation clavier
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  // Swipe tactile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;

    const handleStart = (e) => {
      startX = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const handleEnd = (e) => {
      const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    };

    container.addEventListener("touchstart", handleStart);
    container.addEventListener("touchend", handleEnd);

    return () => {
      container.removeEventListener("touchstart", handleStart);
      container.removeEventListener("touchend", handleEnd);
    };
  }, [activeIndex]);

  return (
    <section id="projets" className="section projects-section">

      <div className="projects-header">
        <div className="section-heading">
          <h2>PROJETS RÉCENTS</h2>
          <span></span>
        </div>

        <a href="#projets" className="projects-link">
          VOIR TOUS LES PROJETS
          <FaArrowRight />
        </a>
      </div>

      <div className="projects-carousel" ref={containerRef}>

        {/* Flèche gauche */}
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={prev}
          aria-label="Projet précédent"
        >
          <FaArrowLeft />
        </button>

        {/* Scène 3D */}
        <div className="carousel-scene">
          {projects.map((project, index) => {
            // Calcul de la position relative par rapport à la carte active
            let offset = index - activeIndex;

            // Boucle infinie : rapprocher les cartes éloignées
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isActive = offset === 0;

            // Classes/positions selon la position
            let positionClass = "";
            if (offset === 0) positionClass = "active";
            else if (offset === -1) positionClass = "prev";
            else if (offset === 1) positionClass = "next";
            else if (offset < -1) positionClass = "far-left";
            else if (offset > 1) positionClass = "far-right";

            return (
              <div
                key={project.number}
                className={`carousel-item ${positionClass}`}
                onClick={() => !isActive && goTo(index)}
                style={{
                  // Variables CSS utilisées dans le style
                  "--offset": offset,
                }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {/* Flèche droite */}
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={next}
          aria-label="Projet suivant"
        >
          <FaArrowRight />
        </button>

      </div>

      {/* Indicateurs (dots) */}
      <div className="projects-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;