import React, {createClass, PropTypes} from 'react';
import MainMenu from '../components/main-menu'

const RestaurantLayout = createClass({
  displayName: 'Restuarant-layout',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div className="page-wrap complex-layout">
        <header className="main-header complex-layout__header">
          <div className="grid grid--narrow grid--middle">
            <div className="grid__item one-quarter small--two-thirds large--one-half">
              <div className="logo-area">
                <h1 className="logo--medium flush">Toque</h1>{" "}
                <p className="logo-area__text"> | Restaurante Las comidas</p>
              </div>
            </div>
            <div className="grid__item three-quarters small--one-third large--one-half">
              <MainMenu />
            </div>
          </div>
        </header>
        <div className="layout-wrap complex-layout__body">
          <a href="#" className="hamburger-menu hamburger-xclose complex-layout__close js-side-menu-trigger">
            <span className="hamburger-menu__line"></span>
          </a>
          <div className="side-area complex-layout__side-area">
            <div className="side-area__top">
              <form action="">
              <div className="media media--small">
                <div className="media__img media__img--rev">
                  <a href="#" onClick={this.openModal} className="icon-more icon-lg side-area__icon simple-modal"></a>
                </div>
                <div className="media__body">
                  <div className="form-group push-half--right has-feedback has-feedback--reverse">
                    <input className="form-control input--small side-area__input" placeholder="Buscar" type="text" />
                    <span className="form-control-feedback icon-search"></span>
                  </div>
                </div>
              </div>
              </form>
            </div>
            <ul className="side-navigation">
              <li className="side-navigation__item">
                <a className="side-navigation__link" href="#">
                  <b>Carlos Costa</b> - 345098 <br /> 12:00:00
                  <span className="icon-less"></span>
                </a>
              </li>
            </ul>
          </div>
          <section className="main-area complex-layout__main-area">
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
});

export default RestaurantLayout;