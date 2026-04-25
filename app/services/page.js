import LeadForm from "../components/LeadForm";
import { PageHero, ServicesGrid } from "../components/Sections";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Telecom construction services for Florida projects."
        text="FL TELECOM SPCS supports field production for fiber networks, underground placement, drops, restoration, and subcontractor-backed buildouts."
      />
      <section className="section light">
        <div className="section-inner">
          <div className="section-header">
            <h2>Contract-ready capabilities.</h2>
            <p className="lead">
              Use FL TELECOM SPCS when you need responsive local support and practical field capacity.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid-3">
          {[
            "Route support, drop work, restoration, and closeout coordination.",
            "Underground bury support for residential and commercial service areas.",
            "Scalable subcontracting conversations for primes and project owners."
          ].map((text) => (
            <article className="card" key={text}>
              <h3>Built for the field</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section light">
        <div className="section-inner">
          <LeadForm
            type="quote"
            title="Request a Quote"
            description="Share the scope, location, production needs, and schedule for your telecom project."
            submitLabel="Request Quote"
          />
        </div>
      </section>
    </main>
  );
}
