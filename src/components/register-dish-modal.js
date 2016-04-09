import React, {createClass} from 'react';
import Select from 'react-select';

const CATEGORIES = [
  { value: 'entradas-calientes', label: 'Entradas Calientes' },
  { value: 'entradas-frias', label: 'Entradas Frías' },
  { value: 'carnes', label: 'Carnes, Aves y Cerdo' },
  { value: 'mar', label: 'Pescados y Mariscos' },
  { value: 'arroces', label: 'Arroces' },
  { value: 'pastas', label: 'Pastas' },
  { value: 'ensaladas', label: 'Ensaladas' },
  { value: 'picadas', label: 'Para Picar' },
  { value: 'postres', label: 'Postres' }
];

const INGREDIENTS = [
  { value: 'sal', label: 'Sal' },
  { value: 'res', label: 'Res' },
  { value: 'pollo', label: 'Pollo' },
  { value: 'cerdo', label: 'Cerdo' },
  { value: 'mojarra', label: 'Mojarra' },
  { value: 'camaron', label: 'Camarón' }
];

const RegisterDishModal = createClass({
  displayName: 'Register-dish-Modal',
  getInitialState() {
      return {
          selectedCategory: null,
          selectedIngredient: null,
          ingredients: INGREDIENTS,
          categories: CATEGORIES
      };
  },
  updateCategory(newValue) {
    this.setState({
      selectedCategory: newValue
    });
  },
  updateIngredient(newValue) {
    this.setState({
      selectedIngredient: newValue
    });
  },
  render(){
    return(
      <article id="new-dish" className="panel panel--full-space panel--medium mfp-with-anim" style={{clear: 'both'}}>
        <form action="">
          <div className="panel__body">
            <h1 className="popup__title delta">Nuevo Plato</h1>
              <div className="form-group">
                <input className="form-control form-control-material" placeholder="Nombre del plato" type="text" />
              </div>
              <div className="form-group">
                <input className="form-control form-control-material" step="100" placeholder="Precio unitario" type="number" />
              </div>
              <div className="form-group">
                <Select options={this.state.categories} placeholder="Categoría" value={this.state.selectedCategory} onChange={this.updateCategory} />
              </div>
              <div className="form-group">
                <Select multi options={this.state.ingredients} placeholder="Ingredientes" value={this.state.selectedIngredient} onChange={this.updateIngredient} />
              </div>
          </div>
          <div className="grid grid--full">
            <div className="grid__item one-half">
              <button className="button button--block button--secondary" type="submit">Crear</button>
            </div>
            <div className="grid__item one-half">
              <div className="button button--block button--danger">Cancelar</div>
            </div>
          </div>
        </form>
      </article>
    );
  }
});

export default RegisterDishModal;
