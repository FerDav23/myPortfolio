import { useEffect, useState } from "react";
import type { ProjectItem } from "../types";

const getYouTubeEmbedUrl = (url?: string | null): string | null => {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();

    // Already an embed URL
    if (parsed.pathname.startsWith("/embed/")) {
      return parsed.toString();
    }

    // Standard watch URL: https://www.youtube.com/watch?v=VIDEO_ID
    if (host.includes("youtube.com") && parsed.pathname === "/watch") {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    // Short URL: https://youtu.be/VIDEO_ID
    if (host === "youtu.be") {
      const id = parsed.pathname.replace("/", "").split("/")[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    return null;
  } catch {
    return null;
  }
};

type ProjectModalProps = {
  project: ProjectItem;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null);
  const hasImages = project.images && project.images.length > 0;
  const expandedImage = expandedImageIndex !== null && project.images ? project.images[expandedImageIndex] : null;
  const imagesSectionTitle = project.imagesSectionTitle || "Example Pages";
  const youtubeEmbedUrl = getYouTubeEmbedUrl(project.youtubeUrl);

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

        {youtubeEmbedUrl && (
          <div className="modal-video">
            <h4 style={{ marginBottom: "0.5rem" }}>{project.youtubeTitle || "Video Demo"}</h4>
            <div className="modal-video-frame">
              <iframe
                src={youtubeEmbedUrl}
                title={`${project.title} demo video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {hasImages && (
          <div className="modal-gallery">
            <h4>{imagesSectionTitle}</h4>
            {project.imagesSectionDescription && (
              <p className="modal-gallery-description">{project.imagesSectionDescription}</p>
            )}
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
                  {(img.title || img.description || img.caption) && (
                    <figcaption className="modal-gallery-caption">
                      {img.title && (
                        <span className="modal-gallery-caption-title">
                          {img.title}
                        </span>
                      )}
                      {img.description && (
                        <span className="modal-gallery-caption-description">
                          {img.description}
                        </span>
                      )}
                      {img.caption && (
                        <span className="modal-gallery-caption-text">
                          {img.caption}
                        </span>
                      )}
                    </figcaption>
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
