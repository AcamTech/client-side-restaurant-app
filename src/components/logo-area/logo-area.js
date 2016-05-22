import React, { PropTypes } from 'react';
var roleMapings = {
  'waiter': 'Mesero',
  'admin': 'Administrador',
  'kitchen': 'Cocina',
  'super': 'Super Controlador'
};

export default function LogoArea ({restaurantName, userName, userRole}) {
  return (
    <div className="logo-area">
      <h1 className="logo--medium flush">Toque</h1>
      <p className="area-text">
        {restaurantName} <br /> <span className="area-text__small">{userName} | {roleMapings[userRole]}</span>
      </p>
    </div>
  );
}

LogoArea.displayName = 'logo-area';

LogoArea.propTypes = {
  restaurantName: PropTypes.string,
  userName: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired
};

LogoArea.defaultProps = {
  restaurantName: ''
};
