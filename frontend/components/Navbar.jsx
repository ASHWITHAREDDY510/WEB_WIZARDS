import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        ⚡ Web Wizards
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

        <Link
          to="/login"
          className="join-btn"
        >
          Join
        </Link>

      </div>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

    </nav>
  );
}

export default Navbar;