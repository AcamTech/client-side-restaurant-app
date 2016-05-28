import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {closeCreateRestaurantModal, openCreateRestaurantModal} from 'actions/create-restaurant-modal';
import RegisterRestaurantModalComponent from 'components/admin-restaurants/register-restaurant-modal';

function mapStateToProps(state){
  return {
    isOpen: state.createRestaurantModal.isOpen
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    closeCreateRestaurantModal,
    openCreateRestaurantModal
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterRestaurantModalComponent);
