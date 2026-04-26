import Link from "next/link";
import "./globals.css";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Fiber Construction", "/fiber-construction"],
  ["Underground Bury", "/underground-bury"],
  ["Subcontracting", "/subcontracting"],
  ["Capability", "/capability-statement"],
  ["Careers", "/careers"],
  ["Contact", "/contact"]
];

export const metadata = {
  title: "FL TELECOM SPCS | Florida Telecommunications Specialists LLC",
  description:
    "Florida telecom contractor specializing in fiber construction, underground bury, subcontracting support, and telecom workforce solutions.",
  metadataBase: new URL("https://fltelecomspcs.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <div className="topbar">
            <div className="topbar-inner">
              <span>Florida Telecommunications Specialists LLC</span>
              <div className="contact-strip">
                <a href="tel:+18135639779">Call/Text (813) 563-9779</a>
                <a href="mailto:contracts@fltelecomspcs.com">contracts@fltelecomspcs.com</a>
                <span>Florida</span>
              </div>
            </div>
          </div>
          <header className="header">
            <nav className="nav-inner" aria-label="Main navigation">
              <Link className="brand" href="/">
                <img className="brand-logo" src="/images/logo-final.png" alt="FL TELECOM SPCS" />
              </Link>
              <div className="nav-links">
                {navItems.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
              <Link className="nav-cta" href="/subcontracting#partner-form">
                Partner With Us
              </Link>
            </nav>
          </header>
          {children}
          <footer className="footer">
            <div className="footer-inner">
              <div>
                <div className="footer-brand">
                  <img className="footer-logo" src="/images/logo-final.png" alt="FL TELECOM SPCS" />
                </div>
                <p className="muted">
                  Florida Telecommunications Specialists LLC provides reliable field support for prime contractors,
                  network owners, and utility partners across Florida.
                </p>
              </div>
              <div>
                <h3>Contact</h3>
                <div className="footer-links">
                  <a href="tel:+18135639779">(813) 563-9779</a>
                  <a href="sms:+18135639779">Text the team</a>
                  <a href="mailto:contracts@fltelecomspcs.com">contracts@fltelecomspcs.com</a>
                  <span>Florida</span>
                </div>
              </div>
              <div>
                <h3>Opportunities</h3>
                <div className="footer-links">
                  <Link href="/subcontracting">Subcontracting contracts</Link>
                  <Link href="/careers">Apply for work</Link>
                  <Link href="/capability-statement">Capability statement</Link>
                </div>
              </div>
            </div>
          </footer>
          <div className="mobile-sticky" aria-label="Mobile quick contact">
            <a href="tel:+18135639779">Call</a>
            <a href="sms:+18135639779">Text</a>
          </div>
        </div>
      </body>
    </html>
  );
}
