import React, {createClass, PropTypes} from 'react';
import {SideLayout} from 'components/side-layout';
import {Logger} from 'containers/logger';

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
      <SideLayout sidebarItems={buildNavigation(navigation, this.props.params.id)} restaurantId={this.props.params.id}>
        {this.props.children}
        <Logger />
      </SideLayout>
    );
  }
});

export default RestaurantLayoutPage;
