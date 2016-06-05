import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRestaurant } from 'actions/restaurants';
import { HeaderContainer } from 'components/restaurant-header';

function mapStateToProps (state, props) {
  var restaurant = state.entities.restaurants[props.restaurantId] || {};
  var user = state.entities.staff[state.staff.authedId] || {};
  return {
    restaurant,
    user
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getRestaurant}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
