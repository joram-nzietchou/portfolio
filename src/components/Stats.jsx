import { useEffect, useRef, useState } from "react";
import { FaRocket, FaTerminal, FaTrophy, FaUsers } from "react-icons/fa";

function Counter({ target, suffix = "", duration = 1800 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const start = performance.now();

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);

            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);

            setValue(Math.floor(eased * target));

            if (progress < 1) requestAnimationFrame(animate);
            else setValue(target);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration]);

  // ⬇️ Utilise <strong> au lieu de <span> — style direct
  return (
    <strong ref={ref} className="stat-number">
      {value}
      {suffix}
    </strong>
  );
}

function Stats() {
  const stats = [
    { icon: <FaRocket />, target: 5, suffix: "+", label: "PROJETS RÉALISÉS" },
    { icon: <FaTerminal />, target: 1, suffix: "+", label: "ANNÉES D'EXPÉRIENCE" },
    { icon: <FaTrophy />, target: 5, suffix: "+", label: "TECHNOLOGIES MAÎTRISÉES" },
    { icon: <FaUsers />, target: 100, suffix: "%", label: "PASSION & DÉVOUEMENT" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-icon">{stat.icon}</div>

            <div className="stat-content">
              <Counter target={stat.target} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;