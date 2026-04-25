import LeadForm from "../components/LeadForm";
import { PageHero } from "../components/Sections";

export default function SubcontractingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Subcontracting"
        title="Partner with a Florida telecom contractor built for field work."
        text="FL TELECOM SPCS is seeking subcontracting contracts with primes, network owners, and utility partners that need dependable Florida production support."
      />
      <section className="section light">
        <div className="section-inner grid-2">
          <article className="card">
            <h2>For prime contractors</h2>
            <p>
              Add responsive Florida field capacity for fiber construction, underground bury, restoration, punch list
              support, and project needs that require clear communication.
            </p>
          </article>
          <article className="card">
            <h2>For network partners</h2>
            <p>
              Start a direct conversation about upcoming scopes, required documentation, crew expectations, and areas
              where FL TELECOM SPCS can help keep work moving.
            </p>
          </article>
        </div>
      </section>
      <section className="section" id="partner-form">
        <div className="section-inner">
          <LeadForm
            type="partner"
            title="Partner With Us"
            description="Send contract opportunities, prequalification needs, bid invitations, or upcoming project details."
            submitLabel="Send Partnership Request"
          />
        </div>
      </section>
    </main>
  );
}
