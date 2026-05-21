import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <NavLink to="/" className="logo">
        <span className="logo-mark">RT</span>
        <span className="logo-text">RhythmLab</span>
      </NavLink>

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/learn" onClick={() => setMenuOpen(false)}>
          Learn
        </NavLink>

        <NavLink to="/quiz" onClick={() => setMenuOpen(false)}>
          Quiz
        </NavLink>

        <NavLink to="/simulation" onClick={() => setMenuOpen(false)}>
          Simulation
        </NavLink>

        <NavLink to="/results" onClick={() => setMenuOpen(false)}>
          Results
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;