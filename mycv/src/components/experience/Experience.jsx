import React, { useState, useEffect } from 'react';
import { CV } from '../../MyCV/CV';
import './Experience.scss';

const Experience = () => {
  const [experienciaIndex, setExperienciaIndex] = useState(0);
  const experienciaLaboral = CV['Experiencia laboral'];

  useEffect(() => {
    // Actualizar el título de la página cuando cambie la experiencia laboral seleccionada
    document.title = experienciaLaboral[experienciaIndex].puesto;
  }, [experienciaIndex, experienciaLaboral]);

  const handleNavigation = (index) => {
    setExperienciaIndex(index);
  };

  return (
    <div className="experience-container">
      <div className="navigation-bar">
        {experienciaLaboral.map((experiencia, index) => (
          <button
            key={index}
            className={`navigation-button ${index === experienciaIndex ? 'active' : ''}`}
            onClick={() => handleNavigation(index)}
          >
            {experiencia.empresa}
          </button>
        ))}
      </div>
      <div className="job-details">
        <h2>{experienciaLaboral[experienciaIndex].puesto}</h2>
        <h3>{experienciaLaboral[experienciaIndex].empresa}</h3>
        <ul>
          {experienciaLaboral[experienciaIndex].tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))}
        </ul>
        <p>{experienciaLaboral[experienciaIndex].periodo}</p>
        <img src={experienciaLaboral[experienciaIndex].imagen} className="imgExperience" alt="imagen de trabajo" />
      </div>
      <button className="buttonExperience" onClick={() => window.location.href = "/home"}>
        Volver a Home
      </button>
    </div>
  );
};

export default Experience;
