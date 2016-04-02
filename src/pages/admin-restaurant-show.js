import React, {createClass, PropTypes} from 'react';

const AdminRestaurantShow = createClass({
  displayName: 'Admin-restaurant-show',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div>
        <h1>Show Restaurant</h1>
      </div>
    );
  }
});

export default AdminRestaurantShow;