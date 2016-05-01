import React, {createClass, PropTypes} from 'react';
import {StaffList, StaffModal} from 'containers/restaurant';

const Staff = createClass({
  displayName: 'staff',
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <div>
        <div className="grid push--bottom">
          <div className="grid__item medium--one-half">
            <h1 className="delta flush weight--light">Personal</h1>
          </div>
          <div className="grid__item medium--one-half text--end">
            <StaffModal restaurantId={this.props.params.id} />
          </div>
        </div>
        <StaffList restaurantId={this.props.params.id} />
      </div>
    );
  }
});

export default Staff;
