import PropTypes from 'prop-types';
import React from 'react';

function AdminRestaurantNew() {
  return (
    <div>
      <h1>New Restaurant</h1>
    </div>
  );
}

AdminRestaurantNew.displayName = 'Admin-restaurant-new';
AdminRestaurantNew.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdminRestaurantNew;
