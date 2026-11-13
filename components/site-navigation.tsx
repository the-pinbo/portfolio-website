import Link from "next/link";
import { ActiveSectionObserver } from "@/components/active-section-observer";
import { site } from "@/content/portfolio";

export function SiteNavigation({ current }: { current?: string }) {
  return (
    <header className="site-header">
      <Link className="site-mark" href="/">
        {site.mark}
      </Link>
      <nav
        className="section-navigation"
        aria-label={site.navigationLabel}
        data-section-nav
      >
        <ul>
          {site.navigation.map((item) => (
            <li key={item.anchor}>
              <a
                href={`/#${item.anchor}`}
                aria-current={current === item.label ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {!current && <ActiveSectionObserver />}
    </header>
  );
}
