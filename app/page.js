import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img
          className="hero-bg"
          src="/images/hero-fiber-crew.jpg"
          alt="Telecom fiber construction crew"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <img
            className="hero-logo"
            src="/images/logo-fl-telecom-spcs.png"
            alt="FL Telecom SPCS logo"
          />

          <p className="eyebrow">Florida Telecom Contractor</p>

          <h1>Fiber Optic Construction Crews in Florida</h1>

          <p className="lead">
            Florida Telecommunications Specialists LLC supports telecom primes,
            network builders, and utility partners with fiber construction,
            underground bury, restoration, and contract-ready field crews.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" href="/subcontracting">
              Partner With Us
            </Link>

            <a className="btn btn-secondary" href="tel:+18135639779">
              Call (813) 563-9779
            </a>
          </div>
        </div>
      </section>

      <section className="truck-section">
        <div>
          <p className="eyebrow">Why contractors call us</p>
          <h2>Reliable labor, clear communication, and a contract-first mindset.</h2>
          <p>
            We provide dependable telecom crews, fast communication, and clean
            field support across Florida.
          </p>
        </div>

        <img
          className="truck-image"
          src="/images/truck-branding.jpg"
          alt="FL Telecom truck branding"
        />
      </section>
    </main>
  );
}