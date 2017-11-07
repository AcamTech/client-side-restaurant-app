import PropTypes from 'prop-types';
import React, { createClass } from 'react';
import RestaurantShow from 'containers/admin-restaurants/restaurant-show';

function Restaurant({ params }) {
  return <RestaurantShow restaurantId={params.id} />;
}

Restaurant.displayName = 'restaurant-show';
Restaurant.propTypes = {
  params: PropTypes.object.isRequired
};

export default Restaurant;
