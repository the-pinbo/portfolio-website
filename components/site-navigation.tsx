import { ActiveSectionObserver } from "@/components/active-section-observer";

const destinations = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Track Record", href: "#track-record" },
  { label: "Contact", href: "#contact" },
];

export function SiteNavigation() {
  return (
    <header className="site-header">
      <a className="site-mark" href="#top">
        inba.dev
      </a>
      <nav className="section-navigation" aria-label="Section navigation" data-section-nav>
        <ul>
          {destinations.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-header__utility" aria-hidden="true" />
      <ActiveSectionObserver />
    </header>
  );
}
