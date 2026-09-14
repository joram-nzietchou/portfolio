import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ lightMode, setLightMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const sections = [
    "accueil",
    "apropos",
    "competences",
    "projets",
    "blog",
    "contact",
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${lightMode ? "light" : "dark"}`}>
      <div className="navbar-inner">

        <div
          className="brand"
          onClick={() => scrollToSection("accueil")}
        >
          <div className="brand-symbol">J.</div>
          <div className="brand-info">
            <h2>JORAM NZIETCHOU</h2>
            <span>DEVELOPPEUR | DATA ANALYST</span>
          </div>
        </div>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {[
            { id: "accueil", label: "ACCUEIL" },
            { id: "apropos", label: "À PROPOS" },
            { id: "competences", label: "COMPÉTENCES" },
            { id: "projets", label: "PROJETS" },
            { id: "blog", label: "BLOG" },
            { id: "contact", label: "CONTACT" },
          ].map((item) => (
            <button
              key={item.id}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-btn"
            onClick={() => setLightMode(!lightMode)}
            aria-label="Changer de thème"
          >
            {lightMode ? <FaMoon /> : <FaSun />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;