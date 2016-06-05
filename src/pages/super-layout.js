import React, {createClass, PropTypes} from 'react';
import {SideLayout} from 'components/side-layout';
import {Logger} from 'containers/logger';

const AdminLayout = createClass({
  displayName: 'Super-layout',
  propTypes: {
    children: PropTypes.node.isRequired,
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <SideLayout
        restaurantId={this.props.params.restaurantId}
        sidebarItems={[  {
          pathname: '/super',
          text: 'Restaurantes',
          icon: 'icon-users'
        }]}>
        {this.props.children}
        <Logger />
      </SideLayout>
    );
  }
});

export default AdminLayout;
