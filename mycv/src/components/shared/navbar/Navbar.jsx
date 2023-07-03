import { Link } from "react-router-dom";
import "./Navbar.scss";

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/home" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/education" className="navbar__link">Educación</Link>
        </li>
        <li className="navbar__item">
          <Link to="/experience" className="navbar__link">Experiencia laboral</Link>
        </li>
        <li className="navbar__item">
          <Link to="/portfolio" className="navbar__link">Portfolio</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;