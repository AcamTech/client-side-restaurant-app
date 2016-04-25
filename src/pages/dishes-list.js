import React, {createClass, PropTypes} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import FilterHeader from 'components/filter-header';
import Dishes from 'components/dishes';
import Ingredients from 'components/ingredients';
import Categories from 'components/categories';


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
            <Categories />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
});

export default DishesList;
