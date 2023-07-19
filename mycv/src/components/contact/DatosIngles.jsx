import React from 'react';
import { CV } from '../../MyCV/CV';


const DatosIngles = () => {
  const { DatosGeneralesEN, Contacto } = CV;
  const { name, last_name, career, interests } = DatosGeneralesEN;

  return (
    <div>
      <h2>General Information:</h2>
      <strong><p>{name} {last_name}</p></strong>
      <strong><p>{career}</p></strong>
      <p>Interests: {interests}</p>
      <h2>Contact Information:</h2>
      <p>Address: {Contacto.dirección}</p>
      <p><strong>{Contacto.teléfono}</strong></p>
      <strong><p>
        Email: <a href={`mailto:${Contacto.gmail}`}>{Contacto.gmail}</a>
      </p></strong>
      <strong><p>LinkedIn: {Contacto.linkedin}</p></strong>
      <p>Own Car: {Contacto["coche propio"]}</p>
    </div>
  );
};

export default DatosIngles;
