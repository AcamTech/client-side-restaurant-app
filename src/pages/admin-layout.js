import React, {createClass, PropTypes} from 'react';

const AdminLayout = createClass({
  displayName: 'Admin-layout',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default AdminLayout;