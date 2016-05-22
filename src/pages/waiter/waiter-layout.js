import React, {createClass, PropTypes} from 'react';
import {Layout} from 'containers/layout';
import BodyClassName from 'react-body-classname';

const WaiterLayoutPage = createClass({
  displayName: 'Waiter-layout',
  propTypes: {
    children: PropTypes.node.isRequired,
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <BodyClassName className="complex-layout">
        <Layout restaurantId={this.props.params.id}>
          {this.props.children}
        </Layout>
      </BodyClassName>
    );
  }
});

export default WaiterLayoutPage;
