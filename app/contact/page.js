import LeadForm from "../components/LeadForm";
import { ContactPanel, PageHero } from "../components/Sections";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Call, text, or email FL TELECOM SPCS."
        text="Reach the team for quotes, subcontracting contracts, hiring, and Florida telecom project support."
      />
      <section className="section light">
        <div className="section-inner contact-grid">
          <ContactPanel />
          <LeadForm
            type="quote"
            title="Send a Message"
            description="Use this form for quotes, partnership conversations, hiring questions, or project details."
            submitLabel="Send Message"
          />
        </div>
      </section>
    </main>
  );
}
