import PropTypes from 'prop-types';
import React, { createClass } from 'react';
import RestaurantShow from 'containers/admin-restaurants/restaurant-show';

function AdminRestaurantShow({ params }) {
  return <RestaurantShow restaurantId={params.id} />;
}

AdminRestaurantShow.displayName = 'Admin-restaurant-show';
AdminRestaurantShow.propTypes = {
  params: PropTypes.object.isRequired
};

export default AdminRestaurantShow;
