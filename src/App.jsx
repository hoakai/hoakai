import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay">
          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">Species</a>
            <a href="#">Ecosystems</a>
            <a href="#">Activities</a>
            <a href="#">About</a>
          </nav>
          <h1>Hoakai</h1>

          <h2>Marine Science Education for Hawaiʻi</h2>

          <p>
            Explore Hawaiian marine ecosystems, discover native species, and learn
            through interactive educational tools.
          </p>
        </div>
      </section>

      <section className="cards">

        <div className="card">
          <h3>🐟 Marine Species Guide</h3>
          <p>
            Learn about Hawaiian fish, limu, marine mammals, and other native
            species through student-friendly profiles.
          </p>
        </div>

        <div className="card">
          <h3>🌊 Ecosystem Explorer</h3>
          <p>
            Explore coral reefs, tidepools, estuaries, and coastal habitats across
            Hawaiʻi.
          </p>
        </div>

        <div className="card">
          <h3>🌿 Limu Learning Center</h3>
          <p>
            Discover native and invasive limu species and their role in Hawaiian
            marine ecosystems.
          </p>
        </div>

        <div className="card">
          <h3>📚 Learning Activities</h3>
          <p>
            Practice identification skills and reinforce marine science concepts
            through interactive activities.
          </p>
        </div>

        <div className="card">
          <h3>🤖 AI Species Identifier</h3>
          <p>
            Upload photos of marine organisms and receive educational information and
            species identification.
          </p>
        </div>

      </section>
    </div>
  );
}

export default App;