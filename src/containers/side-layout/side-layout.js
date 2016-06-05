import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRestaurant } from 'actions/restaurants';
import { SideLayout } from 'components/side-layout';

function mapStateToProps (state, props) {
  return {
    restaurant: state.entities.restaurants[props.restaurantId] || {},
    user: state.entities.staff[state.staff.authedId] || {}
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {getRestaurant} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideLayout);
