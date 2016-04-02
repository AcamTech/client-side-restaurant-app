import React, {createClass, PropTypes} from 'react';

const ListPlaces = createClass({
  displayName: 'Dishes-list',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div>
        <h1>Dishes</h1>
      </div>
    );
  }
});

export default ListPlaces;