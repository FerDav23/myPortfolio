import { aboutNarrative, aboutPillars } from "../data/portfolioData";

export function MobileAbout() {
  return (
    <section id="about" className="section mobile-about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2 className="mobile-about-heading">Engineering across hardware and software</h2>
        </div>
        <div className="mobile-about-body">
          <div className="mobile-about-narrative">
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph} className="muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <h3>How I work (Soft skills)</h3>
            <ul className="muted">
              <li>Clear, direct communication with both technical and non‑technical teammates.</li>
              <li>Collaborative problem‑solving and ownership from idea to deployment.</li>
              <li>Comfort leading initiatives and mentoring peers when needed.</li>
              <li>Curiosity and adaptability when learning new tools, stacks, or domains.</li>
              <li>Works well both independently and in a team.</li>
              <li>Stays focused under pressure and meets deadlines.</li>
              <li>Picks up new skills and technologies quickly.</li>
              <li>Communicates effectively with stakeholders and clients.</li>
            </ul>
          </div>
          <div className="mobile-about-pillars">
            {aboutPillars.map((pillar) => (
              <div key={pillar.title} className="mobile-about-pillar">
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
