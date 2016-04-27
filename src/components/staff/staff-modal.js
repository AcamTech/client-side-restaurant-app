import React, {createClass, PropTypes} from 'react';
import Modal from 'components/modal';
const {func, shape, object, bool, string} = PropTypes;

export default createClass({
  displayName: 'staff-modal',
  propTypes: {
    openStaffModal: func.isRequired,
    closeStaffModal: func.isRequired,
    addStaffMember: func.isRequired,
    resetForm: func.isRequired,
    handleSubmit: func.isRequired,
    fields: shape({
      name: object,
      email: object
      //TODO: Add role field and role field validations
    }).isRequired,
    restaurantId: string.isRequired,
    invalid: bool,
    isOpen: bool,
    submitting: bool
  },
  clearFormAndCloseModal(){
    var {closeStaffModal, resetForm} = this.props;
    resetForm();
    closeStaffModal();
  },
  render(){
    var {fields: {name, email, role}, invalid, handleSubmit, submitting, openStaffModal, restaurantId, closeStaffModal, isOpen, addStaffMember} = this.props;
    return(
      <button onClick={openStaffModal} className="button">
        {'Crear Empleado'}
        <Modal
          open={isOpen}
          onClose={closeStaffModal}
          className="panel--medium">
          <article id="new-restaurant" className="panel panel--full-space panel--medium mfp-with-anim" style={{clear: 'both'}}>
            <form onSubmit={handleSubmit((data) => addStaffMember(data, restaurantId))}>
              <div className="panel__body">
                <h1 className="popup__title delta">Nuevo Empleado</h1>
                  <div className={`form-group has-feedback has-feedback--reverse ${name.touched && name.error && 'has-error'}`}>
                    <input name="name" className="form-control form-control-material" placeholder="Nombre del empleado" type="text" {...name} />
                    <span className="form-control-feedback icon-user"></span>
                  </div>
                  <div className={`form-group has-feedback has-feedback--reverse ${email.touched && email.error && 'has-error'}`}>
                    <input name="email" className="form-control form-control-material" placeholder="Email" type="email" {...email} />
                    <span className="form-control-feedback icon-user"></span>
                  </div>
              </div>
              <div className="grid grid--full">
                <div className="grid__item one-half">
                  <button className="button button--block button--secondary" disabled={submitting || invalid} type="submit">Crear</button>
                </div>
                <div className="grid__item one-half">
                  <button className="button button--block button--danger" disabled={submitting} onClick={this.clearFormAndCloseModal} type="button">Cancelar</button>
                </div>
              </div>
            </form>
          </article>
        </Modal>
      </button>
    );
  }
});
