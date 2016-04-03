import React, {createClass, PropTypes} from 'react';
import Modal from 'react-modal';
import ModalContainer from '../components/modal-container';
import RegisterRestaurantModal from '../components/register-restaurant-modal';
import {MODAL_STYLES} from '../constants/';

const AdminLayout = createClass({
  displayName: 'Admin-layout',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  getInitialState(){
    return {
      isModalOpen: false
    };
  },
  openModal(){
    this.setState({isModalOpen: true});
  },
  closeModal(){
    this.setState({isModalOpen: false});
  },
  render(){
    return(
      <div className="page-wrap complex-layout">
        <header className="main-header complex-layout__header">
          <div className="grid grid--narrow grid--middle">
            <div className="grid__item one-quarter small--two-thirds large--one-half">
              <div className="logo-area">
                <h1 className="logo--medium flush">Toque</h1>{" "}
                <p className="logo-area__text"> | Admin</p>
              </div>
            </div><div className="grid__item three-quarters small--one-third large--one-half">
              <ul className="main-navigation nav">
                <li className="main-navigation__item nav__item is-active">
                  <a className="main-navigation__link nav__link" href="relatorio.html">
                    <span className="icon-note icon-lg" title="Restaurantes"></span> <span className="main-navigation__text">Restaurantes</span>
                  </a>
                </li>
                <li className="main-navigation__item nav__item">
                  <a className="main-navigation__link nav__link" href="#">
                    <span className="icon-exit icon-lg" title="Salir"></span> <span className="main-navigation__text">Salir</span>
                  </a>
                </li>
              </ul>
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
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={MODAL_STYLES}>
          <ModalContainer closeModal={this.closeModal}>
            <RegisterRestaurantModal />
          </ModalContainer>
        </Modal>
      </div>
    );
  }
});

export default AdminLayout;
