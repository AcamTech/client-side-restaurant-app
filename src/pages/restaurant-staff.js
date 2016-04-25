import React, {createClass, PropTypes} from 'react';
import RestaurantStaffList from '../containers/restaurant-staff/restaurant-staff-list';
// import RegisterPersonelModal from '../containers/register-personel-modal';

const UsersList = createClass({
  displayName: 'restaurant-staff',
  render(){
    return(
      <div>
        <RestaurantStaffList />
      </div>
    );
  }
});

export default UsersList;
