import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#">
          testing_new_page
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
        <h1>testing_new_page</h1>
      </main>
    </>
  )
}

export default App
