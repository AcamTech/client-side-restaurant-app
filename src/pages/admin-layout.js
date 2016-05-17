import React, {createClass, PropTypes} from 'react';
import {SuperLayout} from 'containers/super-layout';

const AdminLayout = createClass({
  displayName: 'Admin-layout',
  propTypes: {
    children: PropTypes.node.isRequired,
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <SuperLayout>
        {this.props.children}
      </SuperLayout>
    );
  }
});

export default AdminLayout;
