export default function Home() {
  return (
    <main>
      <section style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden"
      }}>

        <img
          src="/images/hero-fiber-crew.jpg"
          alt="hero"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)"
        }} />

        <div style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          textAlign: "center",
          top: "40%"
        }}>
          <h1>FL TELECOM SPCS</h1>
        </div>

      </section>
    </main>
  );
}