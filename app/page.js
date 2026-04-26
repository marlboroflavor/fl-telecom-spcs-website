import Link from "next/link";

export default function Home() {
  return (
    <main className="site">
      <section className="hero">
        <img
          className="heroBg"
          src="/images/hero-fiber-crew.jpg"
          alt="Fiber optic construction crew"
        />

        <div className="heroOverlay" />

        <div className="heroContent">
          <img
            className="heroLogo"
            src="/images/logo-fl-telecom-spcs.png"
            alt="FL Telecom SPCS logo"
          />

          <p className="eyebrow">Florida Telecom Contractor</p>

          <h1>Fiber Optic Construction Crews in Florida</h1>

          <p className="lead">
            Florida Telecommunications Specialists LLC supports telecom primes,
            network builders, and utility partners with fiber construction,
            underground bury, restoration, and contract-ready field crews.
          </p>

          <div className="heroButtons">
            <Link className="btn primary" href="/subcontracting">
              Partner With Us
            </Link>

            <a className="btn secondary" href="tel:+18135639779">
              Call/Text (813) 563-9779
            </a>
          </div>
        </div>
      </section>

      <section className="truckSection">
        <div className="truckText">
          <p className="eyebrow">Why contractors call us</p>

          <h2>Reliable field crews for telecom projects</h2>

          <p>
            Fiber construction, underground bury, restoration, and subcontracting
            support across Florida with clear communication and fast response.
          </p>
        </div>

        <img
          className="truckImage"
          src="/images/truck-branding.jpg"
          alt="FL Telecom truck branding"
        />
      </section>
    </main>
  );
}