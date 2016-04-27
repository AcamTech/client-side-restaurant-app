import React, {createClass, PropTypes} from 'react';
import StaffList from '../containers/staff/staff-list';
import StaffModal from '../containers/staff/staff-modal';

const Staff = createClass({
  displayName: 'staff',
  render(){
    return(
      <div>
        <h1 className="delta flush weight--light">Personal</h1>
        <StaffModal restaurantId={this.props.params.id} />
        <StaffList restaurantId={this.props.params.id} />
      </div>
    );
  }
});

export default Staff;
