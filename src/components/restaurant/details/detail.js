import React, { PropTypes } from 'react';

export default function RestaurantDetailt (props) {
  return (
    <div>
      <h1>{name}</h1>
      <hr/>
      <p>{address} - {phone}</p>
    </div>
  );
}
