"use client";

import { useState } from "react";

const formOptions = {
  quote: ["Fiber construction", "Underground bury", "Restoration", "Other telecom scope"],
  partner: ["Prime contractor", "Network owner", "Utility partner", "Staffing or labor partner"],
  apply: ["Fiber crew", "Underground bury crew", "Locator or restoration", "General labor", "Supervisor"]
};

export default function LeadForm({ type, title, description, submitLabel }) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, formType: type })
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      form.reset();
      setStatus("Thanks. The FL TELECOM SPCS team will follow up shortly.");
    } catch {
      setStatus("Please call or text (813) 563-9779, or email contracts@fltelecomspcs.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="form-panel">
      <h2>{title}</h2>
      <p className="muted">{description}</p>
      <form className="lead-form" onSubmit={onSubmit}>
        <div className="field-grid">
          <div className="field">
            <label htmlFor={`${type}-name`}>Name</label>
            <input id={`${type}-name`} name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor={`${type}-company`}>Company</label>
            <input id={`${type}-company`} name="company" autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor={`${type}-phone`}>Phone</label>
            <input id={`${type}-phone`} name="phone" type="tel" autoComplete="tel" required />
          </div>
          <div className="field">
            <label htmlFor={`${type}-email`}>Email</label>
            <input id={`${type}-email`} name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor={`${type}-need`}>{type === "apply" ? "Work interest" : "Need"}</label>
            <select id={`${type}-need`} name="need" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {formOptions[type].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor={`${type}-location`}>Project location</label>
            <input id={`${type}-location`} name="location" autoComplete="address-level1" placeholder="City or county" />
          </div>
          <div className="field full">
            <label htmlFor={`${type}-message`}>Details</label>
            <textarea
              id={`${type}-message`}
              name="message"
              placeholder={
                type === "apply"
                  ? "Tell us about your experience, availability, and equipment."
                  : "Tell us about the scope, schedule, footage, or contract opportunity."
              }
              required
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : submitLabel}
        </button>
        <div className="status" role="status" aria-live="polite">
          {status}
        </div>
        <p className="form-note">Prefer direct contact? Call or text (813) 563-9779.</p>
      </form>
    </div>
  );
}
