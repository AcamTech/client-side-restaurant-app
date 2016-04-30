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
        <div className="grid push--bottom">
          <div className="grid__item medium--one-half">
            <h1 className="delta flush weight--light">Mesas</h1>
          </div>
          <div className="grid__item medium--one-half text--end">
            <TablesModal restaurantId={this.props.params.id} />
          </div>
        </div>
        <TablesList restaurantId={this.props.params.id} />
      </div>
    );
  }
});

export default TablesPage;
