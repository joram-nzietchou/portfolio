import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const handleClick = (e) => {
    e.stopPropagation();

    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />

        <button
          type="button"
          className="project-overlay"
          onClick={handleClick}
          aria-label={`Ouvrir le projet ${project.title} sur GitHub`}
          title="Voir le code sur GitHub"
        >
          <FaExternalLinkAlt />
        </button>
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="technology-list">
          {project.technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;