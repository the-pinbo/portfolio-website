import { PortraitTriptych } from "@/components/portrait-triptych";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
        <section className="thesis-stage" id="top" aria-labelledby="thesis-title">
          <h1 id="thesis-title">
            I turn meaningful business problems into reliable software and AI systems.
          </h1>
          <p className="cadence">Evaluated. Integrated. Shipped.</p>
        </section>

        <section
          className="identity-frame"
          id="identity-frame"
          aria-labelledby="identity-name"
        >
          <div className="identity-copy">
            <h2 id="identity-name">Inbasekaran Perumal</h2>
            <p className="role">Software Development Engineer II, RingCentral</p>
            <p className="supporting">Building intelligent systems that hold up in real use.</p>
          </div>
          <PortraitTriptych />
        </section>

        <section id="contact" aria-label="Contact"></section>
      </main>
    </>
  );
}
