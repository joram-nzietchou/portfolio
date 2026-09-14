import { useEffect, useRef, useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

import { SiPostgresql } from "react-icons/si";

function About() {
  const skillsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "React",
      percent: 90,
      icon: <FaReact />,
      color: "blue",
    },
    {
      name: "JavaScript / TypeScript",
      percent: 90,
      icon: <FaJsSquare />,
      color: "green",
    },
    {
      name: "Node.js / Express",
      percent: 85,
      icon: <FaNodeJs />,
      color: "green",
    },
    {
      name: "Python",
      percent: 80,
      icon: <FaPython />,
      color: "blue",
    },
    {
      name: "Data Analysis (POWER BI)",
      percent: 80,
      icon: <FaDatabase />,
      color: "purple",
    },
    {
      name: "PostgreSQL / SQL",
      percent: 85,
      icon: <SiPostgresql />,
      color: "green",
    },
    {
      name: "Git",
      percent: 75,
      icon: <FaGitAlt />,
      color: "green",
    },
  ];

  return (
    <section id="apropos" className="section about-section">

      <div className="about-grid">

        {/* ============================================
            COLONNE GAUCHE — À PROPOS
        ============================================ */}
        <div className="about-content">

          <div className="section-heading">
            <h2>À PROPOS DE MOI</h2>
            <span></span>
          </div>

          <p>
            Passionné par la technologie, les données et
            l'intelligence artificielle, je m'efforce de créer
            des solutions intelligentes qui allient performance,
            esthétique et impact.
          </p>

          <p>
            Mon objectif : utiliser la tech pour résoudre des
            problèmes concrets et améliorer le quotidien.
          </p>

          <div className="personal-info">

            <div>
              <FaUser />
              <span>Nom :</span>
              <strong>Joram Nzietchou</strong>
            </div>

            <div>
              <FaEnvelope />
              <span>Email :</span>
              <strong>joramnzietchou@gmail.com</strong>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Localisation :</span>
              <strong>Yaoundé, Cameroun</strong>
            </div>

            <div>
              <FaBriefcase />
              <span>Disponibilité :</span>
              <strong>Ouvert aux opportunités</strong>
            </div>

          </div>

          <button className="btn btn-outline">
            EN SAVOIR PLUS
          </button>

        </div>

        {/* ============================================
            COLONNE DROITE — MES COMPÉTENCES
        ============================================ */}
        <div id="competences" className="skills-preview">

          <div className="section-heading">
            <h2>MES COMPÉTENCES</h2>
            <span></span>
          </div>

          <div className="skills-grid" ref={skillsRef}>

            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>

                <div className={`skill-icon ${skill.color}`}>
                  {skill.icon}
                </div>

                <div className="skill-content">

                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <strong>{skill.percent}%</strong>
                  </div>

                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${skill.color}`}
                      style={{
                        width: animate ? `${skill.percent}%` : "0%",
                        transitionDelay: `${index * 120}ms`,
                      }}
                    ></div>
                  </div>

                </div>

              </div>
            ))}

          </div>

          <div className="skills-button">
            <a href="#projets" className="btn btn-outline">
              VOIR TOUTES MES COMPÉTENCES
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;