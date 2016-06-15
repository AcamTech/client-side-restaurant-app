import React, { createClass } from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';

const Reports = createClass({
  render () {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Ordenes</Tab>
            <Tab>Platos</Tab>
            <Tab>Meseros</Tab>
          </TabList>
          <TabPanel>
            <h1>Ordenes</h1>
          </TabPanel>
          <TabPanel>
            <h1>Platos</h1>
          </TabPanel>
          <TabPanel>
            <h1>Meseros</h1>
          </TabPanel>
        </Tabs>
      </div>
    )
  },
})
export default Reports;
