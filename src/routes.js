import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';

import MainLayout from 'pages/main-layout';

import RestaurantLayout from 'pages/restaurant-layout';
import Restaurant from 'pages/restaurant';
import Menu from 'pages/menu';
import Tables from 'pages/tables';
import Orders from 'pages/orders';
import Staff from 'pages/staff';

import AdminLayout from 'pages/admin-layout';
import RegisterPage from 'pages/register';
import AdminRestaurantList from 'pages/admin-restaurant-list';
import AdminRestaurantNew from 'pages/admin-restaurant-new';
import AdminRestaurantShow from 'pages/admin-restaurant-show';

import KitchenLayout from 'pages/kitchen-layout';
import KitchenPage from 'pages/kitchen';

import WaiterLayout from 'pages/waiter-layout';
import WaiterOrders from 'pages/waiter/orders';
import WaiterNewOrder from 'pages/waiter/new-order';

import LoginPage from 'pages/login';
import ResetPasswordPage from 'pages/reset-password';

export default function getRoutes(history, checkIfAuthed){
  return (
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <IndexRedirect to="/login" />
        <Redirect from="restaurante/:id" to="/" />
        <Route path="restaurante/:id/admin" component={RestaurantLayout} onEnter={checkIfAuthed}>
          <IndexRoute component={Restaurant} />
          <Route path="menu" component={Menu} />
          <Route path="mesas" component={Tables} />
          <Route path="personal" component={Staff} />
          <Route path="reportes" component={Orders} />
        </Route>
        <Route path="restaurante/:id/cocina" component={KitchenLayout} onEnter={checkIfAuthed}>
          <IndexRoute component={KitchenPage} />
        </Route>
        <Route path="restaurante/:id/ordenes" component={WaiterLayout} onEnter={checkIfAuthed}>
          <IndexRedirect to="lista" />
          <Route path="lista" component={WaiterOrders} />
        </Route>
        <Route path="super" component={AdminLayout} onEnter={checkIfAuthed}>
          <IndexRoute component={AdminRestaurantList} />
          <Route path="restaurante/:id" component={AdminRestaurantShow} />
        </Route>
        <Route component={LoginPage} path="/login" onEnter={checkIfAuthed} />
        <Route component={ResetPasswordPage} path="/reset_password" />
      </Route>
    </Router>
  );
}
