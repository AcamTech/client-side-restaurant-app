import React, {createClass} from 'react';

const RegisterDishModal = createClass({
  displayName: 'Register-dish-Modal',
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
                <div className="select">
                    <select className="form-control">
                        <option disabled selected value="">Categoría</option>
                        <option>Entradas Calientes</option>
                        <option>Entradas Frías</option>
                        <option>Carnes, Aves y Cerdo</option>
                        <option>Pescados y Mariscos</option>
                        <option>Arroces</option>
                        <option>Pastas</option>
                        <option>Ensaladas</option>
                        <option>Para Picar</option>
                        <option>Postres</option>
                    </select>
                </div>
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
