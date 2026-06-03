import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Hoakai</h1>

          <h2>Know Hawaiʻi's Ocean</h2>

          <p>
            Explore beaches, identify marine species, and learn the ecosystems
            that shape Hawaiʻi.
          </p>
        </div>
      </section>

      <section className="cards">

        <div className="card">
          <h3>🏝 Beach Explorer</h3>
          <p>
            Learn about habitats, geology, and marine life at Hawaiʻi's
            beaches.
          </p>
        </div>

        <div className="card">
          <h3>🐟 Fish Guide</h3>
          <p>
            Browse Hawaiian reef fish, pelagic species, and identification
            tips.
          </p>
        </div>

        <div className="card">
          <h3>🌿 Limu Guide</h3>
          <p>
            Discover native and invasive limu species and their ecological
            importance.
          </p>
        </div>

        <div className="card">
          <h3>📚 Learn</h3>
          <p>
            Explore marine ecology, conservation, and Hawaiian environmental
            knowledge.
          </p>
        </div>

        <div className="card">
          <h3>🤖 AI Identifier</h3>
          <p>
            Upload photos of fish, limu, and marine organisms for instant
            identification. Coming soon.
          </p>
        </div>

      </section>
    </div>
  );
}

export default App;