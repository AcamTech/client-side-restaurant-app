import React, { createClass, PropTypes } from 'react';
import MainMenu from './main-menu';

const RestaurantLayout = createClass({
  displayName: 'restaurant-layout',
  propTypes: {
    getRestaurant: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    restaurantId: PropTypes.string.isRequired,
    restaurant: PropTypes.object.isRequired
  },
  componentDidMount(){
    var {getRestaurant, restaurantId} = this.props;
    getRestaurant(restaurantId);
  },
  render(){
    var {children, restaurantId, restaurant} = this.props;
    var {name} = restaurant;
    return (
      <div className="page-wrap complex-layout">
        <header className="main-header complex-layout__header">
          <div className="grid grid--narrow grid--middle">
            <div className="grid__item one-quarter small--two-thirds large--one-half">
              <div className="logo-area">
                <h1 className="logo--medium flush">Toque</h1>{" "}
                <p className="logo-area__text"> | {name}</p>
              </div>
            </div>
            <div className="grid__item three-quarters small--one-third large--one-half">
              <MainMenu restaurantId={restaurantId} />
            </div>
          </div>
        </header>
        <div className="layout-wrap complex-layout__body">
          <a href="#" className="hamburger-menu hamburger-xclose complex-layout__close js-side-menu-trigger">
            <span className="hamburger-menu__line"></span>
          </a>
          <div className="side-area complex-layout__side-area">
          </div>
          <section className="main-area complex-layout__main-area">
            {children}
          </section>
        </div>
      </div>
    );
  }
});


export default RestaurantLayout;
