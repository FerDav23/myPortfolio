import { profile } from "../data/portfolioData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <p className="footer-copy">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
