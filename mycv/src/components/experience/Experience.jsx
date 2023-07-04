import React from 'react';
import { CV } from '../../MyCV/CV';
import './Experience.scss';

const Experience = () => {
  const experienciaLaboral = CV['Experiencia laboral'];

  return (
    <div className="experience-container">
      <h2>Experiencia Laboral</h2>
      {experienciaLaboral.map((experiencia, index) => (
        <div className="job-container" key={index}>
          <h3>{experiencia.puesto}</h3>
          <h4>{experiencia.empresa}</h4>
          <ul>
            {experiencia.tareas.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
          <p>{experiencia.periodo}</p>
        </div>
      ))}
     <button className="buttonEducation" onClick={() => window.location.href = "/home"}>
        Volver a Home
      </button>
    </div>
  );
};

export default Experience;
