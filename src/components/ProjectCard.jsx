function ProjectCard({ title, description, link, tech }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {tech.map((techItem, index) => (
          <span key={index} className="tech-badge">{techItem}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;