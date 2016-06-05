import React, { PropTypes } from 'react';
var roleMapings = {
  'waiter': 'Mesero',
  'admin': 'Administrador',
  'kitchen': 'Cocina',
  'super': 'Super'
};

export default function LogoArea ({restaurantName, address, city}) {
  return (
    <div className="logo-area">
      <h1 className="logo--medium flush">Toque</h1>
      <p className="area-text">
        {restaurantName || ''} <br /> <span className="area-text__small">{address} | {city}</span>
      </p>
    </div>
  );
}

LogoArea.displayName = 'logo-area';

LogoArea.propTypes = {
  restaurantName: PropTypes.string,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};

LogoArea.defaultProps = {
  restaurantName: ''
};
