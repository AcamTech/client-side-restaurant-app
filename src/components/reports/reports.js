import React from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import Orders from './orders';

export default function Reports({orders}){
  return (
    <Tabs>
      <TabList>
        <Tab>Ordenes</Tab>
        <Tab>Platos</Tab>
        <Tab>Meseros</Tab>
      </TabList>
      <TabPanel>
        <h1>Ordenes</h1>
        <Orders orders={orders} />
      </TabPanel>
      <TabPanel>
        <h1>Platos</h1>
      </TabPanel>
      <TabPanel>
        <h1>Meseros</h1>
      </TabPanel>
    </Tabs>
  );
}