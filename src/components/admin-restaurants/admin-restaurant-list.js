import React, {createClass, PropTypes} from 'react';
import {keys, map, compose} from 'ramda';
import ListItem from './list-item';

export default createClass({
  displayName: 'admin-restaurant-list',
  propTypes: {
    isFetching: PropTypes.bool,
    restaurants: PropTypes.object,
    fetchRestaurants: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchRestaurants();
  },
  render(){
    var {restaurants, isFetching} = this.props;
    if(isFetching){
      return (
        <h1>Cargando Restaurantes</h1>
      );
    }
    return (
      <div className="panel">
        <ul className="item-list list-unstyled">
          {mapRestaurantsFromObj(restaurants)(keys(restaurants))}
        </ul>
      </div>
    );
  }
});

function mapRestaurantsFromObj(restaurants){
  return map(
    restaurant => (
      <ListItem key={restaurant} id={restaurant} restaurant={restaurants[restaurant]} />
    )
  );
}
