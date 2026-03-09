import { skills } from "../data/portfolioData";

const delayClasses = ["fade-in-up", "fade-in-up delay-1", "fade-in-up delay-2", "fade-in-up delay-3", "fade-in-up delay-4", "fade-in-up delay-5"];

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Technical Skills</p>
          <h2>Tools and technologies I use</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article
              key={group.title}
              className={`skill-card card ${delayClasses[index % delayClasses.length] ?? "fade-in-up"}`}
            >
              <div className="skill-card-accent" aria-hidden />
              <h3 className="skill-card-title">{group.title}</h3>
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
