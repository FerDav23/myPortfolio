import type { ProjectItem } from "../types";

type ProjectModalProps = {
  project: ProjectItem;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          ×
        </button>
        <h3 id="project-title">{project.title}</h3>
        <p className="muted">{project.fullDescription}</p>
        <h4>Technologies Used</h4>
        <div className="badge-wrap">
          {project.techStack.map((tech) => (
            <span className="badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <h4>Architecture</h4>
        <ul>
          {project.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4>Key Highlights</h4>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
