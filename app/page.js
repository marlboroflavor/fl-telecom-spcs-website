import Link from "next/link";

const services = [
  {
    title: "Fiber Construction",
    text: "Fiber optic construction crews for drops, placement support, restoration, and closeout work across Florida."
  },
  {
    title: "Underground Bury",
    text: "Underground telecom bury support for residential, commercial, and service extension projects."
  },
  {
    title: "Subcontracting",
    text: "Contract-ready field capacity for primes, network owners, and utility partners that need dependable crews."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy-card">
            <p className="eyebrow">Florida Telecom Contractor</p>
            <h1>Florida Fiber Optic Construction Crews</h1>
            <p className="hero-subtitle">
              Contract-ready telecom field support for fiber construction, underground bury, restoration, and
              subcontracting projects across Florida.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/subcontracting">
                Partner With Us
              </Link>
              <a className="button button-secondary" href="tel:+18135639779">
                Call/Text (813) 563-9779
              </a>
            </div>
          </div>

          <div className="hero-image-card">
            <img src="/images/hero-clean.png" alt="Florida telecom fiber construction crew" />
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Telecom field support built for production.</h2>
            <p>
              Clean communication, responsive coordination, and dependable crews for Florida fiber and underground
              telecom scopes.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="truck-section">
        <div className="section-inner truck-grid">
          <div className="truck-image-card">
            <img src="/images/truck-section.png" alt="FL TELECOM SPCS branded telecom truck" />
          </div>
          <div className="truck-copy">
            <p className="eyebrow">Contractor Ready</p>
            <h2>Professional crews for Florida telecom projects.</h2>
            <p>
              Florida Telecommunications Specialists LLC supports prime contractors and network partners with reliable
              field labor, clear communication, and a contract-first mindset.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}