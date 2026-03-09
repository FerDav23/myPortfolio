import { profile } from "../data/portfolioData";

export function MobileHero() {
  return (
    <section id="home" className="mobile-hero section">
      <div className="container mobile-hero-inner">
        <div className="mobile-hero-photo">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile photo – Fernando Arias"
          />
        </div>
        <div className="mobile-hero-content">
          <p className="eyebrow">Systems Engineering Portfolio</p>
          <h1 className="mobile-hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="muted mobile-hero-summary">{profile.summary}</p>
          <p className="hero-title">Engineering Focus</p>
          <ul className="muted mobile-hero-focus">
            <li>Embedded systems + firmware integration</li>
            <li>Cloud-backed IoT platforms and data workflows</li>
            <li>Full-stack web and mobile product delivery</li>
          </ul>
          <div className="mobile-hero-cta">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
