import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {openCreateRestaurantModal} from 'src/actions/create-restaurant-modal';
import CreateRestaurantModalButton from 'src/components/admin-restaurants/create-restaurant-modal-button';

function mapStateToProps (state, props) {
  return {
  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({openCreateRestaurantModal} , dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(CreateRestaurantModalButton);
