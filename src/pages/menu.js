import PropTypes from 'prop-types';
import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import {
  CategoriesList,
  CategoriesModal,
  IngredientsList,
  IngredientsModal,
  DishesList,
  DishesModal
} from 'containers/restaurant';

function Menu({ params }) {
  return (
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
              <DishesModal restaurantId={params.id} />
            </div>
          </div>
          <DishesList restaurantId={params.id} />
        </TabPanel>
        <TabPanel>
          <div className="grid push--bottom">
            <div className="grid__item medium--one-half">
              <h1 className="delta flush weight--light">Ingredientes</h1>
            </div>
            <div className="grid__item medium--one-half text--end">
              <IngredientsModal restaurantId={params.id} />
            </div>
          </div>
          <IngredientsList restaurantId={params.id} />
        </TabPanel>
        <TabPanel>
          <div className="grid push--bottom">
            <div className="grid__item medium--one-half">
              <h1 className="delta flush weight--light">Categorías</h1>
            </div>
            <div className="grid__item medium--one-half text--end">
              <CategoriesModal restaurantId={params.id} />
            </div>
          </div>
          <CategoriesList restaurantId={params.id} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

Menu.displayName = 'Menu';
Menu.propTypes = {
  params: PropTypes.object.isRequired
};

export default Menu;
