import { ActiveSectionObserver } from "@/components/active-section-observer";
import { site } from "@/content/portfolio";

export function SiteNavigation() {
  return (
    <header className="site-header">
      <a className="site-mark" href="#top">
        {site.mark}
      </a>
      <nav className="section-navigation" aria-label={site.navigationLabel} data-section-nav>
        <ul>
          {site.navigation.map((item) => (
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
