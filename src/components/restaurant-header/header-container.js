import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from './header';

class HeaderContainer extends Component {
  static displayName = 'Header-Container';
  static propTypes = {
    restaurantId: PropTypes.string.isRequired,
    getRestaurant: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getRestaurant(this.props.restaurantId);
  }
  render() {
    return <Header {...this.props} />;
  }
}

export default HeaderContainer;
