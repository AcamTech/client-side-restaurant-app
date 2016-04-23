import React, {createClass, PropTypes} from 'react';
import AdminRestaurantListContainer from 'src/containers/admin-restaurants/admin-restaurant-list';
import RegisterRestaurantModal from 'src/containers/admin-restaurants/register-restaurant-modal';
import CreateRestaurantModalButton from 'src/containers/admin-restaurants/create-restaurant-modal-button';

const AdminListResturants = createClass({
  displayName: 'admin-restaurant-list',
  render(){
    return(
      <div>
        <h1 className="delta flush weight--light">Restaurantes</h1>
        <CreateRestaurantModalButton>Crear Restaurante</CreateRestaurantModalButton>
        <AdminRestaurantListContainer />
        <RegisterRestaurantModal />
      </div>
    );
  }
});

export default AdminListResturants;
