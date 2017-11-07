import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { RestaurantForm } from 'containers/restaurant-form';
import { format } from 'date-fns';

export default class RestaurantDetails extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired,
    staff: PropTypes.object
  };
  render() {
    var { restaurant, staff } = this.props;
    return (
      <div>
        <h1 className="gamma">Resumen</h1>
        <p>
          Administrador:{' '}
          {staff[restaurant.admin] && staff[restaurant.admin].name}
        </p>
        <p>Total de mesas: {Object.keys(restaurant.tables || {}).length}</p>
        <p>Total de platos: {Object.keys(restaurant.dishes || {}).length}</p>
        <p>Total de meseros: {Object.keys(restaurant.waiters || {}).length}</p>
        <p>
          Total de ordenes emitidas:{' '}
          {Object.keys(restaurant.orders || {}).length}
        </p>
        <p>
          Fecha de creacion:{' '}
          {restaurant.createdAt && format(restaurant.createdAt, 'DD/MM/YYYY')}
        </p>
        <div className="panel panel--large">
          <RestaurantForm />
        </div>
      </div>
    );
  }
}
