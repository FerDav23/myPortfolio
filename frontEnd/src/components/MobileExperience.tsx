import { experience } from "../data/portfolioData";

export function MobileExperience() {
  return (
    <section id="experience" className="section mobile-experience">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Work Experience</p>
          <h2 className="mobile-experience-heading">Professional timeline</h2>
        </div>
        <div className="mobile-timeline" role="list">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.dates}`}
              className="mobile-timeline-item"
              role="listitem"
            >
              <div className="mobile-timeline-marker" aria-hidden />
              <div className="mobile-timeline-content">
                <p className="mobile-timeline-date">{item.dates}</p>
                <h3 className="mobile-timeline-role">{item.role}</h3>
                <p className="mobile-timeline-company">{item.company}</p>
                <ul className="mobile-timeline-achievements">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
