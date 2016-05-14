import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRestaurant } from 'actions/restaurants';
import { RestaurantLayout } from 'components/restaurant-layout';

function mapStateToProps (state, props) {
  return {
    restaurant: state.entities.restaurants[props.restaurantId] || {}
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {getRestaurant} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantLayout);
