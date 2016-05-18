import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRestaurant } from 'actions/restaurants';
import { WaiterLayout } from 'components/waiter';

function mapStateToProps (state, props) {
  var restaurant = state.entities.restaurants[props.restaurantId] || {}
  return {
    restaurant
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {getRestaurant} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaiterLayout);
