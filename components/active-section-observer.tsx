"use client";

import { useEffect } from "react";

export function ActiveSectionObserver() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-section-nav] a"))
      .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
      .filter((item): item is { link: HTMLAnchorElement; section: HTMLElement } => item.section !== null);
    const header = document.querySelector(".site-header");
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = header?.getBoundingClientRect().height ?? 78;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
      const boundary = height + Math.min(160, (window.innerHeight - height) * .3);
      let active: HTMLAnchorElement | undefined;
      for (const target of targets) {
        if (target.section.getBoundingClientRect().top <= boundary) active = target.link;
      }
      for (const { link } of targets) {
        if (link === active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resizeObserver = new ResizeObserver(schedule);
    if (header) resizeObserver.observe(header);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, []);
  return null;
}
