import Link from "next/link";

const services = [
  {
    title: "Fiber Construction",
    text: "Contract-ready crews for fiber placement, drops, restoration support, and field production needs across Florida."
  },
  {
    title: "Underground Bury",
    text: "Clean underground telecom bury support for residential, commercial, and service extension scopes."
  },
  {
    title: "Subcontracting Support",
    text: "Responsive Florida field capacity for primes, network owners, and utility partners that need dependable crews."
  }
];

const strengths = [
  "Fiber optic construction and restoration support",
  "Underground bury crews for Florida telecom projects",
  "Subcontracting conversations with fast response",
  "Direct phone, text, and contracts email contact"
];

export default function Home() {
  return (
    <main>
      <section className="home-hero" id="home">
        <div className="home-hero-inner">
          <div className="hero-panel">
            <p className="eyebrow">Florida Telecom Contractor</p>
            <h1>Florida Fiber Optic Construction Crews</h1>
            <p className="hero-subheadline">
              Contract-ready telecom field support for fiber construction, underground bury, restoration, and
              subcontracting projects across Florida.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/subcontracting#partner-form">
                Partner With Us
              </Link>
              <a className="btn btn-secondary" href="tel:+18135639779">
                Call/Text (813) 563-9779
              </a>
            </div>
            <div className="hero-contact-row" aria-label="Direct contact">
              <a href="mailto:contracts@fltelecomspcs.com">contracts@fltelecomspcs.com</a>
              <span>Florida Telecommunications Specialists LLC</span>
            </div>
          </div>

          <div className="hero-image-card" aria-label="Telecom fiber crew at work">
            <img src="/images/hero-fiber-crew.jpg" alt="Telecom fiber construction crew working in Florida" />
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-inner">
          <div className="section-header compact">
            <p className="eyebrow">Core Services</p>
            <h2>Field support built for telecom contractors.</h2>
            <p>
              FL TELECOM SPCS supports prime contractors and network partners with practical crews, clear communication,
              and dependable project response.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="section-inner split-layout">
          <div>
            <p className="eyebrow">Why Contractors Call Us</p>
            <h2>Reliable labor, clear communication, and a contract-first mindset.</h2>
          </div>
          <div>
            <p className="section-copy">
              When telecom work needs to keep moving, FL TELECOM SPCS gives project teams a direct path to Florida field
              support for fiber, underground bury, restoration, and subcontracting scopes.
            </p>
            <ul className="check-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section truck-section">
        <div className="section-inner truck-layout">
          <div className="truck-image-card">
            <img src="/images/truck-branding.jpg" alt="FL TELECOM SPCS branded telecom truck" />
          </div>
          <div className="truck-copy">
            <p className="eyebrow">Branded Field Presence</p>
            <h2>Professional crews for Florida fiber and telecom projects.</h2>
            <p>
              From the first call to field production, the team is built for straightforward communication, responsive
              coordination, and contractor-ready support.
            </p>
            <div className="truck-actions">
              <a className="btn btn-primary" href="mailto:contracts@fltelecomspcs.com">
                Email Contracts
              </a>
              <a className="btn btn-secondary" href="sms:+18135639779">
                Text the Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}