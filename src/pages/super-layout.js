import PropTypes from 'prop-types';
import React, { createClass } from 'react';
import { SideLayout } from 'components/side-layout';
import { Logger } from 'containers/logger';

function AdminLayout({ params, children }) {
  return (
    <SideLayout
      restaurantId={params.restaurantId}
      sidebarItems={[
        {
          pathname: '/super',
          text: 'Restaurantes',
          icon: 'icon-users'
        }
      ]}
    >
      {children}
      <Logger />
    </SideLayout>
  );
}

AdminLayout.displayName = 'Super-layout';

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired
};

export default AdminLayout;
