import PropTypes from 'prop-types';
import React, { Component } from 'react';
import renderRows from 'components/table-rows';

export default class TablesList extends Component {
  static displayName = 'tables-list';
  static propTypes = {
    removeTable: PropTypes.func.isRequired,
    editTable: PropTypes.func.isRequired,
    tables: PropTypes.array,
    fetchTables: PropTypes.func.isRequired,
    restaurantId: PropTypes.string.isRequired
  };
  componentDidMount() {
    this.props.fetchTables(this.props.restaurantId);
  }
  render() {
    var { tables, restaurantId, removeTable, editTable } = this.props;
    return (
      <div>
        <div className="panel">
          <div className="table-responsive">
            <table className="table table--hover text-center">
              <thead>
                <tr>
                  <th>Numero</th>
                  <th>Estado</th>
                  <th colSpan="2" />
                </tr>
              </thead>
              <tbody>
                {renderRows(
                  tables,
                  restaurantId,
                  ['number', 'status'],
                  removeTable,
                  editTable,
                  'id'
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
