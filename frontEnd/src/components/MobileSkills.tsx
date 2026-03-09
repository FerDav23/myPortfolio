import { skills } from "../data/portfolioData";

export function MobileSkills() {
  return (
    <section id="skills" className="section mobile-skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Technical Skills</p>
          <h2 className="mobile-skills-heading">Tools and technologies I use</h2>
        </div>
        <div className="mobile-skills-grid">
          {skills.map((group) => (
            <article key={group.title} className="mobile-skill-card">
              <div className="mobile-skill-card-accent" aria-hidden />
              <h3 className="mobile-skill-card-title">{group.title}</h3>
              <div className="badge-wrap">
                {group.items.map((item) => (
                  <span key={item} className="badge skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
