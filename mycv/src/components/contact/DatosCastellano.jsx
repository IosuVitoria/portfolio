import React from 'react';
import { CV } from '../../MyCV/CV';

const DatosCastellano = () => {
  const { DatosGenerales, Contacto } = CV;
  const { nombre, apellidos, carrera, intereses } = DatosGenerales;

  return (
    <div>
      <h2>Datos Generales:</h2>
      <p>Nombre: {nombre} {apellidos}</p>
      <strong><p>{carrera}</p></strong>
      <p>Intereses: {intereses}</p>
      <h2>Contacto:</h2>
      <p>Dirección: {Contacto.dirección}</p>
      <strong><p>
        Correo electrónico: <a href={`mailto:${Contacto.gmail}`}>{Contacto.gmail}</a>
      </p></strong>
      <strong><p>LinkedIn: {Contacto.linkedin}</p></strong>
      <p>Coche propio: {Contacto["coche propio"]}</p>
    </div>
  );
};

export default DatosCastellano;
