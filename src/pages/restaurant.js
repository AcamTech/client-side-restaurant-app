import React, {createClass, PropTypes} from 'react';

const Restaurant = createClass({
  displayName: 'Restaurant',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div>
        <h1>The Restaurant</h1>
      </div>
    );
  }
});

export default Restaurant;