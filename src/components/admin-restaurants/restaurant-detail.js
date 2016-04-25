import React, { PropTypes } from 'react';

export default function RestaurantDetail ({restaurant}) {
  return (
    <div>Restaurante</div>
  );
}

RestaurantDetail.propTypes = {
  restaurant: PropTypes.object.isRequired
};
