import Link from "next/link";
import LeadForm from "./components/LeadForm";
import { ContactPanel, ServicesGrid } from "./components/Sections";

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
          <div className="hero-logo-wrap">
            <img
              className="hero-logo"
              src="/images/logo-fl-telecom-spcs.png"
              alt="FL Telecom SPCS logo"
            />
          </div>

          <p className="eyebrow">Florida Telecom Contractor</p>

          <h1>Fiber Optic Construction Crews in Florida</h1>

          <p className="lead">
            Florida Telecommunications Specialists LLC supports telecom primes,
            network builders, and utility partners with fiber construction,
            underground bury, restoration, and contract-ready field crews.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" href="/subcontracting#partner-form">
              Partner With Us
            </Link>

            <Link className="btn btn-secondary" href="/careers#apply-form">
              Apply for Work
            </Link>

            <a className="btn btn-secondary" href="tel:+18135639779">
              Call (813) 563-9779
            </a>
          </div>
        </div>
      </section>

      <section className="truck-section">
        <div className="truck-text">
          <p className="eyebrow">Why contractors call us</p>

          <h2>Reliable labor, clear communication, and a contract-first mindset.</h2>

          <p>
            FL TELECOM SPCS is positioned for prime contractors that need
            dependable crews, fast quoting, clean field reporting, and responsive
            communication from first contact through closeout.
          </p>
        </div>

        <div className="truck-image-wrap">
          <img
            className="truck-image"
            src="/images/truck-branding.jpg"
            alt="FL Telecom branded truck"
          />
        </div>
      </section>

      <ServicesGrid />

      <ContactPanel />

      <section id="partner-form" className="form-section">
        <h2>Request subcontracting support</h2>
        <LeadForm />
      </section>
    </main>
  );
}