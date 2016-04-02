import React, {createClass, PropTypes} from 'react';

const UsersList = createClass({
  displayName: 'Users-list',
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

export default UsersList;