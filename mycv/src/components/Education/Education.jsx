
import React, { useState, useEffect } from 'react';
import './Education.scss';
import { CV } from '../../MyCV/CV';
import imageH from "../../assets/logoHTML.png";
import imageC from "../../assets/LogoCSS.png";
import imageJ from "../../assets/logoJS.png";
import imageR from "../../assets/logoREACT.png";
import imageA from "../../assets/logoAngular.png";
import imageN from "../../assets/logoNODE.png";
import imagePHP from "../../assets/logoPHP.png";
import imageM from "../../assets/logoMYSQL.png";
import imageE from "../../assets/educacion2.png"

const { formacionAcademica } = CV;

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
            <li><img src={imageH} alt="HTML" className="logo" />HTML</li>
            <li><img src={imageC} alt="CSS" className="logo" />CSS</li>
            <li><img src={imageJ} alt="JavaScript" className="logo" />JAVASCRIPT</li>
            <li><img src={imageR} alt="React.js" className="logo" />REACT.JS</li>
            <li><img src={imageA} alt="Angular.js" className="logo" />ANGULAR.JS</li>
            <li><img src={imageN} alt="Node.js y MongoDB" className="logo" />NODE.JS Y MONGODB</li>
            <li><img src={imageM} alt="MySQL" className="logo" />MYSQL</li>
            <li><img src={imagePHP} alt="PHP" className="logo" />PHP Y SYMFONY</li>
          </ul>
          <img src={imageE} alt="PHP" className="educacion" />
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
            Formación Desarrollador Fullstack
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
              <img src="https://sydweb.neocities.org/biologia/1.jpg" alt="Imagen de código Python" className='imgFormation' />
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
              <img src="https://th.bing.com/th/id/OIP.RvoJgtcfnpeKE_G8sPzAfAHaE8?pid=ImgDet&rs=1" alt="Imagen de código Python" className='imgFormation' />
            </div>
          )}
        </div>
      </div>
      <div className="buttonContainer"> {/* Agregamos un contenedor para centrar el botón */}
        <button className="buttonEducation" onClick={() => (window.location.href = "/home")}>
          Volver a Home
        </button>
      </div>
    </div>
  );
};

export default Formation;
