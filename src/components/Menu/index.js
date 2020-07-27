import React from 'react';
import Logo from '../../assets/logo.png';
// import ButtonLink from './ButtonLink';
import Button from '../Button';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Tecflix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
          Novo vídeo
      </Button>

    </nav>
  );
}

export default Menu;