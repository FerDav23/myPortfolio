import { profile } from "../data/portfolioData";
import profileImg from "../../assets/Fernando profile picture.jpeg";

export function Hero() {
  return (
    <section id="home" className="hero section" style={{paddingTop: "3rem"}}>
      <div className="container hero-grid">
        <div className="hero-content fade-in-up">
          <p className="eyebrow">Systems Engineering Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="muted" style={{ marginBottom: "1rem" }}>{profile.summary}</p>
          <p className="hero-title">Engineering Focus</p>
          <ul className="muted">
            <li>Embedded systems + firmware integration</li>
            <li>Cloud-backed IoT platforms and data workflows</li>
            <li>Full-stack web and mobile product delivery</li>
          </ul>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-photo fade-in-up delay-1">
          <img
            src={profileImg}
            alt="Fernando Arias – profile photo"
          />
        </div>
      </div>
    </section>
  );
}
