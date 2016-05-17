import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default function MainMenu(){
  return (
    <ul className="main-navigation nav">
      <li className="main-navigation__item nav__item">
        <Link className="main-navigation__link nav__link" activeClassName="is-active" to="/logout">
          <span className="icon-exit icon-lg" title="Salir"></span> <span className="main-navigation__text">Salir</span>
        </Link>
      </li>
    </ul>
  );
}

MainMenu.displayName = "Main-menu";
