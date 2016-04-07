import React, {createClass, PropTypes} from 'react';
import Dishes from '../components/dishes';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import FilterHeader from '../components/filter-header';
import Ingredients from '../components/ingredients';


const DishesList = createClass({
  displayName: 'Dishes-list',
  render(){
    return(
      <div>
        <Tabs>
          <TabList>
            <Tab>Platos</Tab>
            <Tab>Ingredientes</Tab>
            <Tab>Categorias</Tab>
          </TabList>
          <TabPanel>
            <Dishes />
          </TabPanel>
          <TabPanel>
            <Ingredients />
          </TabPanel>
          <TabPanel>
            <FilterHeader title="Categorias" />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
});

export default DishesList;