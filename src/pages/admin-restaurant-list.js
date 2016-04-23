import React, {createClass, PropTypes} from 'react';
import AdminRestaurantListContainer from '../containers/admin-restaurant-list';
import RegisterRestaurantModal from '../containers/register-restaurant-modal';

const AdminListResturants = createClass({
  displayName: 'admin-restaurant-list',
  render(){
    return(
      <div>
        <h1 className="delta flush weight--light">Restaurantes</h1>
        <div className="panel">
          <AdminRestaurantListContainer />
        </div>
        <RegisterRestaurantModal />
      </div>
    );
  }
});

export default AdminListResturants;
