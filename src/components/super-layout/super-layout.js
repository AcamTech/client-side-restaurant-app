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
          <div className="side-area complex-layout__side-area">
            <SideNavigation />
          </div>
          <section className="main-area">
            {children}
          </section>
        </div>
      </div>
  );
}

SuperLayout.propTypes = {
  children: React.PropTypes.node.isRequired
};
