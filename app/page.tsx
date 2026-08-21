import { BuilderField } from "@/components/builder-field";
import { HeroCanvas } from "@/components/hero-canvas";
import { ProjectStories } from "@/components/project-stories";
import { SplitPortrait } from "@/components/split-portrait";
import { credibility, links } from "@/content/portfolio";

const externalLinkProps = {
  rel: "noreferrer",
  target: "_blank",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <nav aria-label="Primary navigation" className="site-nav">
            <a className="wordmark" href="#top" id="top">
              Inbasekaran
            </a>
            <div className="site-nav__links">
              <a href="#systems">Systems</a>
              <a href="#method">Method</a>
              <a href="#credibility">Background</a>
              <a href={links.resume} {...externalLinkProps}>
                Résumé
              </a>
            </div>
          </nav>

          <div className="hero__grid">
            <div className="hero__copy">
              <p className="role-label">AI/ML Systems Engineer</p>
              <h1 id="hero-title">
                I turn ambiguous business problems into dependable AI-enabled systems -
                evaluated, integrated, and shipped.
              </h1>
              <div className="hero__actions" aria-label="Primary actions">
                <a className="button button--primary" href="#systems">
                  View flagship systems
                </a>
                <a className="button button--secondary" href="#contact">
                  Contact
                </a>
              </div>
            </div>
            <div className="hero__art">
              <HeroCanvas />
              <SplitPortrait />
            </div>
          </div>
        </section>

        <section className="systems section-shell" aria-labelledby="systems-title" id="systems">
          <div className="section-heading">
            <p className="section-kicker">Flagship systems</p>
            <h2 id="systems-title">Three systems, from model behavior to production delivery.</h2>
            <p>
              Product ownership at RingCentral, framed around the judgment and technical shape
              needed to make AI useful in a real system.
            </p>
          </div>
          <ProjectStories />
        </section>

        <section className="method section-shell" id="method" aria-labelledby="method-title">
          <div className="section-heading section-heading--compact">
            <p className="section-kicker">Engineering loop</p>
            <h2 id="method-title">A working method for systems that have to hold up.</h2>
          </div>
          <BuilderField />
        </section>

        <section className="credibility" id="credibility" aria-label="Selected background">
          <div className="credibility__inner">
            <span>Built across</span>
            {credibility.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact__content">
            <p className="section-kicker">Contact</p>
            <h2 id="contact-title">Have an AI system that needs to become dependable?</h2>
            <p>
              I am interested in difficult product problems where model behavior, systems design,
              and delivery quality all matter.
            </p>
            <div className="contact__links">
              <a className="button button--primary" href={links.email}>
                Email Inbasekaran
              </a>
              <a href={links.linkedin} {...externalLinkProps}>
                LinkedIn
              </a>
              <a href={links.github} {...externalLinkProps}>
                GitHub
              </a>
              <a href={links.resume} {...externalLinkProps}>
                Résumé
              </a>
            </div>
            <p className="contact__signoff">Thanks for stopping by.</p>
          </div>
        </section>
      </main>
    </>
  );
}
