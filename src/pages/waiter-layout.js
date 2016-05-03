import React, {createClass, PropTypes} from 'react';
import WaiterLayout from 'containers/waiter-layout';

const WaiterLayoutPage = createClass({
  displayName: 'Waiter-layout',
  propTypes: {
    children: PropTypes.node.isRequired,
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <WaiterLayout restaurantId={this.props.params.id}>
        {this.props.children}
      </WaiterLayout>
    );
  }
});

export default WaiterLayoutPage;
