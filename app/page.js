import Link from "next/link";
import LeadForm from "./components/LeadForm";
import { ContactPanel, ServicesGrid } from "./components/Sections";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div>
            <p className="eyebrow">Florida Telecom Contractor</p>
            <h1>FL TELECOM SPCS</h1>
            <p className="lead">
              Florida Telecommunications Specialists LLC supports telecom primes, network builders, and utility partners
              with fiber construction, underground bury, restoration, and contract-ready field crews.
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
          <div className="hero-card">
            <p className="eyebrow">Built For Production</p>
            <div className="stat-grid">
              <div className="stat">
                <strong>FL</strong>
                <span>Florida-based operations</span>
              </div>
              <div className="stat">
                <strong>24h</strong>
                <span>Fast contract response</span>
              </div>
              <div className="stat">
                <strong>3</strong>
                <span>Quote, partner, hiring forms</span>
              </div>
              <div className="stat">
                <strong>1</strong>
                <span>Direct contracts inbox</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Core Services</p>
            <h2>Field support for telecom buildouts and contractor partnerships.</h2>
            <p className="lead">
              Crews and project support for fiber, underground placement, restoration, and subcontracting scopes across
              Florida.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <section className="section truck-section">
        <div className="section-inner image-band truck-showcase">
          <div>
            <p className="eyebrow">Why Contractors Call Us</p>
            <h2>Reliable labor, clear communication, and a contract-first mindset.</h2>
            <p className="lead">
              FL TELECOM SPCS is positioned for prime contractors that need dependable crews, fast quoting, clean field
              reporting, and responsive communication from first contact through closeout.
            </p>
            <ul className="list-check">
              <li>Fiber construction and underground bury support</li>
              <li>Subcontracting capacity for Florida telecom projects</li>
              <li>Worker recruiting for field production needs</li>
              <li>Direct phone, text, and contracts email contact</li>
            </ul>
          </div>
          <div className="image-panel truck-panel">
            <img src="/images/truck-branding.jpg" alt="FL TELECOM SPCS branded telecom truck" />
          </div>
        </div>
      </section>

      <section className="section light" id="quote">
        <div className="section-inner contact-grid">
          <LeadForm
            type="quote"
            title="Request a Quote"
            description="Send scope details for fiber, underground bury, restoration, or other telecom field support."
            submitLabel="Request Quote"
          />
          <ContactPanel />
        </div>
      </section>
    </main>
  );
}
