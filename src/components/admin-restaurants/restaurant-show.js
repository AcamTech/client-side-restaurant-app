import React, {createClass, PropTypes} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import RestaurantStaffList from './restaurant-staff-list';
import RestaurantDetail from './restaurant-detail';

const AdminRestaurantShow = createClass({
  displayName: 'Admin-restaurant-show',
  propTypes: {
    restaurantId: PropTypes.string.isRequired,
    getRestaurant: PropTypes.func.isRequired,
    fetchStaff: PropTypes.func.isRequired,
    addOrEditAdmin: PropTypes.func.isRequired,
    staff: PropTypes.object,
    restaurant: PropTypes.object,
    deselectRestaurant: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.getRestaurant(this.props.restaurantId);
    this.props.fetchStaff(this.props.restaurantId);
  },
  componentWillUnmount(){
    this.props.deselectRestaurant();
  },
  render(){
    var {restaurant, staff, addOrEditAdmin} = this.props;
    var waiters = restaurant.waiters && Object.keys(restaurant.waiters).map(item => staff[item]);
    var admin = staff[restaurant.admin] || {};
    return(
      <div>
        <h1 className="delta weight--light">{restaurant.name}</h1>
        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Staff</Tab>
          </TabList>
          <TabPanel title="General">
            <RestaurantDetail
              restaurant={restaurant}
              staff={staff}
              restaurantId={this.props.restaurantId}
              deselectRestaurant={this.props.deselectRestaurant} />
          </TabPanel>
          <TabPanel title="staff">
            <h1>Staff</h1>
            <RestaurantStaffList
              restaurant={restaurant}
              waiters={waiters}
              admin={admin}
              addOrEditAdmin={addOrEditAdmin}
              restaurantId={this.props.restaurantId} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
});

export default AdminRestaurantShow;
