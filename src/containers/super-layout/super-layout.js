import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { SuperLayout } from 'components/super-layout';

function mapStateToProps (state, props) {
  return {

  };
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( {} , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperLayout);