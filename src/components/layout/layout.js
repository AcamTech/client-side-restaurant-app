import React, {createClass, PropTypes} from 'react';
import {SideNavigation} from 'components/side-navigation';
import {LogoArea} from 'components/logo-area';

const Layout = createClass({
  propTypes: {
    getRestaurant: PropTypes.func.isRequired,
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
  componentDidMount(){
    this.props.getRestaurant(this.props.restaurantId);
  },
  render () {
    var {children, isComplex, restaurant, user} = this.props;
    return (
      <div className={"page-wrap"}>
        <header className={`main-header ${isComplex ? 'complex-layout__header' : ''}`}>
          <div className="grid grid--narrow grid--middle">
            <div className="grid__item">
              <LogoArea restaurantName={restaurant.name} userName={user.name} userRole={user.role} />
            </div>
          </div>
        </header>
        <div className="layout-wrap">
          <div className={`side-area ${isComplex ? 'complex-layout__side-area' : '' }`}>
            <SideNavigation items={this.props.sidebarItems} />
          </div>
          <section className="main-area">
            {children}
          </section>
        </div>
      </div>
    );
  }
});

export default Layout;
