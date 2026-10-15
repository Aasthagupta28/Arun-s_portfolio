"use client";

import { useEffect, useState } from "react";

const navigation = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}${isMenuOpen ? " menu-open" : ""}`}
    >
      <div className="container header-inner">
        <a className="logo" href="#home" aria-label="Arun Kumar, home" onClick={closeMenu}>
          Arun<span>.</span>
        </a>

        <nav className="site-nav" id="primary-navigation" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="button button-primary button-small" href="#contact" onClick={closeMenu}>
            Let&apos;s talk
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
