import Link from "next/link";

export const services = [
  {
    title: "Fiber Construction",
    text: "Aerial and underground fiber support for buildouts, drops, placement, restoration, and closeout needs.",
    href: "/fiber-construction"
  },
  {
    title: "Underground Bury",
    text: "Residential and commercial bury crews focused on clean routes, safe production, and dependable field reporting.",
    href: "/underground-bury"
  },
  {
    title: "Subcontracting",
    text: "Florida-based field capacity for primes that need responsive crews, project discipline, and contract-ready support.",
    href: "/subcontracting"
  }
];

export function ServicesGrid() {
  return (
    <div className="grid-3">
      {services.map((service) => (
        <article className="card service-card" key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <Link href={service.href}>View service</Link>
        </article>
      ))}
    </div>
  );
}

export function ContactPanel() {
  return (
    <div className="contact-panel">
      <p className="eyebrow">Direct Contact</p>
      <h2>Ready to mobilize in Florida.</h2>
      <p className="muted">
        Reach the FL TELECOM SPCS team for subcontracting opportunities, quotes, hiring, and project coordination.
      </p>
      <div className="contact-list">
        <div className="contact-item">
          <strong>Phone/Text</strong>
          <a href="tel:+18135639779">(813) 563-9779</a>
        </div>
        <div className="contact-item">
          <strong>Text</strong>
          <a href="sms:+18135639779">Send a text message</a>
        </div>
        <div className="contact-item">
          <strong>Email</strong>
          <a href="mailto:contracts@fltelecomspcs.com">contracts@fltelecomspcs.com</a>
        </div>
        <div className="contact-item">
          <strong>Location</strong>
          <span>Florida</span>
        </div>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text
}) {
  return (
    <section className="page-hero">
      <div className="section-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
      </div>
    </section>
  );
}
