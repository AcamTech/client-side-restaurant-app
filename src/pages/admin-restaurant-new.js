import React, {createClass, PropTypes} from 'react';

const AdminRestaurantNew = createClass({
  displayName: 'Admin-restaurant-new',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div>
        <h1>New Restaurant</h1>
      </div>
    );
  }
});

export default AdminRestaurantNew;