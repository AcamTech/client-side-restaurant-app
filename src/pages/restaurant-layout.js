import PropTypes from 'prop-types';
import React from 'react';
import { SideLayout } from 'components/side-layout';
import { Logger } from 'containers/logger';

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

function buildNavigation(navigation, restaurantId) {
  return navigation.map(item => {
    return Object.assign({}, item, {
      pathname: `/restaurante/${restaurantId}/${item.pathname}`
    });
  });
}

function RestaurantLayoutPage({ params, children }) {
  return (
    <SideLayout
      sidebarItems={buildNavigation(navigation, params.id)}
      restaurantId={params.id}
    >
      {children}
      <Logger />
    </SideLayout>
  );
}

RestaurantLayoutPage.displayName = 'Restuarant-layout';
RestaurantLayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired
};

export default RestaurantLayoutPage;
