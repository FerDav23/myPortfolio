import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

type MobileNavbarProps = {
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

export function MobileNavbar({ isDarkMode, onToggleDarkMode }: MobileNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const id = requestAnimationFrame(() => {
        setDrawerVisible(true);
      });
      return () => cancelAnimationFrame(id);
    } else {
      setDrawerVisible(false);
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="mobile-header">
      <div className="mobile-nav-bar">
        <a href="#home" className="brand" aria-label="Home" onClick={closeMenu}>
          FERNANDO ARIAS
        </a>
        <div className="mobile-nav-actions">
          <button
            type="button"
            className="mobile-theme-btn mode-toggle"
            onClick={onToggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="mode-toggle-icon" aria-hidden>
              {isDarkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
            </span>
            <span className="mode-toggle-label">{isDarkMode ? "Light" : "Dark"}</span>
          </button>
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {menuOpen &&
        createPortal(
          <>
            <div
              className="mobile-nav-overlay mobile-nav-overlay-open"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <nav
              className={`mobile-nav-drawer ${drawerVisible ? "mobile-nav-drawer-open" : ""}`}
              aria-label="Main navigation"
            >
              <p className="mobile-nav-drawer-title">Menu</p>
              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </>,
          document.body
        )}
    </header>
  );
}
