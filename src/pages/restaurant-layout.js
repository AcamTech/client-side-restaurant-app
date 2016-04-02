import React, {createClass, PropTypes} from 'react';

const RestaurantLayout = createClass({
  displayName: 'Restuarant-layout',
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

export default RestaurantLayout;