import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SideNavigation from './side-navigation';
import BodyClassName from 'react-body-classname';
import { HeaderContainer } from 'containers/restaurant-header';

class Layout extends Component {
  displayName = 'Side-layout';
  propTypes = {
    restaurantId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isComplex: PropTypes.bool,
    restaurant: PropTypes.object,
    user: PropTypes.object,
    sidebarItems: PropTypes.array
  };
  static defaultProps = {
    isComplex: true,
    sidebarItems: []
  };
  render() {
    var { children, isComplex, restaurant, user, restaurantId } = this.props;
    return (
      <BodyClassName className="complex-layout">
        <div className={'page-wrap'}>
          <HeaderContainer
            restaurantId={restaurantId}
            className="complex-layout__header"
          />
          <SideNavigation items={this.props.sidebarItems} />
          <section className="main-area">{children}</section>
        </div>
      </BodyClassName>
    );
  }
}

export default Layout;
