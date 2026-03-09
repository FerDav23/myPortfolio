import { profile } from "../data/portfolioData";

export function Contact() {
  return (
    <section id="contact" className="section" style={{ marginBottom: "100px" }}>
      <div className="container contact-grid">
        <div style={{maxWidth: "400px"}}>
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let's build impactful systems</h2>
          </div>
          <p className="muted" >
            Open to opportunities in embedded systems, software engineering, and full-stack product development.
          </p>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <strong>Location:</strong> {profile.location}
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href={profile.github} target="_blank" rel="noreferrer">
                {profile.github}
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href={profile.linkedIn} target="_blank" rel="noreferrer">
                {profile.linkedIn}
              </a>
            </li>
          </ul>
        </div>
        <form
          className="contact-form card"
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} required />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
