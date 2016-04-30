import React, {createClass, PropTypes} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import FilterHeader from 'components/filter-header';
import Dishes from 'components/dishes';
import Ingredients from 'components/ingredients';
import {CategoriesList, CategoriesModal} from 'containers/categories';

const Menu = createClass({
  displayName: 'Menu',
  propTypes: {
    params: PropTypes.object.isRequired
  },
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
            <div className="grid push--bottom">
              <div className="grid__item medium--one-half">
                <h1 className="delta flush weight--light">Categorías</h1>
              </div>
              <div className="grid__item medium--one-half text--end">
                <CategoriesModal restaurantId={this.props.params.id} />
              </div>
            </div>
            <CategoriesList restaurantId={this.props.params.id} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
});

export default Menu;
