import { aboutNarrative, aboutPillars } from "../data/portfolioData";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2 style={{ marginBottom: "-10px" }}>Engineering across hardware and software</h2>
        </div>
        <div >
          <div style={{ marginBottom: "2rem" }}>
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph} className="muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="pillars-card">
            {aboutPillars.map((pillar) => (
              <div key={pillar.title} className="pillar-item">
                <span className="pill-icon" aria-hidden>
                  ●
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p className="muted">{pillar.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
