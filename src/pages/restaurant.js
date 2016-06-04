import React, {createClass, PropTypes} from 'react';
import RestaurantShow from 'containers/admin-restaurants/restaurant-show';

const Restaurant = createClass({
  displayName: 'restaurant-show',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <RestaurantShow restaurantId={this.props.params.id} />
    );
  }
});

export default Restaurant;
