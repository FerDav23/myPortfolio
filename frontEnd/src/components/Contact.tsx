import { Github, Linkedin } from "lucide-react";
import { profile } from "../data/portfolioData";

const linkedInUrl = profile.linkedIn.startsWith("http")
  ? profile.linkedIn
  : `https://${profile.linkedIn}`;

export function Contact() {
  return (
    <section id="contact" className="section contact-section" style={{ marginBottom: "100px" }}>
      <div className="contact-section-inner">
        <div className="container contact-grid">
          <div className="contact-content card">
            <div className="section-heading">
              <p className="eyebrow">Contact</p>
              <h2>Let's build impactful systems</h2>
            </div>
            <p className="muted contact-intro">
              Open to opportunities in embedded systems, software engineering, and full-stack product development.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-label">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Phone</span>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Location</span>
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="contact-social">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-social btn-linkedin"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} strokeWidth={2} aria-hidden />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-social btn-github"
                aria-label="GitHub profile"
              >
                <Github size={20} strokeWidth={2} aria-hidden />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
