import React from 'react';
import './hero.scss';
import { CV } from '../../MyCV/CV';
import myphoto from '../../assets/myphoto.jpg';

const { DatosGenerales } = CV;

const Hero = () => {


  return (
    <div className="hero">
      <div className="hero__background"></div>
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title" style={{ margin: 0, textAlign: 'right', color: 'white' }}>Junior Fullstack Developer</h1>
          <p className="hero__info"><strong>Nombre:</strong> {DatosGenerales.nombre}</p>
          <p className="hero__info"><strong>Apellidos:</strong> {DatosGenerales.apellidos}</p>
          <p className="hero__info"><strong>Carrera:</strong> {DatosGenerales.carrera}</p>
          <p className="hero__info"><strong>Intereses:</strong> {DatosGenerales.intereses}</p>
          <p className="hero__info"><strong>Pasiones:</strong> {DatosGenerales.pasión}</p>
        </div>
        <div className="hero__image">
          <img className="hero__photo" src={myphoto} alt="Foto personal" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
