import React, {createClass} from 'react';

const RegisterIngredientModal = createClass({
  displayName: 'Register-ingredient-Modal',
  render(){
    return(
      <article id="new-ingredient" className="panel panel--full-space panel--medium mfp-with-anim" style={{clear: 'both'}}>
        <form action="">
          <div className="panel__body">
            <h1 className="popup__title delta">Nuevo Ingrediente</h1>
              <div className="form-group has-feedback has-feedback--reverse">
                <input className="form-control form-control-material" placeholder="Nombre del ingrediente" type="text" />
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

export default RegisterIngredientModal;
