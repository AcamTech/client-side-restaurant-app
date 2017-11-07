import PropTypes from 'prop-types';
import React, { createClass } from 'react';
import { StaffList, StaffModal } from 'containers/restaurant';

function Staff({ params }) {
  return (
    <div>
      <div className="grid push--bottom">
        <div className="grid__item medium--one-half">
          <h1 className="delta flush weight--light">Personal</h1>
        </div>
        <div className="grid__item medium--one-half text--end">
          <StaffModal restaurantId={params.id} />
        </div>
      </div>
      <StaffList restaurantId={params.id} />
    </div>
  );
}

Staff.displayName = 'staff';
Staff.propTypes = {
  params: PropTypes.object.isRequired
};

export default Staff;
