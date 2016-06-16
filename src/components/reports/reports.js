import React from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import Orders from './orders';
import Sells from './sells';
import Dishes from './dishes';

export default function Reports({orders}){
  return (
    <Tabs>
      <TabList>
        <Tab>Ordenes</Tab>
        <Tab>Ventas por dia</Tab>
        <Tab>Platos</Tab>
        <Tab>Meseros</Tab>
      </TabList>
      <TabPanel>
        <h1>Ordenes</h1>
        <Orders orders={orders} />
      </TabPanel>
      <TabPanel>
        <h1>Ventas por dia</h1>
        <Sells orders={orders} />
      </TabPanel>
      <TabPanel>
        <h1>Platos</h1>
        <Dishes orders={orders} />
      </TabPanel>
      <TabPanel>
        <h1>Meseros</h1>
      </TabPanel>
    </Tabs>
  );
}
