import LeadForm from "../components/LeadForm";
import { PageHero } from "../components/Sections";

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Apply for telecom field work in Florida."
        text="FL TELECOM SPCS is looking for motivated workers and crews interested in fiber construction, underground bury, restoration, and telecom field support."
      />
      <section className="section light">
        <div className="section-inner grid-3">
          {[
            ["Field workers", "Hands-on telecom workers who can show up, communicate, and work safely."],
            ["Experienced crews", "Fiber and bury crews with tools, transportation, production experience, or leadership."],
            ["Supervisors", "Field leads who understand schedules, reporting, quality, and contractor expectations."]
          ].map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="apply-form">
        <div className="section-inner">
          <LeadForm
            type="apply"
            title="Apply for Work"
            description="Tell us your experience, location, availability, and the type of telecom work you are ready to perform."
            submitLabel="Submit Application"
          />
        </div>
      </section>
    </main>
  );
}
