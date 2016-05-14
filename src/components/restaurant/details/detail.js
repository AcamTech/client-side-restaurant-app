import React, { PropTypes } from 'react';

export default function RestaurantDetail ({name, address, phone}) {
  return (
    <div>
      <h1>{name}</h1>
      <hr/>
      <p>{address} - {phone}</p>
    </div>
  );
}

RestaurantDetail.propTypes = {
   name: PropTypes.string,
   address: PropTypes.string,
   phone: PropTypes.string
};