import React, {createClass} from 'react';

const RegisterTableModal = createClass({
  displayName: 'Register-table-Modal',
  render(){
    return(
      <article id="new-table" className="panel panel--full-space panel--medium mfp-with-anim" style={{clear: 'both'}}>
        <form action="">
          <div className="panel__body">
            <h1 className="popup__title delta">Nueva Mesa</h1>
              <div className="form-group has-feedback has-feedback--reverse">
                <input className="form-control form-control-material" placeholder="Número de la mesa" type="number" />
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

export default RegisterTableModal;
