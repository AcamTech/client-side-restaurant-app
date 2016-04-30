import React, {createClass, PropTypes} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import FilterHeader from 'components/filter-header';
import Dishes from 'components/dishes';
import Ingredients from 'components/ingredients';
import {CategoriesList, CategoriesModal} from 'containers/categories';

const Menu = createClass({
  displayName: 'Menu',
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
            <h1 className="delta flush weight--light">Categorías</h1>
            <CategoriesModal restaurantId={this.props.params.id} />
            <CategoriesList restaurantId={this.props.params.id} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
});

export default Menu;
