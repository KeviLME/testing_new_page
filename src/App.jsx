import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const word = 'WELCOME'

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#">
          John
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>
      <main>
        <section className="welcome">
          <div className="top-glow"></div>
          <div className="light-pool"></div>
          <h2>
            {word.split('').map((ch, i) => (
              <span
                key={i}
                className={`letter${ch === 'O' ? ' o' : ''}`}
                style={{
                  animationDelay:
                    ch === 'O' ? `${i * 0.08}s, 1.1s` : `${i * 0.08}s`,
                }}
              >
                {ch}
              </span>
            ))}
          </h2>
          <div className="floor"></div>
        </section>
      </main>
    </>
  )
}

export default App
