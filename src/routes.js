import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainLayout from './pages/main-layout';
import RestaurantLayout from './pages/restaurant-layout';
import Restaurant from './pages/restaurant';
import DishesList from './pages/dishes-list';
import TablesList from './pages/tables-list';
import Order from './pages/orders-new';
import UsersList from './pages/users-list';
import AdminLayout from './pages/admin-layout';
import AdminRestaurantList from './pages/admin-restaurant-list';
import AdminRestaurantNew from './pages/admin-restaurant-new';
import AdminRestaurantShow from './pages/admin-restaurant-show';


export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={AdminLayout} />
    <Route path="restaurant/:id" component={RestaurantLayout}>
      <IndexRoute component={Restaurant} />
      <Route path="dishes" component={DishesList} />
      <Route path="tables" component={TablesList} />
      <Route path="users" component={UsersList} />
      <Route path="order" component={Order} />
    </Route>
    <Route path="admin" component={AdminLayout}>
      <IndexRoute component={AdminRestaurantList} />
      <Route path="restaurant_new" component={AdminRestaurantNew} />
      <Route path="restaurants/:id" component={AdminRestaurantShow} />
    </Route>
  </Route>
);
