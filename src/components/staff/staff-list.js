import React, {createClass, PropTypes} from 'react';
import {keys, map, compose} from 'ramda';

const roles = {
  waiter: 'Mesero',
  admin: 'Administrador'
};

export default createClass({
  displayName: 'staff-list',
  propTypes: {
    staff: PropTypes.object,
    fetchStaff: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired,
    removeStaffMember: PropTypes.func.isRequired,
    editStaffMember: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchStaff(this.props.restaurantId);
  },
  mapStaffFromObj(staff){
    return map(
        staffMemberId => {
          const removeFn = this.props.removeStaffMember;
          const editFn = this.props.editStaffMember;
          return (
            <tr key={staffMemberId}>
              <td>{staff[staffMemberId].name}</td>
              <td>{roles[staff[staffMemberId].role]}</td>
              <td>{staff[staffMemberId].email}</td>
              <td>
                <a className="no-decoration color-success" href="#" onClick={() => editFn(staffMemberId, staff[staffMemberId])}><span className="icon-pencil"></span> Editar</a>
              </td>
              <td>
                <a className="no-decoration color-danger" href="#" onClick={() => removeFn(staffMemberId, this.props.restaurantId)}>
                  <span className="icon-x"></span> Eliminar
                </a>
              </td>
            </tr>
          );
        }
    );
  },
  render(){
    var {staff} = this.props;
    return (
      <div>
        <div className="panel">
          <div className="table-responsive">
          <table className="table table--hover text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Email</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody>
              {this.mapStaffFromObj(staff)(keys(staff))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});