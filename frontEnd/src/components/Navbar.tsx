import { Sun, Moon } from "lucide-react";

type NavbarProps = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ isDarkMode, onToggleDarkMode }: NavbarProps) {
  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#home" className="brand" aria-label="Home">
          FERNANDO ARIAS
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="mode-toggle"
          onClick={onToggleDarkMode}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={isDarkMode ? "Light mode" : "Dark mode"}
        >
          <span className="mode-toggle-icon" aria-hidden>
            {isDarkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </span>
          <span className="mode-toggle-label">{isDarkMode ? "Light" : "Dark"}</span>
        </button>
      </nav>
    </header>
  );
}
