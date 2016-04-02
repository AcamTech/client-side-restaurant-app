import React, {createClass, PropTypes} from 'react';

const TablesList = createClass({
  displayName: 'Tables-list',
  propTypes: {
    children: PropTypes.node.isRequired
  },
  render(){
    return(
      <div>
        <h1>Tables</h1>
      </div>
    );
  }
});

export default TablesList;