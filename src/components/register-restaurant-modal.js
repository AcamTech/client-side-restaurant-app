import React, {createClass, PropTypes} from 'react';

export default createClass({
  displayName: 'register-restaurant-modal',
  propTypes: {
    addRestaurant: PropTypes.func.isRequired
  },
  getInitialState(){
    return {
      name: '',
      address: '',
      phone: ''
    }
  },
  onChange(event) {
    var newState = {}, field = event.target;
    newState[field.name] = field.value;
    this.setState(newState);
  },
  onSubmit(event){
    event.preventDefault();
    if (this.state.name) {
      this.props.addRestaurant(this.state);
      this.refs.addForm.reset();
      this.setState(this.getInitialState());
    }
  },
  render(){
    return(
      <article id="new-restaurant" className="panel panel--full-space panel--medium mfp-with-anim" style={{clear: 'both'}}>
        <form onSubmit={this.onSubmit} ref="addForm">
          <div className="panel__body">
            <h1 className="popup__title delta">Nuevo Restaurante</h1>
              <div className="form-group has-feedback has-feedback--reverse">
                <input name="name" className="form-control form-control-material" placeholder="Nombre del restaurante" type="text" onChange={this.onChange} value={this.state.name} />
                <span className="form-control-feedback icon-user"></span>
              </div>
              <div className="form-group has-feedback has-feedback--reverse">
                <input name="address" className="form-control form-control-material" placeholder="Direccion" type="text" onChange={this.onChange} value={this.state.address} />
                <span className="form-control-feedback icon-user"></span>
              </div>
              <div className="form-group has-feedback has-feedback--reverse">
                <input name="phone" className="form-control form-control-material" placeholder="Telefono" type="tel" onChange={this.onChange} value={this.state.phone} />
                <span className="form-control-feedback icon-phone"></span>
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
