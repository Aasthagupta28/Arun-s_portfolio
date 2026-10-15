"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]";

export default function ScrollReveal() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    document.documentElement.classList.add("has-scroll-reveal");

    const tracked = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    const track = (element: HTMLElement) => {
      if (tracked.has(element)) return;
      tracked.add(element);

      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((child) => child.matches(SELECTOR))
        : [];
      const position = Math.max(siblings.indexOf(element), 0);
      element.style.setProperty("--reveal-delay", `${Math.min(position, 5) * 110}ms`);
      observer.observe(element);
    };

    const trackWithin = (root: Element | Document) => {
      if (root instanceof HTMLElement && root.matches(SELECTOR)) track(root);
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach(track);
    };

    const frame = requestAnimationFrame(() => trackWithin(document));

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) trackWithin(node);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return null;
}
