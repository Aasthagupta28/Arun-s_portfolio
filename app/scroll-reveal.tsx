"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(
      [
        "[data-reveal]",
        ".section-kicker",
        ".about-grid > h2",
        ".about-copy",
        ".experience-heading",
        ".projects-heading",
        ".focus-heading",
        ".approach-heading",
        ".contact-inner > h2",
        ".contact-inner > p",
        ".contact-inner > .button-contact",
        ".contact-inner > .contact-email",
        ".contact-inner > .social-links",
      ].join(", "),
    );
    if (elements.length === 0) return;

    elements.forEach((element) => element.setAttribute("data-reveal", ""));
    document.documentElement.classList.add("has-scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return null;
}
