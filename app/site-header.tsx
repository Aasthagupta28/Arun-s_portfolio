"use client";

import { useEffect, useState } from "react";

const navigation = [
  { href: "#projects", label: "Case studies" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#capabilities", label: "Expertise" },
  { href: "#about", label: "Approach" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

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
      <div className="header-inner">
        <a className="wordmark" href="#home" aria-label="Arun Kumar, home" onClick={closeMenu}>
          <span className="wordmark-mark">
            A<span>.</span>
          </span>
          <span className="wordmark-name">ARUN KUMAR</span>
        </a>

        <nav className="site-nav" id="primary-navigation" aria-label="Main navigation">
          {navigation.map(({ href, label }) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="#contact" onClick={closeMenu}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>

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
