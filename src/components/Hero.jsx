import MagneticButton from "./MagneticButton";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projets")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = (e) => {
    e.preventDefault();

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="accueil" className="hero">

      {/* IMAGE DE FOND */}
      <div className="hero-background">
        <img src="/images/avatar.png" alt="" />
      </div>

      {/* VOILE SOMBRE */}
      <div className="hero-overlay"></div>

      {/* CONTENU */}
      <div className="hero-content">
        <div className="hero-text">

          {/* PETIT LABEL
          <div className="small-label">
            <span></span>
            PORTFOLIO
          </div> */}

          {/* TITRE */}
          <h1>
            DÉVELOPPEUR
            <br />
            <span>DATA ANALYST</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description">
            Je conçois, je développe et j'analyse des solutions
            numériques innovantes qui transforment des idées
            en expériences exceptionnelles.
          </p>

          {/* BOUTONS */}
          <div className="hero-buttons">

            <MagneticButton
              className="btn btn-primary"
              onClick={scrollToProjects}
              >
              DÉCOUVRIR MON TRAVAIL
              <FaArrowRight />
            </MagneticButton>

            <a
              href="/cv/Joram-Nzietchou-CV.pdf"
              className="btn btn-outline"
              download
            >
              TÉLÉCHARGER MON CV
              <FaDownload />
            </a>

          </div>

          {/* RÉSEAUX SOCIAUX */}
          <div className="social-area">

            <span>SUIVEZ-MOI</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;