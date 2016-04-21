import React, {createClass, PropTypes} from 'react';
import AdminRestaurantListContainer from '../containers/admin-restaurant-list'

const AdminListResturants = createClass({
  displayName: 'Admin-restaurant-list',
  render(){
    return(
      <div>
        <h1 className="delta weight--light">Restaurantes</h1>
        <div className="panel">
          <AdminRestaurantListContainer />
        </div>
      </div>
    );
  }
});

export default AdminListResturants;
