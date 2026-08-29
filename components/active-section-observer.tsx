"use client";

import { useEffect } from "react";

export function ActiveSectionObserver() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("[data-section-nav]");
    if (!nav) return;

    const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a[href^='#']"));
    const sections = links
      .map((link) => {
        const id = link.getAttribute("href")?.slice(1);
        return id ? document.getElementById(id) : null;
      })
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const activeId = visible[0].target.id;
        links.forEach((link) => {
          const targetId = link.getAttribute("href")?.slice(1);
          if (targetId === activeId) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      {
        rootMargin: "-38% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
