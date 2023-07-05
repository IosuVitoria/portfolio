import React from 'react';
import "./Footer.scss";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/iosu-gomez-biologo-analista/" className="footer__social-link">
            <FaLinkedin className="footer__social-icon" />
          </a>
          <a href="https://github.com/IosuVitoria" className="footer__social-link">
            <FaGithub className="footer__social-icon" />
          </a>
        </div>
        <div className="footer__info">
          <p className="footer__name">Iosu Gómez Valdecantos</p>
          <p className="footer__email">Correo electrónico: iosugvaldecantos@gmail.com</p>
        </div>
      </div>
      <p className="footer__rights">© 2023 Todos los derechos reservados. Página desarrollada con React.js y SCSS.</p>
    </footer>
  );
}

export default Footer;
