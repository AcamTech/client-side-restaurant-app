import PropTypes from 'prop-types';
import React from 'react';
import { Layout } from 'components/layout';
import { Logger } from 'containers/logger';

function WaiterLayoutPage({ params, children }) {
  return (
    <Layout restaurantId={this.props.params.id}>
      {this.props.children}
      <Logger />
    </Layout>
  );
}

WaiterLayoutPage.displayName = 'Waiter-layout';
WaiterLayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired
};

export default WaiterLayoutPage;
