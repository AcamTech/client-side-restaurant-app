import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keys, map, compose } from 'ramda';
import ListItem from './list-item';

export default class AdminRestaurantList extends Component {
  static displayName = 'admin-restaurant-list';
  static propTypes = {
    isFetching: PropTypes.bool,
    restaurants: PropTypes.object,
    getRestaurants: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getRestaurants();
  }
  render() {
    var { restaurants, isFetching } = this.props;
    if (isFetching) {
      return <h1>Cargando Restaurantes</h1>;
    }
    return (
      <div className="panel">
        <ul className="item-list list-unstyled">
          {mapRestaurantsFromObj(restaurants)(keys(restaurants))}
        </ul>
      </div>
    );
  }
}

function mapRestaurantsFromObj(restaurants) {
  return map(restaurant => (
    <ListItem
      key={restaurant}
      id={restaurant}
      restaurant={restaurants[restaurant]}
    />
  ));
}
