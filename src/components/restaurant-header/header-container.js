import React, {createClass, PropTypes} from 'react';
import Header from './header';

const HeaderContainer = createClass({
  displayName: 'Header-Container',
  propTypes: {
    restaurantId: PropTypes.string.isRequired,
    getRestaurant: PropTypes.func.isRequired
  },
  componentDidMount(){
    this.props.getRestaurant(this.props.restaurantId);
  },
  render () {
    return (
      <Header {...this.props} />
    );
  }
});

export default HeaderContainer;
