import React from "react";
import { Link } from "react-router";
import '../css/Navbar.css'; // Importamos los estilos

function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">React MySQL</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/new" className="navbar-link">Tasks Form</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;