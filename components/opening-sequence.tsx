"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Enhance the server-rendered, readable opening only when motion has room. */
export function OpeningSequence({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = window.matchMedia("(min-width: 901px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let anchorFrame = 0;
    let disposed = false;
    let interacted = false;
    const initialHash = window.location.hash;
    const markInteraction = () => { interacted = true; };
    const interactionEvents = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    interactionEvents.forEach((event) => window.addEventListener(event, markInteraction, { passive: true }));
    let onLoad: (() => void) | undefined;
    const update = () => {
      frame = 0;
      const header = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 78;
      const distance = element.offsetHeight - (window.innerHeight - header);
      const progress = Math.max(0, Math.min(1, (header - element.getBoundingClientRect().top) / Math.max(1, distance * .8)));
      element.style.setProperty("--opening-progress", String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const configure = () => { element.classList.toggle("opening-sequence--animated", media.matches); update(); };
    const revealIdentity = () => {
      if (!media.matches || window.location.hash !== "#identity-frame") return;
      const header = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 78;
      const distance = element.offsetHeight - (window.innerHeight - header);
      window.scrollTo({ top: window.scrollY + element.getBoundingClientRect().top - header + distance * .8, behavior: "instant" });
      update();
    };
    configure();
    // Fonts and native load-time restoration can settle after hydration in WebKit.
    // Reconcile once, without competing with a reader who has begun interacting.
    const loaded = document.readyState === "complete" ? Promise.resolve() : new Promise<void>((resolve) => {
      onLoad = resolve;
      window.addEventListener("load", onLoad, { once: true });
    });
    void Promise.all([loaded, document.fonts.ready]).then(() => {
      if (disposed) return;
      anchorFrame = requestAnimationFrame(() => {
        anchorFrame = requestAnimationFrame(() => {
          if (disposed) return;
          // Enable smooth in-page navigation only after initial native restoration.
          // Starting smooth scrolling before hydration races WebKit’s compositor.
          if (!interacted && initialHash && window.location.hash === initialHash) {
            if (initialHash === "#identity-frame" && media.matches) revealIdentity();
            else {
              let target: HTMLElement | null = null;
              try { target = document.getElementById(decodeURIComponent(initialHash.slice(1))); } catch { /* malformed fragments have no target */ }
              if (target) {
                const header = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 78;
                window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - header, behavior: "instant" });
                update();
              }
            }
          }
          document.documentElement.setAttribute("data-scroll-ready", "");
        });
      });
    });
    media.addEventListener("change", configure);
    window.addEventListener("resize", configure);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("hashchange", revealIdentity);
    return () => {
      disposed = true;
      document.documentElement.removeAttribute("data-scroll-ready");
      interactionEvents.forEach((event) => window.removeEventListener(event, markInteraction));
      if (onLoad) window.removeEventListener("load", onLoad);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(anchorFrame);
      media.removeEventListener("change", configure);
      window.removeEventListener("resize", configure);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("hashchange", revealIdentity);
    };
  }, []);
  return <section ref={ref} className="opening-sequence" id="top" aria-label="Introduction" onFocusCapture={(event) => {
    const element = ref.current;
    const stage = element?.querySelector(".opening-sticky");
    if (!element?.classList.contains("opening-sequence--animated") || !stage) return;
    const focused = event.target.getBoundingClientRect();
    const bounds = stage.getBoundingClientRect();
    const visible = focused.left >= bounds.left && focused.right <= bounds.right && focused.top >= bounds.top && focused.bottom <= bounds.bottom;
    if (visible) return;
    const header = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 78;
    const distance = element.offsetHeight - (window.innerHeight - header);
    window.scrollTo({ top: window.scrollY + element.getBoundingClientRect().top - header + distance * .8, behavior: "instant" });
    element.style.setProperty("--opening-progress", "1");
  }}><div className="opening-sticky">{children}</div></section>;
}
