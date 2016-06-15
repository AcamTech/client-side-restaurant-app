import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';

import RestaurantLayout from 'pages/restaurant-layout';
import Restaurant from 'pages/restaurant';
import Menu from 'pages/menu';
import Tables from 'pages/tables';
import Staff from 'pages/staff';
import Reports from 'pages/reports';

import SuperLayout from 'pages/super-layout';
import RegisterPage from 'pages/register';
import AdminRestaurantList from 'pages/admin-restaurant-list';
import AdminRestaurantNew from 'pages/admin-restaurant-new';
import AdminRestaurantShow from 'pages/admin-restaurant-show';

import KitchenLayout from 'pages/kitchen-layout';
import KitchenPage from 'pages/kitchen';

import WaiterLayout from 'pages/waiter/waiter-layout';
import WaiterOrders from 'pages/waiter/orders';
import WaiterNewOrder from 'pages/waiter/new-order';

import AuthLayout from 'pages/auth-layout';
import LoginPage from 'pages/login';
import LogoutPage from 'pages/logout';
import changePasswordPage from 'pages/change-password';
import ResetPasswordPage from 'pages/reset-password';

export default function getRoutes(history, checkIfAuthed){
  return (
    <Router history={history}>
      <Route component={AuthLayout}>
        <Redirect from="/login" to="/" />
        <Route component={LoginPage} path="/" onEnter={checkIfAuthed} />
        <Route component={LogoutPage} path="/logout" />
        <Route component={ResetPasswordPage} path="/reset_password" />
        <Route component={changePasswordPage} path="/change_password" />
      </Route>
      <Redirect from="restaurante/:id" to="/" />
      <Route path="restaurante/:id/admin" component={RestaurantLayout} onEnter={checkIfAuthed}>
        <IndexRoute component={Restaurant} />
        <Route path="menu" component={Menu} />
        <Route path="mesas" component={Tables} />
        <Route path="personal" component={Staff} />
        <Route path="reportes" component={Reports}></Route>
      </Route>
      <Route path="restaurante/:id/cocina" component={KitchenLayout} onEnter={checkIfAuthed}>
        <IndexRoute component={KitchenPage} />
      </Route>
      <Route path="restaurante/:id/ordenes" component={WaiterLayout} onEnter={checkIfAuthed}>
        <IndexRedirect to="lista" />
        <Route path="lista" component={WaiterOrders} />
        <Route path="nueva-orden" component={WaiterNewOrder} />
        <Route path="editar-orden" component={WaiterNewOrder} />
      </Route>
      <Route path="super" component={SuperLayout} onEnter={checkIfAuthed}>
        <IndexRoute component={AdminRestaurantList} />
        <Route path="restaurante/:id" component={AdminRestaurantShow} />
      </Route>
    </Router>
  );
}
