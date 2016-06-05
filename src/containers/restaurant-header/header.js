import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRestaurant } from 'actions/restaurants';
import { Header } from 'components/restaurant-header';

function mapStateToProps (state, props) {
  var restaurant = state.entities.restaurants[props.restaurantId] || {};
  var user = state.entities.staff[state.staff.authedId] || {};
  return {
    restaurant,
    user
  };
}

export default connect(
  mapStateToProps,
  null
)(Header);
