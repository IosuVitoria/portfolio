import React from 'react';
import "./Footer.scss";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <a href="https://twitter.com/tu_usuario_de_twitter" className="footer__social-link">
            <FaTwitter className="footer__social-icon" />
          </a>
          <a href="https://linkedin.com/in/tu_usuario_de_linkedin" className="footer__social-link">
            <FaLinkedin className="footer__social-icon" />
          </a>
          <a href="https://github.com/tu_usuario_de_github" className="footer__social-link">
            <FaGithub className="footer__social-icon" />
          </a>
        </div>
        <div className="footer__info">
          <p className="footer__name">Iosu Gómez Valdecantos</p>
          <p className="footer__email">Correo electrónico: iosugvaldecantos@gmail.com</p>
        </div>
      </div>
      <p className="footer__rights">© 2023 Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;
