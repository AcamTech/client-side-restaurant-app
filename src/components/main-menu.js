import React from 'react';
import {Link} from 'react-router';

export default function MainMenu(){
  return (
    <ul className="main-navigation nav">
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to="/restaurante/456/personal">
          <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Personal</span>
        </Link>
      </li>
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to="/restaurante/456/mesas">
          <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Mesas</span>
        </Link>
      </li>
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to="/restaurante/456/menu">
          <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Menu</span>
        </Link>
      </li>
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to="/restaurante/456/reportes">
          <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Reportes</span>
        </Link>
      </li>
      <li className="main-navigation__item nav__item">
        <a className="main-navigation__link nav__link" to="#">
          <span className="icon-exit icon-lg" title="Salir"></span> <span className="main-navigation__text">Salir</span>
        </a>
      </li>
    </ul>
  );
}

MainMenu.displayName = "Main-menu";