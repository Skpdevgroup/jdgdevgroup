import './App.css';

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">JDG</span>
          <span>JDGDevGroup</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-action" href="#contact">
          Let's Connect
        </a>
      </header>

      <main id="home">
        <section className="welcome">
          <p className="eyebrow">WELCOME TO JDGDEVGROUP</p>
          <h1>Turning Ideas Into Real-World Solutions</h1>
          <p>
            Building modern applications with React, TypeScript,
            Python, and Web3 technologies.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;