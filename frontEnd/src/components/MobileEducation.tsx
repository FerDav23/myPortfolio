import { education } from "../data/portfolioData";

export function MobileEducation() {
  return (
    <section id="education" className="section mobile-education">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2 className="mobile-education-heading">Academic background</h2>
        </div>
        <article className="mobile-education-card card">
          <h3 className="mobile-education-school">{education.school}</h3>
          <p className="mobile-education-degree">{education.degree}</p>
          {education.certificate && <p className="mobile-education-cert">{education.certificate}</p>}
          <p className="muted mobile-education-date">{education.graduation}</p>
          {education.coursework.length > 0 && (
            <>
              <h4 style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>Relevant coursework</h4>
              <ul className="muted" style={{ margin: 0, paddingLeft: "1.25rem" }}>
                {education.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </>
          )}
        </article>
      </div>
    </section>
  );
}
