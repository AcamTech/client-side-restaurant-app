import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRestaurant } from 'actions/restaurant';
import { WaiterLayout } from 'components/waiter';

function mapStateToProps (state, props) {
  return {
    restaurant: state.restaurants.list[props.restaurantId] || {}
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {getRestaurant} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaiterLayout);
