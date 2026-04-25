import Link from "next/link";
import { ContactPanel, PageHero } from "../components/Sections";

export default function CapabilityStatementPage() {
  return (
    <main>
      <PageHero
        eyebrow="Capability Statement"
        title="Florida Telecommunications Specialists LLC."
        text="A concise overview for prime contractors, procurement teams, and project partners evaluating FL TELECOM SPCS for subcontracting work."
      />
      <section className="section light">
        <div className="section-inner grid-2">
          <div>
            <h2>Core capabilities</h2>
            <ul className="list-check">
              <li>Fiber construction support</li>
              <li>Underground bury and telecom placement support</li>
              <li>Field labor and crew mobilization</li>
              <li>Restoration, punch list, and closeout assistance</li>
              <li>Florida subcontracting support for telecom primes</li>
            </ul>
          </div>
          <div>
            <h2>Business profile</h2>
            <div className="grid-2">
              <article className="card">
                <h3>Legal name</h3>
                <p>FLORIDA TELECOMMUNICATIONS SPECIALISTS LLC</p>
              </article>
              <article className="card">
                <h3>Operating name</h3>
                <p>FL TELECOM SPCS</p>
              </article>
              <article className="card">
                <h3>Service area</h3>
                <p>Florida</p>
              </article>
              <article className="card">
                <h3>Primary contact</h3>
                <p>contracts@fltelecomspcs.com</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="section-inner cta-content">
          <p className="eyebrow">Procurement Ready</p>
          <h2>Invite FL TELECOM SPCS to bid or qualify for upcoming work.</h2>
          <p className="lead">
            Send project requirements, vendor paperwork, or subcontracting opportunities directly to the contracts inbox.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/subcontracting#partner-form">
              Start Partnership
            </Link>
            <a className="btn btn-secondary" href="mailto:contracts@fltelecomspcs.com">
              Email Contracts
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <ContactPanel />
        </div>
      </section>
    </main>
  );
}
