import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CategoriesList } from 'components/restaurant';
import { fetchCategories, removeCategory } from 'actions/categories';
import { editCategory } from 'actions/categories-modal';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps (state, props) {
  var categories = state.categories.list.map(category => state.entities.categories[category]);
  return {
    restaurantId: props.restaurantId,
    categories
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchCategories, removeCategory, editCategory}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList);
