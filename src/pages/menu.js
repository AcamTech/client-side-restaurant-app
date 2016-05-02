import React, {createClass, PropTypes} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import {CategoriesList, CategoriesModal} from 'containers/restaurant';
import {IngredientsList, IngredientsModal} from 'containers/restaurant';
import {DishesList, DishesModal} from 'containers/restaurant';

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
            <div className="grid push--bottom">
              <div className="grid__item medium--one-half">
                <h1 className="delta flush weight--light">Platos</h1>
              </div>
              <div className="grid__item medium--one-half text--end">
                <DishesModal restaurantId={this.props.params.id} />
              </div>
            </div>
            <DishesList restaurantId={this.props.params.id} />
          </TabPanel>
          <TabPanel>
            <div className="grid push--bottom">
              <div className="grid__item medium--one-half">
                <h1 className="delta flush weight--light">Ingredientes</h1>
              </div>
              <div className="grid__item medium--one-half text--end">
                <IngredientsModal restaurantId={this.props.params.id} />
              </div>
            </div>
            <IngredientsList restaurantId={this.props.params.id} />
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
