import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default function MainMenu({restaurantId}){
  return (
    <ul className="main-navigation nav">
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to={`restaurante/${restaurantId}/personal`}>
          <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Personal</span>
        </Link>
      </li>
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to={`restaurante/${restaurantId}/mesas`}>
          <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Mesas</span>
        </Link>
      </li>
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to={`restaurante/${restaurantId}/menu`}>
          <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Menu</span>
        </Link>
      </li>
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to={`restaurante/${restaurantId}/reportes`}>
          <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Reporte</span>
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
MainMenu.propTypes = {
  restaurantId: PropTypes.string.isRequired
};
