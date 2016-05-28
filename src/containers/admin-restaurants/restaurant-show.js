import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRestaurant, deselectRestaurant } from 'actions/restaurants';
import { fetchStaff, addOrEditAdmin } from 'actions/staff';
import RestaurantShow from 'components/admin-restaurants/restaurant-show';

function mapStateToProps (state, props) {
  var restaurant = state.entities.restaurants[state.restaurantShow.restaurant] || {};
  return {
    restaurant,
    staff: state.entities.staff,
    isFetching: state.restaurantShow.isFetching
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( { getRestaurant, fetchStaff, addOrEditAdmin, deselectRestaurant } , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantShow);
