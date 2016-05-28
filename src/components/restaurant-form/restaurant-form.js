import React, {createClass, PropTypes} from 'react';

export default createClass({
  displayName: 'restaurant-form',
  propTypes: {
    registerRestaurant: PropTypes.func.isRequired,
    updateRestaurantAction: PropTypes.func.isRequired,
    onAfterSubmitHandler: PropTypes.func,
    resetForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.shape({
      name: PropTypes.object,
      address: PropTypes.object,
      phone: PropTypes.object
    }).isRequired,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool
  },
  getDefaultProps(){
    return {
      onAfterSubmitHandler: function(){},
      onCancelClick: function(){}
    };
  },
  onCancelClick(){
    var {resetForm, onCancelClick} = this.props;
    resetForm();
    onCancelClick();
  },
  onSubmitHandler(data){
    if(!data.id){
      return this.props.registerRestaurant(data);
    }else{
      return this.props.updateRestaurantAction(data.id, data);
    }
  },
  render(){
    var {fields: {id, name, address, phone, city, cellPhone}, invalid, handleSubmit, submitting, registerRestaurant, updateRestaurantAction} = this.props;
    return(
      <form onSubmit={handleSubmit((data) => {
        this.onSubmitHandler(data)
          .then(() => this.props.onAfterSubmitHandler());
      })}>
        <div className="panel__body">
          <div className="grid">
            <div className="grid__item">
              <div className={`form-group has-feedback has-feedback--reverse ${name.touched && name.error && 'has-error'}`}>
                <input name="name" className="form-control form-control-material" placeholder="Nombre del restaurante" type="text" {...name} />
                <span className="form-control-feedback icon-user"></span>
              </div>
            </div>
            <div className="grid__item one-half">
              <div className="form-group has-feedback has-feedback--reverse">
                <input name="phone" className="form-control form-control-material" placeholder="Celular" type="tel" {...cellPhone}/>
                <span className="form-control-feedback icon-phone"></span>
              </div>
            </div>
            <div className="grid__item one-half">
              <div className="form-group has-feedback has-feedback--reverse">
                <input name="phone" className="form-control form-control-material" placeholder="Telefono" type="tel" {...phone}/>
                <span className="form-control-feedback icon-phone"></span>
              </div>
            </div>
            <div className="grid__item one-half">
              <div className={`form-group has-feedback has-feedback--reverse ${city.touched && city.error && 'has-error'}`}>
                <input name="city" className="form-control form-control-material" placeholder="Ciudad" type="text" {...city} />
                <span className="form-control-feedback icon-user"></span>
              </div>
            </div>
            <div className="grid__item">
              <div className={`form-group has-feedback has-feedback--reverse ${address.touched && address.error && 'has-error'}`}>
                <input name="address" className="form-control form-control-material" placeholder="Direccion" type="text" {...address} />
                <span className="form-control-feedback icon-user"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid--full">
          <div className="grid__item one-half">
            <button className="button button--block button--secondary" disabled={submitting || invalid} type="submit">{id ? 'Actualizar' : 'Crear'}</button>
          </div>
          <div className="grid__item one-half">
            <button className="button button--block button--danger" disabled={submitting} onClick={this.onCancelClick} type="button">Cancelar</button>
          </div>
        </div>
      </form>
    );
  }
});
