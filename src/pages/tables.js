import React, {createClass, PropTypes} from 'react';
import {TablesModal, TablesList} from 'containers/tables';

const TablesPage = createClass({
  displayName: 'Tables-page',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <div>
        <h1 className="delta flush weight--light">Mesas</h1>
        <TablesModal restaurantId={this.props.params.id} />
        <TablesList restaurantId={this.props.params.id} />
      </div>
    );
  }
});

export default TablesPage;
