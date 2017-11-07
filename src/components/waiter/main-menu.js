import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router';

export default function MainMenu({restaurantId}){
  return (
    <ul className="main-navigation nav">
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to="/logout">
          <span className="icon-note icon-lg" title="Nueva Orden"></span> <span className="main-navigation__text">Salir</span>
        </Link>
      </li>
    </ul>
  );
}

MainMenu.displayName = "Main-menu";
MainMenu.propTypes = {
  restaurantId: PropTypes.string.isRequired
};
