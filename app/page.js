export default function Home() {
  return (
    <main className="site">
      <section className="hero">
        <img
          className="heroImage"
          src="/images/hero-fiber-crew.jpg"
          alt="Fiber Construction Crew"
        />

        <div className="overlay"></div>

        <div className="heroText">
          <img
            className="logo"
            src="/images/logo-fl-telecom-spcs.png"
            alt="FL Telecom SPCS"
          />

          <p className="tag">FLORIDA TELECOM CONTRACTOR</p>

          <h1>Fiber Optic Construction Crews in Florida</h1>

          <p className="description">
            Florida Telecommunications Specialists LLC supports telecom primes,
            network builders, and utility partners with fiber construction,
            underground bury, restoration, and contract-ready field crews.
          </p>

          <a className="button" href="tel:+18135639779">
            Call/Text (813) 563-9779
          </a>
        </div>
      </section>

      <section className="truck">
        <div>
          <h2>Reliable field crews for telecom projects</h2>
          <p>
            Fiber construction, underground bury, restoration, and subcontracting
            support across Florida.
          </p>
        </div>

        <img
          src="/images/truck-branding.jpg"
          alt="FL Telecom truck"
        />
      </section>
    </main>
  );
}