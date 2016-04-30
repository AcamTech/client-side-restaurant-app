import React, {createClass, PropTypes} from 'react';
import RestaurantLayout from 'containers/restaurant-layout';

const RestaurantLayoutPage = createClass({
  displayName: 'Restuarant-layout',
  propTypes: {
    children: PropTypes.node.isRequired,
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <RestaurantLayout restaurantId={this.props.params.id}>
        {this.props.children}
      </RestaurantLayout>
    );
  }
});

export default RestaurantLayoutPage;
