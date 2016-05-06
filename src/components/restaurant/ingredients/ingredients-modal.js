import React, {createClass, PropTypes} from 'react';
import Modal from 'components/modal/';
const {func, shape, object, bool, string, number} = PropTypes;

export default createClass({
  displayName: 'ingredients-modal',
  propTypes: {
    openIngredientsModal: func.isRequired,
    closeIngredientsModal: func.isRequired,
    addOrEditIngredient: func.isRequired,
    resetForm: func.isRequired,
    handleSubmit: func.isRequired,
    destroyForm: func.isRequired,
    fields: shape({
      name: object.isRequired
    }).isRequired,
    restaurantId: string.isRequired,
    invalid: bool,
    isOpen: bool,
    isEditting: bool,
    submitting: bool
  },
  clearFormAndCloseModal(){
    var {closeIngredientsModal, resetForm} = this.props;
    closeIngredientsModal();
    this.props.destroyForm();
  },
  render(){
    var {
      fields: {name, id},
      invalid,
      handleSubmit,
      submitting,
      openIngredientsModal,
      restaurantId,
      closeIngredientsModal,
      isEditting,
      isOpen,
      addOrEditIngredient
    } = this.props;
    var modalTitle = isEditting ? 'Editar Ingrediente' : 'Nuevo Ingrediente';
    return(
      <span>
      <button onClick={openIngredientsModal} className="button button--secondary button--small">
        {'Crear Ingrediente'}
      </button>
        <Modal
          open={isOpen}
          onClose={this.clearFormAndCloseModal}
          className="panel--medium">
          <article id="new-table" className="panel panel--full-space panel--medium mfp-with-anim" style={{clear: 'both'}}>
            <form onSubmit={handleSubmit((data) => addOrEditIngredient(data, restaurantId))}>
              <input type="hidden" {...id}/>
              <div className="panel__body">
                <h1 className="popup__title delta">{modalTitle}</h1>
                  <div className={`form-group has-feedback has-feedback--reverse ${name.touched && name.error && 'has-error'}`}>
                    <input name="name" className="form-control form-control-material" placeholder="Nombre del Ingrediente" type="text" {...name} />
                    <span className="form-control-feedback icon-user"></span>
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
