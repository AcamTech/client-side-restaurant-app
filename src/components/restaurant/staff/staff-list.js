import PropTypes from 'prop-types';
import React, { Component } from 'react';
import renderRows from 'components/table-rows';

const roles = {
  waiter: 'Mesero',
  admin: 'Administrador'
};

export default class StaffList extends Component {
  static displayName = 'staff-list';

  static propTypes = {
    staff: PropTypes.array.isRequired,
    fetchStaff: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired,
    removeStaffMember: PropTypes.func.isRequired,
    editStaffMember: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchStaff(this.props.restaurantId);
  }

  render() {
    var {
      staff,
      restaurantId,
      removeStaffMember,
      editStaffMember
    } = this.props;
    return (
      <div>
        <div className="panel">
          <div className="table-responsive">
            <table className="table table--hover text-center">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th colSpan="2" />
                </tr>
              </thead>
              <tbody>
                {renderRows(
                  staff,
                  restaurantId,
                  ['name', 'email', 'role'],
                  removeStaffMember,
                  editStaffMember,
                  'uid'
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
