import React, {createClass, PropTypes} from 'react';
import Tabs from 'react-simpletabs';
import RestaurantStaffList from '../components/restaurant-staff-list';

const AdminRestaurantShow = createClass({
  displayName: 'Admin-restaurant-show',
  render(){
    return(
      <div>
        <h1 className="delta weight--light">Restaurante Las Comidas</h1>
        <Tabs>
          <Tabs.Panel title="General">
            <h1>General</h1>
            
          </Tabs.Panel>
          <Tabs.Panel title="staff">
            <h1>Staff</h1>
            <RestaurantStaffList />
          </Tabs.Panel>
        </Tabs>
      </div>
    );
  }
});

export default AdminRestaurantShow;