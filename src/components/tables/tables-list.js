import React, {createClass, PropTypes} from 'react';
import TableRow from './table-row';
import {keys, map, compose} from 'ramda';

export default createClass({
  displayName: 'tables-list',
  propTypes: {
    removeTable: PropTypes.func.isRequired,
    editTable: PropTypes.func.isRequired,
    tables: PropTypes.array,
    fetchTables: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.fetchTables(this.props.restaurantId);
  },
  renderTables(tables, restaurantId){
    const removeFn = this.props.removeTable;
    const editFn = this.props.editTable;
    return tables.map( (item) => {
      var oldItem = {...item};
      var {id} = item;
      return (
        <TableRow
          key={id}
          id={id}
          data={item}
          restaurantId={restaurantId}
          onClickRemoveHandler={removeTableFactory(removeFn, oldItem, restaurantId)}
          onClickEditHandler={editTableFactory(editFn, oldItem)} />
      );
    });
  },
  render(){
    var {tables, restaurantId} = this.props;
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
              {this.renderTables(tables, restaurantId)}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});

function removeTableFactory(removeFn, table, restaurantId){
  return function removeTableFactoryThunk(){
    return removeFn(table, restaurantId);
  };
}

function editTableFactory(editFn, table){
  return function editTableFactoryThunk(){
    return editFn(table);
  };
}
