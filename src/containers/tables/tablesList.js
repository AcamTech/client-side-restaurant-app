import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TablesList } from 'components/tables'
import { fetchTables } from 'actions/tables'

function mapStateToProps (state, props) {
  return {
    restaurantId: props.restaurantId,
    tables: state.tables.list
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchTables}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablesList);
