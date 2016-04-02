import React, {createClass, PropTypes} from 'react';

const AdminListResturants = createClass({
  displayName: 'Admin-restaurant-list',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div>
        <h1>Restaurants</h1>
      </div>
    );
  }
});

export default AdminListResturants;