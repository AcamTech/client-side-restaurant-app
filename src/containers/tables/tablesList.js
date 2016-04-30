import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TablesList } from 'components/tables';
import { fetchTables, removeTable } from 'actions/tables';
import { editTable } from 'actions/tables-modal';

function objectToArray(object){
  return Object.keys(object)
    .reduce((initialVal, item) => {
      initialVal.push({
        id: item,
        ...object[item]
      });
      return initialVal;
    }, []);
}

function mapStateToProps (state, props) {
  return {
    restaurantId: props.restaurantId,
    tables: objectToArray(state.tables.list || {})
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchTables, removeTable, editTable}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablesList);
