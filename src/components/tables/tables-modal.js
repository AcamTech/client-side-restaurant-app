import React, {createClass, PropTypes} from 'react';
import Modal from 'components/modal/';
const {func, shape, object, bool, string, number} = PropTypes;

export default createClass({
  displayName: 'tables-modal',
  propTypes: {
    openTablesModal: func.isRequired,
    closeTablesModal: func.isRequired,
    addOrEditTable: func.isRequired,
    resetForm: func.isRequired,
    handleSubmit: func.isRequired,
    destroyForm: func.isRequired,
    fields: shape({
      number: number
    }).isRequired,
    restaurantId: string.isRequired,
    invalid: bool,
    isOpen: bool,
    isEditting: bool,
    submitting: bool
  },
  clearFormAndCloseModal(){
    var {closeTablesModal, resetForm} = this.props;
    closeTablesModal();
    this.props.destroyForm();
  },
  render(){
    var {
      fields: {number, id},
      invalid,
      handleSubmit,
      submitting,
      openTablesModal,
      restaurantId,
      closeTablesModal,
      isEditting,
      isOpen,
      addOrEditTable
    } = this.props;
    var modalTitle = isEditting ? 'Editar Mesa' : 'Nueva Mesa';
    return(
      <span>
      <button onClick={openTablesModal} className="button">
        {'Crear Mesa'}
      </button>
        <Modal
          open={isOpen}
          onClose={this.clearFormAndCloseModal}
          className="panel--medium">
          <article id="new-table" className="panel panel--full-space panel--medium mfp-with-anim" style={{clear: 'both'}}>
            <form onSubmit={handleSubmit((data) => addOrEditTable(data, restaurantId))}>
              <input type="hidden" {...id}/>
              <div className="panel__body">
                <h1 className="popup__title delta">{modalTitle}</h1>
                  <div className={`form-group has-feedback has-feedback--reverse ${number.touched && number.error && 'has-error'}`}>
                    <input name="number" className="form-control form-control-material" placeholder="Número de la mesa" type="text" {...number} />
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
