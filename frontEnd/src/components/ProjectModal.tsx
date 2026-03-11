import { useEffect, useState } from "react";
import type { ProjectItem } from "../types";

type ProjectModalProps = {
  project: ProjectItem;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null);
  const hasImages = project.images && project.images.length > 0;
  const expandedImage = expandedImageIndex !== null && project.images ? project.images[expandedImageIndex] : null;

  useEffect(() => {
    if (expandedImageIndex === null) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedImageIndex(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [expandedImageIndex]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      onClick={onClose}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          ×
        </button>
        <h3 id="project-title">{project.title}</h3>
        <p className="muted">{project.fullDescription}</p>

        {(project.demoUrl || project.githubUrl) && (
          <div className="modal-actions">
            {project.demoUrl && (
              <a
                className="project-btn project-btn-link"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
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
        )}

        {hasImages && (
          <div className="modal-gallery">
            <h4>Example Pages</h4>
            <div className="modal-gallery-list">
              {project.images!.map((img, index) => (
                <figure
                  key={index}
                  className={`modal-gallery-item${img.phoneFrame ? " modal-gallery-item--phone" : ""}`}
                >
                  <button
                    type="button"
                    className={`modal-gallery-img-wrap${img.phoneFrame ? " modal-gallery-img-wrap--phone" : ""}`}
                    onClick={() => setExpandedImageIndex(index)}
                    aria-label={`Expand: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={`modal-gallery-img${img.phoneFrame ? " modal-gallery-img--phone" : ""}`}
                    />
                  </button>
                  {img.caption && (
                    <figcaption className="modal-gallery-caption">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {expandedImage && (
          <div
            className="modal-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Expanded image"
            onClick={() => setExpandedImageIndex(null)}
          >
            <button
              type="button"
              className="modal-lightbox-close"
              onClick={() => setExpandedImageIndex(null)}
              aria-label="Close expanded image"
            >
              ×
            </button>
            <div
              className={`modal-lightbox-content${expandedImage.phoneFrame ? " modal-lightbox-content--phone" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expandedImage.src}
                alt={expandedImage.alt}
                className={`modal-lightbox-img${expandedImage.phoneFrame ? " modal-lightbox-img--phone" : ""}`}
              />
              {expandedImage.caption && (
                <p className="modal-lightbox-caption">{expandedImage.caption}</p>
              )}
            </div>
          </div>
        )}

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
