import React, { createClass } from 'react';
import {Reports} from 'containers/reports';

const ReportsPage = createClass({
  render () {
    return (
      <Reports restaurantId={this.props.params.id} />
    )
  }
});

export default ReportsPage;
