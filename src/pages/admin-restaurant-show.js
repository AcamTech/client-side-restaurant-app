import React, {createClass, PropTypes} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import RestaurantShow from 'containers/admin-restaurants/restaurant-show';

const AdminRestaurantShow = createClass({
  displayName: 'Admin-restaurant-show',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <RestaurantShow restaurantId={this.props.params.id} />
    );
  }
});

export default AdminRestaurantShow;
