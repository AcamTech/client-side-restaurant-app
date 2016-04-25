import React, {createClass, PropTypes} from 'react';
import AdminRestaurantListContainer from 'containers/admin-restaurants/admin-restaurant-list';
import RegisterRestaurantModal from 'containers/admin-restaurants/register-restaurant-modal';

const AdminListResturants = createClass({
  displayName: 'admin-restaurant-list',
  render(){
    return(
      <div>
        <h1 className="delta flush weight--light">Restaurantes</h1>
        <RegisterRestaurantModal />
        <AdminRestaurantListContainer />
      </div>
    );
  }
});

export default AdminListResturants;
