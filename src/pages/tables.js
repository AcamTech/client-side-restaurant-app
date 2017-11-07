import PropTypes from 'prop-types';
import React, { createClass } from 'react';
import { TablesModal, TablesList } from 'containers/restaurant';

function TablesPage({ params }) {
  return (
    <div>
      <div className="grid push--bottom">
        <div className="grid__item medium--one-half">
          <h1 className="delta flush weight--light">Mesas</h1>
        </div>
        <div className="grid__item medium--one-half text--end">
          <TablesModal restaurantId={params.id} />
        </div>
      </div>
      <TablesList restaurantId={params.id} />
    </div>
  );
}

TablesPage.displayName = 'Tables-page';

TablesPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default TablesPage;
