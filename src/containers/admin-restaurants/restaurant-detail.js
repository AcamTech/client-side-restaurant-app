import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RestaurantDetail from 'components/admin-restaurants/restaurant-detail';

function mapStateToProps (state, props) {
  return {
    id: props.restaurantId,
    restaurant: state.restaurants.list[props.restaurantId] || {},
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( { }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
