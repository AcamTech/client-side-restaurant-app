import React, {createClass, PropTypes} from 'react';
import {keys, map, compose} from 'ramda';

export default createClass({
  displayName: 'tables-list',
  propTypes: {
    tables: PropTypes.object,
    fetchTables: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchTables(this.props.restaurantId);
  },
  mapArrayFromObj(object){
    return map(
        objectId => {
          const removeFn = this.props.removeStaffMember;
          const editFn = this.props.editStaffMember;
          return (
            <tr key={objectId}>
              <td>{object[objectId].number}</td>
              <td>
                <a className="no-decoration color-success" href="#" onClick={() => editFn(objectId, object[objectId])}><span className="icon-pencil"></span> Editar</a>
              </td>
              <td>
                <a className="no-decoration color-danger" href="#" onClick={() => removeFn(objectId, this.props.restaurantId)}>
                  <span className="icon-x"></span> Eliminar
                </a>
              </td>
            </tr>
          );
        }
    );
  },
  render(){
    var {tables} = this.props;
    return (
      <div>
        <div className="panel">
          <div className="table-responsive">
          <table className="table table--hover text-center">
            <thead>
              <tr>
                <th>Numero</th>
                <th colSpan="2"></th>
              </tr>
            </thead>
            <tbody>
              {this.mapArrayFromObj(tables)(keys(tables))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});