import React, {createClass, PropTypes} from 'react';
import {Layout} from 'containers/layout';
import BodyClassName from 'react-body-classname';

var navigation = [
  {
    pathname: 'admin/personal',
    text: 'Personal',
    icon: 'icon-users'
  },
  {
    pathname: 'admin/mesas',
    text: 'Mesas',
    icon: 'icon-checkmark'
  },
  {
    pathname: 'admin/menu',
    text: 'Menu',
    icon: 'icon-control'
  },
  {
    pathname: 'admin/reportes',
    text: 'Reportes',
    icon: 'icon-note'
  }
];

function buildNavigation(navigation, restaurantId){
  return navigation.map(item => {
    return Object.assign({}, item, {pathname: `/restaurante/${restaurantId}/${item.pathname}`});
  });
}

const RestaurantLayoutPage = createClass({
  displayName: 'Restuarant-layout',
  propTypes: {
    children: PropTypes.node.isRequired,
    params: PropTypes.object.isRequired
  },
  render(){
    return(
      <BodyClassName className="complex-layout">
        <Layout sidebarItems={buildNavigation(navigation, this.props.params.id)} restaurantId={this.props.params.id}>
          {this.props.children}
        </Layout>
      </BodyClassName>
    );
  }
});

export default RestaurantLayoutPage;
