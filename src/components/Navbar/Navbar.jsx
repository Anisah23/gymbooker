// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">GymBooker</Link>
      </div>
      <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>

        <li>
          <Link to="/trainers">Trainers</Link>
        </li>
        <li>
          <Link to="/trainees">Trainees</Link>
        </li>
        <li>
          <Link to="/sessions">Sessions</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
