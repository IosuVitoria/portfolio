import React, { useState, useEffect } from 'react';
import './Education.scss';
import { CV } from '../../MyCV/CV';
import imageA from '../../assets/digital.svg';
import imageB from '../../assets/personal.svg';

const { competenciasDigitales, competenciasPersonales, formacionAcademica } = CV;

const Formation = () => {
  const [formacionIndex, setFormacionIndex] = useState(0);
  const formacionUniversitaria = formacionAcademica.filter(
    (formacion) => formacion.institución.toLowerCase().includes('universidad')
  );
  const otraFormacion = formacionAcademica.filter(
    (formacion) => !formacion.institución.toLowerCase().includes('universidad')
  );

  useEffect(() => {
    // Actualizar el título de la página cuando cambie la formación académica seleccionada
    document.title = formacionAcademica[formacionIndex].titulo;
  }, [formacionIndex]);

  const handleFormacionNavigation = (index) => {
    setFormacionIndex(index);
  };

  return (
    <div className="formation">
      <div className="competencias">
        <div className="competenciasDigitales">
          <h2>Competencias Digitales</h2>
          <ul>
            <img src={imageA} alt="Competencia Digital" className="imageDecorator" />
            {competenciasDigitales.programación.map((programa, index) => (
              <li key={index}>
                <div className="competencia">
                  <span>{programa}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="competenciasPersonales">
          <h2>Competencias Personales</h2>
          <img src={imageB} alt="Competencia Personal" className="imageDecorator" />
          {Object.values(competenciasPersonales).map((competencia, index) => (
            <div key={index} className="competencia">
              <p>{competencia}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="formacion">
        <h2>Formación Académica</h2>
        <div className="navigation-bar">
          <button
            className={`navigation-button ${formacionIndex === 0 ? 'active' : ''}`}
            onClick={() => handleFormacionNavigation(0)}
          >
            Formación Universitaria
          </button>
          <button
            className={`navigation-button ${formacionIndex === 1 ? 'active' : ''}`}
            onClick={() => handleFormacionNavigation(1)}
          >
            Otra Formación
          </button>
        </div>
        <div className="formacion-details">
          {formacionIndex === 0 && (
            <div className="formacion-universitaria">
              {formacionUniversitaria.map((formacion, index) => (
                <div key={index}>
                  <h3>{formacion.titulo}</h3>
                  <p>{formacion.institución}</p>
                  <p>{formacion.año}</p>
                  <p>{formacion.otros}</p>
                </div>
              ))}
            <img src="https://th.bing.com/th/id/OIP.RvoJgtcfnpeKE_G8sPzAfAHaE8?pid=ImgDet&rs=1" alt="Imagen de código Python" className='imgFormation'/>
            </div>
          )}
          {formacionIndex === 1 && (
            <div className="otra-formacion">
              {otraFormacion.map((formacion, index) => (
                <div key={index}>
                  <h3>{formacion.titulo}</h3>
                  <p>{formacion.institución}</p>
                  <p>{formacion.año}</p>
                  {formacion.otros && (
                    <ul>
                      {formacion.otros.map((otro, index) => (
                        <li key={index}>{otro}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <button className="buttonEducation" onClick={() => (window.location.href = "/home")}>
        Volver a Home
      </button>
    </div>
  );
};

export default Formation;
