import React from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import Orders from './orders';
import Sells from './sells';
import Dishes from './dishes';
import TotalDishes from './total-dishes';
import Waiters from './waiters';

export default function Reports({orders, staff, restaurantId, fetchStaff}){
  return (
    <Tabs>
      <TabList>
        <Tab>Ordenes</Tab>
        <Tab>Total ordenes por día</Tab>
        <Tab>Platos por día</Tab>
        <Tab>Total Platos</Tab>
        <Tab>Meseros</Tab>
      </TabList>
      <TabPanel>
        <h1>Ordenes</h1>
        <Orders orders={orders} />
      </TabPanel>
      <TabPanel>
        <h1>Total ordenes por día</h1>
        <Sells orders={orders} />
      </TabPanel>
      <TabPanel>
        <h1>Platos por día</h1>
        <Dishes orders={orders} />
      </TabPanel>
      <TabPanel>
        <h1>Total Platos</h1>
        <TotalDishes orders={orders} />
      </TabPanel>
      <TabPanel>
        <h1>Meseros</h1>
        <Waiters restaurantId={restaurantId} orders={orders} staff={staff} fetchStaff={fetchStaff} />
      </TabPanel>
    </Tabs>
  );
}
