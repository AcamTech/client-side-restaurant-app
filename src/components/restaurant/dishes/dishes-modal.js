import React, {createClass, PropTypes} from 'react';
import Modal from 'components/modal/';
const {func, shape, object, bool, string, number, array} = PropTypes;
import Select from 'react-select';

export default createClass({
  displayName: 'dishes-modal',
  propTypes: {
    openDishesModal: func.isRequired,
    closeDishesModal: func.isRequired,
    addOrEditDish: func.isRequired,
    fetchCategories: func.isRequired,
    fetchIngredients: func.isRequired,
    resetForm: func.isRequired,
    handleSubmit: func.isRequired,
    destroyForm: func.isRequired,
    fields: shape({
      name: object.isRequired,
      price: object.isRequired,
      description: object.isRequired,
      category: object.isRequired,
      ingredients: object.isRequired
    }).isRequired,
    restaurantId: string.isRequired,
    ingredients: array.isRequired,
    categories: array.isRequired,
    invalid: bool,
    isOpen: bool,
    isEditting: bool,
    submitting: bool
  },
  componentDidMount(){
    this.props.fetchCategories(this.props.restaurantId);
    this.props.fetchIngredients(this.props.restaurantId);
  },
  clearFormAndCloseModal(){
    var {closeDishesModal, resetForm} = this.props;
    closeDishesModal();
    this.props.destroyForm();
  },
  getIngredients(){
    return this.props.ingredients.map((ingredient) => {
      return {
        value: ingredient.id,
        label: ingredient.name
      };
    });
  },
  getCategories(){
    return this.props.categories.map((category) => {
      return {
        value: category.id,
        label: category.name
      };
    });
  },
  render(){
    var {
      fields: {name, price, description, category, ingredients, id},
      invalid,
      handleSubmit,
      submitting,
      openDishesModal,
      restaurantId,
      closeDishesModal,
      isEditting,
      isOpen,
      addOrEditDish
    } = this.props;
    var modalTitle = isEditting ? 'Editar Plato' : 'Nuevo Plato';
    return(
      <span>
      <button onClick={openDishesModal} className="button button--secondary button--small">
        {'Crear Plato'}
      </button>
        <Modal
          isOpen={isOpen}
          onCloseHandler={this.clearFormAndCloseModal}>
          <article id="new-table" className="panel panel--full-space panel--medium" style={{clear: 'both'}}>
            <form onSubmit={handleSubmit((data) => addOrEditDish(data, restaurantId))}>
              <input type="hidden" {...id}/>
              <div className="panel__body">
                <h1 className="popup__title delta">{modalTitle}</h1>
                  <div className={`form-group has-feedback has-feedback--reverse ${name.touched && name.error && 'has-error'}`}>
                    <input name="name" className="form-control form-control-material" placeholder="Nombre del Plato" type="text" {...name} />
                    <span className="form-control-feedback icon-user"></span>
                  </div>
                  <div className={`form-group has-feedback has-feedback--reverse ${price.touched && price.error && 'has-error'}`}>
                    <input name="price" className="form-control form-control-material" placeholder="Precio del Plato" type="number" step="50" {...price} />
                    <span className="form-control-feedback icon-user"></span>
                  </div>
                  <div className={`form-group has-feedback has-feedback--reverse ${description.touched && description.error && 'has-error'}`}>
                    <input name="description" className="form-control form-control-material" placeholder="Breve descripción del Plato" type="text" {...description} />
                    <span className="form-control-feedback icon-user"></span>
                  </div>
                  <div className={`form-group has-feedback has-feedback--reverse ${category.touched && category.error && 'has-error'}`}>
                    <Select
                      name="category"
                      {...category}
                      placeholder="Categoría"
                      onBlur={() => {}}
                      options={this.getCategories()} />
                  </div>
                  <div className={`form-group has-feedback has-feedback--reverse ${ingredients.touched && ingredients.error && 'has-error'}`}>
                    <Select
                      name="ingredients"
                      {...ingredients}
                      placeholder="Ingredientes"
                      onBlur={() => {}}
                      multi
                      options={this.getIngredients()} />
                  </div>
              </div>
              <div className="grid grid--full">
                <div className="grid__item one-half">
                  <button className="button button--block button--secondary" disabled={submitting || invalid} type="submit">Guardar</button>
                </div>
                <div className="grid__item one-half">
                  <button className="button button--block button--danger" disabled={submitting} onClick={this.clearFormAndCloseModal} type="button">Cancelar</button>
                </div>
              </div>
            </form>
          </article>
        </Modal>
        </span>
    );
  }
});
