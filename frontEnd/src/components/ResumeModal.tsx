import { useEffect } from "react";
import { profile } from "../data/portfolioData";

type ResumeModalProps = {
  onClose: () => void;
};

export function ResumeModal({ onClose }: ResumeModalProps) {
  const { developer, systemsEmbedded } = profile.resumes;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="modal-overlay resume-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div className="modal-card resume-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close resume choice"
        >
          ×
        </button>
        <h2 id="resume-modal-title" className="resume-modal-title">
          Choose a resume
        </h2>
        <p className="muted resume-modal-intro">
          I have two versions tailored for different roles. Pick the one that best fits the position you have in mind.
        </p>

        <div className="resume-modal-options">
          <a
            href={developer.url}
            download="Resume Fernando Arias (Full-stack Developer).pdf"
            rel="noreferrer"
            className="resume-modal-option card"
            onClick={onClose}
          >
            <h3 className="resume-modal-option-title">{developer.label}</h3>
            <p className="muted resume-modal-option-desc">{developer.description}</p>
            <span className="resume-modal-option-cta">Download PDF</span>
          </a>
          <a
            href={systemsEmbedded.url}
            download="Resume Fernando Arias (Systems and Embedded).pdf"
            rel="noreferrer"
            className="resume-modal-option card"
            onClick={onClose}
          >
            <h3 className="resume-modal-option-title">{systemsEmbedded.label}</h3>
            <p className="muted resume-modal-option-desc">{systemsEmbedded.description}</p>
            <span className="resume-modal-option-cta">Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
