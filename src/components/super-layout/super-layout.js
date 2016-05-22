import React from 'react';
import {SideNavigation} from 'components/side-navigation';

export default function SuperLayout({children}){
  return (
      <div className="page-wrap complex-layout">
        <header className="main-header complex-layout__header">
          <div className="grid grid--narrow grid--middle">
            <div className="grid__item">
              <div className="logo-area">
                <h1 className="logo--medium flush">Toque</h1>{" "}
                <p className="logo-area__text"> | Admin</p>
              </div>
            </div>
          </div>
        </header>
        <div className="layout-wrap complex-layout__body">
          <a href="#" className="hamburger-menu hamburger-xclose complex-layout__close js-side-menu-trigger">
            <span className="hamburger-menu__line"></span>
          </a>
          <div className="side-area complex-layout__side-area">
            <SideNavigation />
          </div>
          <section className="main-area complex-layout__main-area">
            {children}
          </section>
        </div>
      </div>
  );
}

SuperLayout.propTypes = {
  children: React.PropTypes.node.isRequired
};
