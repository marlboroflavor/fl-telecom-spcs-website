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

      <section className="contact-section" id="contact">
        <div className="contact-wrap">
          <div className="contact-info">
            <p className="section-kicker">DIRECT CONTACT</p>
            <h2>Ready to mobilize crews in Florida?</h2>
            <p className="contact-subtitle">
              Reach FL TELECOM SPCS for fiber construction support, underground bury, subcontracting opportunities,
              quotes, hiring questions, and project coordination.
            </p>

            <div className="contact-details">
              <div className="contact-row">
                <span>Phone/Text</span>
                <a href="tel:+18135639779">(813) 563-9779</a>
              </div>
              <div className="contact-row">
                <span>Email</span>
                <a href="mailto:contracts@fltelecomspcs.com">contracts@fltelecomspcs.com</a>
              </div>
              <div className="contact-row">
                <span>Location</span>
                <strong>Florida</strong>
              </div>
            </div>

            <div className="contact-actions">
              <a className="btn-primary" href="tel:+18135639779">
                Call Now
              </a>
              <a className="btn-secondary" href="sms:+18135639779">
                Text Us
              </a>
            </div>
          </div>

          <form className="lead-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <h2>Request a Quote</h2>
            <label>
              Full Name
              <input name="fullName" type="text" autoComplete="name" required />
            </label>
            <label>
              Email Address
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Phone Number
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
            <label>
              Company Name
              <input name="company" type="text" autoComplete="organization" />
            </label>
            <label>
              Service
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Fiber Construction</option>
                <option>Underground Bury</option>
                <option>Subcontracting</option>
                <option>Restoration</option>
                <option>Hiring</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>
            <button className="form-btn" type="submit">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}