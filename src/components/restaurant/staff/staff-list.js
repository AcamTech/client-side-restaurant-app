import React, {createClass, PropTypes} from 'react';
import renderRows from 'components/table-rows';

const roles = {
  waiter: 'Mesero',
  admin: 'Administrador'
};

export default createClass({
  displayName: 'staff-list',
  propTypes: {
    staff: PropTypes.array,
    fetchStaff: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired,
    removeStaffMember: PropTypes.func.isRequired,
    editStaffMember: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchStaff(this.props.restaurantId);
  },

  render(){
    var {staff, restaurantId, removeStaffMember, editStaffMember} = this.props;
    return (
      <div>
        <div className="panel">
          <div className="table-responsive">
          <table className="table table--hover text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody>
              {renderRows(staff, restaurantId, ['name', 'email'], removeStaffMember, editStaffMember)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});
