import PropTypes from 'prop-types';
import React from 'react';
import { Layout } from 'components/layout';
import { Logger } from 'containers/logger';

function KitchenLayout({ params, children }) {
  return (
    <Layout restaurantId={params.id}>
      {children}
      <Logger />
    </Layout>
  );
}

KitchenLayout.displayName = 'Kitchen-layout';
KitchenLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired
};

export default KitchenLayout;

KitchenLayout.propTypes = {
  children: PropTypes.node
};
