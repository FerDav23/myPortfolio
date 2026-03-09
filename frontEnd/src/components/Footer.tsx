import { profile } from "../data/portfolioData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <p className="footer-copy">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="footer-links" aria-label="External links" >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
