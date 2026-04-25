import LeadForm from "../components/LeadForm";
import { PageHero } from "../components/Sections";

export default function UndergroundBuryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Underground Bury"
        title="Underground telecom bury support in Florida."
        text="Field support for underground fiber and telecom placement where safety, route care, and dependable communication matter."
      />
      <section className="section light">
        <div className="section-inner grid-3">
          {[
            ["Residential Drops", "Bury support for neighborhood and service drop programs."],
            ["Commercial Routes", "Practical support for business and site service extensions."],
            ["Restoration", "Clean finish expectations and attention to closeout details."]
          ].map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <LeadForm
            type="quote"
            title="Request Underground Bury Support"
            description="Send route, footage, location, timeline, and any production requirements."
            submitLabel="Request Bury Quote"
          />
        </div>
      </section>
    </main>
  );
}
