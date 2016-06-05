import React, {createClass, PropTypes} from 'react';
import SideNavigation from './side-navigation';
import BodyClassName from 'react-body-classname';
import {HeaderContainer} from 'containers/restaurant-header';

const Layout = createClass({
  displayName: 'Side-layout',
  propTypes: {
    restaurantId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isComplex: PropTypes.bool,
    restaurant: PropTypes.object,
    user: PropTypes.object,
    sidebarItems: PropTypes.array
  },
  getDefaultProps(){
    return {
      isComplex: true,
      sidebarItems: []
    };
  },
  render () {
    var {children, isComplex, restaurant, user, restaurantId} = this.props;
    return (
      <BodyClassName className="complex-layout">
        <div className={"page-wrap"}>
          <HeaderContainer restaurantId={restaurantId} className="complex-layout__header" />
          <SideNavigation items={this.props.sidebarItems} />
          <section className="main-area">
            {children}
          </section>
        </div>
      </BodyClassName>
    );
  }
});

export default Layout;

