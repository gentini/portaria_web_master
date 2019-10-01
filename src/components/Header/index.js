import React from 'react';
// import { Link } from 'react-router-dom';

// import { Container } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <>
      {/* Dropdown Structure */}
      {/* <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="/dweller">Listagem</a>
        </li>
        <li>
          <a href="/dweller#add-dweller-modal">Novo</a>
        </li>
        <li className="divider" />
        <li>
          <a href="#!">three</a>
        </li>
      </ul> */}
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <i>
              <img src={logo} alt="Sistema Portaria" width="70px" />
            </i>
            Portaria
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Controle de Pessoas</a>
            </li>
            <li>
              <a href="/people">Pessoas</a>
            </li>
            <li>
              <a href="/peopletype">Tipo de Pessoas</a>
            </li>
            <li>
              <a href="/dweller">Moradores</a>
            </li>
            {/* Dropdown Trigger */}
            {/* <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                Moradores<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
