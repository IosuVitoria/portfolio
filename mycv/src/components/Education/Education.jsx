import React from 'react';
import './Education.scss';
import { CV } from '../../MyCV/CV';
import imageA from '../../assets/digital.svg';
import imageB from '../../assets/personal.svg';


const { competenciasDigitales, competenciasPersonales, formacionAcademica } = CV;

const Formation = () => {

  const formacionUniversitaria = formacionAcademica.filter(
    (formacion) => formacion.institución.toLowerCase().includes('universidad')
  );

  const otraFormacion = formacionAcademica.filter(
    (formacion) => !formacion.institución.toLowerCase().includes('universidad')
  );

  return (
    <div className="formation">
      <div className="competencias">
        <div className="competenciasDigitales">
          <h2>Competencias Digitales</h2>
          <ul>
            <img src={imageA} alt="Competencia Digital" className='imageDecorator' /> {/* Agrega la ruta de la imagen digital */}
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
          <img src={imageB} alt="Competencia Personal" className='imageDecorator' /> {/* Agrega la ruta de la imagen personal */}
          {Object.values(competenciasPersonales).map((competencia, index) => (
            <div key={index} className="competencia">
              <p>{competencia}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="formacion">
        <h2>Formación Académica</h2>
        <div className="formacion-universitaria">
          <h3>Formación Universitaria</h3>
          {formacionUniversitaria.map((formacion, index) => (
            <div key={index}>
              <h4>{formacion.titulo}</h4>
              <p>{formacion.institución}</p>
              <p>{formacion.año}</p>
              <p>{formacion.otros}</p>
            </div>
          ))}
        </div>

        <div className="otra-formacion">
          <h3>Otra Formación</h3>
          {otraFormacion.map((formacion, index) => (
            <div key={index}>
              <h4>{formacion.titulo}</h4>
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
      </div>
      <button className="buttonEducation" onClick={() => window.location.href = "/home"}>
        Volver a Home
      </button>
    </div>
  );
};

export default Formation;
