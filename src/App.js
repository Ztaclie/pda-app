import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <section className="hero is-primary is-bold">
        <div className="hero-body has-text-centered py-6">
          <div className="container">
            <h1 className="title is-2 mb-4">Personal Digital Assistants</h1>
            <p className="subtitle is-5">
              Compare popular AI assistants and their features
            </p>
          </div>
        </div>
      </section>

      <main className="section">
        <Cards />
      </main>
    </div>
  );
}

export default App;
