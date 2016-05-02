import React, {createClass, PropTypes} from 'react';
import Modal from 'components/modal/';
const {func, shape, object, bool, string, number} = PropTypes;

export default createClass({
  displayName: 'dishes-modal',
  propTypes: {
    openDishesModal: func.isRequired,
    closeDishesModal: func.isRequired,
    addOrEditDish: func.isRequired,
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
    var {closeDishesModal, resetForm} = this.props;
    closeDishesModal();
    this.props.destroyForm();
  },
  render(){
    var {
      fields: {name, id},
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
    var modalTitle = isEditting ? 'Editar Plato' : 'Nueva Plato';
    return(
      <span>
      <button onClick={openDishesModal} className="button button--secondary button--small">
        {'Crear Plato'}
      </button>
        <Modal
          open={isOpen}
          onClose={this.clearFormAndCloseModal}
          className="panel--medium">
          <article id="new-table" className="panel panel--full-space panel--medium mfp-with-anim" style={{clear: 'both'}}>
            <form onSubmit={handleSubmit((data) => addOrEditDish(data, restaurantId))}>
              <input type="hidden" {...id}/>
              <div className="panel__body">
                <h1 className="popup__title delta">{modalTitle}</h1>
                  <div className={`form-group has-feedback has-feedback--reverse ${name.touched && name.error && 'has-error'}`}>
                    <input name="name" className="form-control form-control-material" placeholder="Nombre del Plato" type="text" {...name} />
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
