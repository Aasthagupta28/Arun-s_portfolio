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
        "main section [data-reveal]",
        "main section .section-kicker",
        "main section h1",
        "main section h2",
        "main section h3",
        "main section p",
        "main section article",
        "main section aside",
        "main section .education-heading",
        "main section .approach-list > article",
        "main section .project-list-heading",
        "main section .social-links a",
      ].join(", "),
    );
    if (elements.length === 0) return;

    elements.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
      const bounds = element.getBoundingClientRect();
      if (bounds.top <= window.innerHeight + 240 && bounds.bottom >= -100) {
        element.classList.add("is-visible");
      }
    });
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
      { threshold: 0.01, rootMargin: "240px 0px 240px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return null;
}
