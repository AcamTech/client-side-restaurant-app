import React from 'react';

export default function RegisterPersonelModal(){
  return (
    <article className="panel panel--full-space panel--medium" style={{clear: 'both'}}>
      <form action="">
        <div className="panel__body">
          <h1 className="popup__title delta">Nuevo Empleado</h1>
            <div className="form-group has-feedback has-feedback--reverse">
              <input className="form-control form-control-material" placeholder="Nombre empleado" type="text" />
              <span className="form-control-feedback icon-user"></span>
            </div>
            <div className="form-group has-feedback has-feedback--reverse">
              <input className="form-control form-control-material" placeholder="E-mail" type="email" />
              <span className="form-control-feedback icon-mail"></span>
            </div>
            <div className="form-group has-feedback has-feedback--reverse">
              <input className="form-control form-control-material" placeholder="Contraseña" type="pass" />
              <span className="form-control-feedback icon-key"></span>
            </div>
            <div className="form-group has-feedback has-feedback--reverse">
              <div className="select">
                <select className="form-control form-control-material" name="" id="">
                  <option value="">Rol</option>
                  <option value="admin">Administrador</option>
                  <option value="cocina">Cocina</option>
                  <option value="mesero">Mesero</option>
                </select>
              </div>
              <span className="form-control-feedback icon-control"></span>
            </div>
        </div>
        <div>
          <button className="button button--block button--secondary" type="submit">Crear Empleado</button>
        </div>
      </form>
    </article>
  );
}