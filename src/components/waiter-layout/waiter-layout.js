import React, { createClass, PropTypes } from 'react';
import MainMenu from './main-menu';

const RestaurantLayout = createClass({
  displayName: 'waiter-layout',
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
      <div className="page-wrap">
        <header className="main-header">
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
        <div className="main-area">{children}</div>
      </div>
    );
  }
});


export default RestaurantLayout;
