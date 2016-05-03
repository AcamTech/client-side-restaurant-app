import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default function MainMenu({restaurantId}){
  return (
    <ul className="main-navigation nav">
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to={`/restaurante/${restaurantId}/ordenes/lista`}>
          <span className="icon-note icon-lg" title="Ordenes"></span> <span className="main-navigation__text">Ordenes</span>
        </Link>
      </li>
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to={`/restaurante/${restaurantId}/ordenes/nueva-orden`}>
          <span className="icon-note icon-lg" title="Nueva Orden"></span> <span className="main-navigation__text">Nueva Orden</span>
        </Link>
      </li>
    </ul>
  );
}

MainMenu.displayName = "Main-menu";
MainMenu.propTypes = {
  restaurantId: PropTypes.string.isRequired
};
