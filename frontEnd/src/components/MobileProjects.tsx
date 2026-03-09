import { useState } from "react";
import { projects } from "../data/portfolioData";
import type { ProjectItem } from "../types";
import { ProjectModal } from "./ProjectModal";

export function MobileProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="section mobile-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Portfolio highlights</h2>
        </div>
        <div className="mobile-project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image" aria-hidden>
                <span>{project.category}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="muted">{project.shortDescription}</p>
                <div className="badge-wrap">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span className="badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <button
                    type="button"
                    className="project-btn project-btn-primary"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                  {project.demoUrl && (
                    <a
                      className="project-btn project-btn-link"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      className="project-btn project-btn-link"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  );
}

