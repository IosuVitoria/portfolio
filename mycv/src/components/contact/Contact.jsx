import React, { useState } from 'react';
import DatosCastellano from './DatosCastellano';
import DatosIngles from './DatosIngles';
import ImageES from '../../assets/españa.png';
import ImageEN from '../../assets/reino_unido.png';
import './Contact.scss';

const Contacto = () => {
  const [idioma, setIdioma] = useState("español");

  const handleChangeIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  return (
    <div className="container">
      <div className="language-buttons">
        <button onClick={() => handleChangeIdioma("español")}>
          <img src={ImageES} alt="Español" />
        </button>
        <button onClick={() => handleChangeIdioma("inglés")}>
          <img src={ImageEN} alt="Inglés" />
        </button>
      </div>
      <div className="contacto-container">
        {idioma === "español" ? <DatosCastellano /> : <DatosIngles />}
      </div>
    </div>
  );
};

export default Contacto;
