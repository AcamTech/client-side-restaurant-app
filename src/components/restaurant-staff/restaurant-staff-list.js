import React, {createClass, PropTypes} from 'react';
import {keys, map, compose} from 'ramda';

const roles = {
  waiter: 'Mesero',
  admin: 'Administrador'
};

export default createClass({
  displayName: 'restaurant-staff-list',
  propTypes: {
    staff: PropTypes.object,
    fetchStaff: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchStaff();
  },
  mapStaffFromObj(staff){
    return map(
        staffMemberId => (
          <tr key={staffMemberId}>
            <td>{staff[staffMemberId].name}</td>
            <td>{roles[staff[staffMemberId].role]}</td>
            <td>{staff[staffMemberId].email}</td>
            <td>
              <a className="no-decoration color-success" href="#"><span className="icon-pencil"></span> Editar</a>
            </td>
            <td>
              <a className="no-decoration color-danger" href="#"><span className="icon-x"></span> Eliminar</a>
            </td>
          </tr>
        )
    );
  },
  render(){
    var {staff} = this.props;
    return (
      <div>
        <h1 className="delta weight--light">Personal</h1>
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