import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchRestaurant } from 'actions/restaurant';
import { RestaurantLayout } from 'components/restaurant-layout';

function mapStateToProps (state, props) {
  return {
    restaurant: state.restaurants.list[props.restaurantId] || {}
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {fetchRestaurant} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantLayout);
