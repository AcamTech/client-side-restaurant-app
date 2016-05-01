import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CategoriesList } from 'components/restaurant';
import { fetchCategories, removeCategory } from 'actions/categories';
import { editCategory } from 'actions/categories-modal';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps (state, props) {
  return {
    restaurantId: props.restaurantId,
    categories: objectToArray(state.categories.list || {})
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchCategories, removeCategory, editCategory}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList);
