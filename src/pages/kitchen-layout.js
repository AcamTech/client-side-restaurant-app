import React, {createClass, PropTypes} from 'react';
import {Layout} from 'components/layout';
import {Logger} from 'containers/logger';

const KitchenLayout = createClass({
  displayName: 'Kitchen-layout',
  propTypes: {
    children: PropTypes.node.isRequired,
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <Layout restaurantId={this.props.params.id}>
        {this.props.children}
        <Logger />
      </Layout>
    );
  }
});

export default KitchenLayout;

KitchenLayout.propTypes = {
  children: PropTypes.node
};
