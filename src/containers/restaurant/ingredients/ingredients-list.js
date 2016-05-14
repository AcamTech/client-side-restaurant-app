import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IngredientsList } from 'components/restaurant';
import { fetchIngredients, removeIngredient } from 'actions/ingredients';
import { editIngredient } from 'actions/ingredients-modal';
import { objectToArray } from 'helpers/format-helpers';

function mapStateToProps (state, props) {
  var ingredients = state.ingredients.list.map(ingredient => state.entities.ingredients[ingredient]);
  return {
    restaurantId: props.restaurantId,
    ingredients
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {
    fetchIngredients,
    removeIngredient,
    editIngredient
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsList);
