import PropTypes from 'prop-types';
import React from 'react';
import AdminRestaurantListContainer from 'containers/admin-restaurants/admin-restaurant-list';
import RegisterRestaurantModal from 'containers/admin-restaurants/register-restaurant-modal';

function AdminListResturants() {
  return (
    <div>
      <div className="grid">
        <div className="grid__item medium--one-half">
          <h1 className="delta flush weight--light">Restaurantes</h1>
        </div>
        <div className="grid__item medium--one-half text-center medium--text-end">
          <RegisterRestaurantModal />
        </div>
      </div>
      <AdminRestaurantListContainer />
    </div>
  );
}

AdminListResturants.displayName = 'admin-restaurant-list';

export default AdminListResturants;
