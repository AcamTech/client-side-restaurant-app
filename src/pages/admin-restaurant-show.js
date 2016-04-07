import React, {createClass, PropTypes} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import RestaurantStaffList from '../components/restaurant-staff-list';

const AdminRestaurantShow = createClass({
  displayName: 'Admin-restaurant-show',
  render(){
    return(
      <div>
        <h1 className="delta weight--light">Restaurante Las Comidas</h1>
        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Staff</Tab>
          </TabList>
          <TabsPanel title="General">
            <h1>General</h1>
          </TabsPanel>
          <TabsPanel title="staff">
            <h1>Staff</h1>
            <RestaurantStaffList />
          </TabsPanel>
        </Tabs>
      </div>
    );
  }
});

export default AdminRestaurantShow;