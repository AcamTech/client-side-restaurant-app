import React, {PropTypes} from 'react';

export default function KitchenLayout({children}){
  return (
    <div>
        <header className="main-header">
          <div className="grid grid--narrow grid--middle">
            <div className="grid__item one-quarter small--two-thirds large--one-half">
              <div className="logo-area">
                <h1 className="logo--medium flush">Toque</h1>{" "}
                <p className="logo-area__text"> | Restaurante Las Comidas</p>
              </div>
            </div><div className="grid__item three-quarters small--one-third large--one-half">
              <ul className="main-navigation nav">
                <li className="main-navigation__item nav__item">
                  <a className="main-navigation__link nav__link" href="#">
                    <span className="icon-exit icon-lg" title="Salir"></span> <span className="main-navigation__text">Salir</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {children}
    </div>
  );
}

KitchenLayout.propTypes = {
  children: PropTypes.node
}