import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';
import { CV } from '../../MyCV/CV';
import myphoto from '../../assets/myphoto.jpg';

const { DatosGenerales } = CV;

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero">
      <div className="hero__background"></div>
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">Datos Generales</h1>
          <p className="hero__info">Nombre: {DatosGenerales.nombre}</p>
          <p className="hero__info">Apellidos: {DatosGenerales.apellidos}</p>
          <p className="hero__info">Carrera: {DatosGenerales.carrera}</p>
          <p className="hero__info">Intereses: {DatosGenerales.intereses}</p>
          <p className="hero__info">Pasiones: {DatosGenerales.pasión}</p>
        </div>
        <div className="hero__image">
          <img className="hero__photo" src={myphoto} alt="Foto personal" />
        </div>
        <div className={`menu-wrap ${menuOpen ? 'open' : ''}`}>
          <span onClick={toggleMenu}><span></span></span>
          <div className="wrap">
            <Link className="menu-button" to="/home">Home</Link>
            <Link className="menu-button" to="/education">Educación</Link>
            <Link className="menu-button" to="/experience">Experiencia</Link>
            <Link className="menu-button" to="/portfolio">Portafolio</Link>
            <Link className="menu-button" to="/contact">Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
