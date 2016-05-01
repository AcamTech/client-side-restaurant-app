import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TablesList } from 'components/restaurant';
import { fetchTables, removeTable } from 'actions/tables';
import { editTable } from 'actions/tables-modal';
import { objectToArray } from 'helpers/format-helpers';

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
