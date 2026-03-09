import { experience } from "../data/portfolioData";

const delayClasses = ["fade-in-up", "fade-in-up delay-1", "fade-in-up delay-2", "fade-in-up delay-3", "fade-in-up delay-4"];

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Work Experience</p>
          <h2>Professional timeline</h2>
        </div>
        <div className="timeline" role="list">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.dates}`}
              className={`timeline-item ${delayClasses[index % delayClasses.length] ?? "fade-in-up"}`}
              role="listitem"
            >
              <div className="timeline-marker" aria-hidden />
              <div className="timeline-content">
                <p className="timeline-date">{item.dates}</p>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <ul className="timeline-achievements">
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
