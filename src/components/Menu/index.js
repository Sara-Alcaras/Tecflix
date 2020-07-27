import React from 'react';
import Logo from '../../assets/logo.png';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Tecflix logo" />
      </a>

      <a  className="ButtonLink" href="/">
          Novo vídeo
      </a>

    </nav>
  );
}

export default Menu;