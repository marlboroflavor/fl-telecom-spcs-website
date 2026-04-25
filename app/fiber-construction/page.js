import LeadForm from "../components/LeadForm";
import { PageHero } from "../components/Sections";

export default function FiberConstructionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Fiber Construction"
        title="Fiber buildout support with production discipline."
        text="Support for fiber construction projects, drops, restoration, placement coordination, and subcontracted field scopes across Florida."
      />
      <section className="section light">
        <div className="section-inner image-band">
          <div className="image-panel">
            <img src="/images/hero-fiber-crew.jpg" alt="Telecom fiber construction crew at work" />
          </div>
          <div>
            <h2>Crews focused on clean, steady execution.</h2>
            <p className="lead">
              FL TELECOM SPCS helps contractors keep fiber work moving with practical field support, direct
              communication, and a clear understanding of production expectations.
            </p>
            <ul className="list-check">
              <li>Fiber drops and construction support</li>
              <li>Restoration and punch list assistance</li>
              <li>Florida project mobilization</li>
              <li>Subcontractor coordination and reporting</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <LeadForm
            type="quote"
            title="Quote Fiber Work"
            description="Tell us where the work is, what needs to be built, and the schedule you are working against."
            submitLabel="Request Fiber Quote"
          />
        </div>
      </section>
    </main>
  );
}
