import React, { createClass } from 'react';
import { Reports } from 'containers/reports';

function ReportsPage({ params }) {
  return <Reports restaurantId={this.props.params.id} />;
}

export default ReportsPage;
