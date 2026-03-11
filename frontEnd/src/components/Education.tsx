import { education } from "../data/portfolioData";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Academic background</h2>
        </div>
        <article className="card education-card">
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          {education.certificate && <p>{education.certificate}</p>}
          <p className="muted">{education.graduation}</p>
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
