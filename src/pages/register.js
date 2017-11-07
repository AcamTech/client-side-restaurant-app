import React, { createClass } from 'react';

function RegisterPage() {
  return (
    <div className="panel panel--medium panel--full-space">
      <header className="mobile-header grid grid--middle grid--full mobile-header--push">
        <div className="grid__item one-sixth">
          <a className="mobile-header__link" href="mobile-login.html">
            Volver
          </a>
        </div>
        <div className="grid__item four-sixths">
          <h1 className="epsilon text-center flush">Registro</h1>
        </div>
        <div className="grid__item one-sixth" />
      </header>
      <div className="inner-container">
        <form>
          <div className="form-group has-feedback has-feedback--reverse">
            <input
              className="form-control form-control-material"
              placeholder="Nombre completo"
              type="mail"
            />
            <span className="form-control-feedback icon-users icon-lg" />
            {/*<div className="help-block text--smaller color-danger"><span className="icon-warning"></span> E-mail inválido</div>*/}
          </div>
          <div className="form-group has-feedback has-feedback--reverse">
            <input
              className="form-control form-control-material"
              placeholder="Correo electronico"
              type="mail"
            />
            <span className="form-control-feedback icon-mail icon-lg" />
            {/*<div className="help-block text--smaller color-danger"><span className="icon-warning"></span> E-mail inválido</div>*/}
          </div>
          <div className="form-group has-feedback has-feedback--reverse">
            <input
              className="form-control form-control-material"
              placeholder="Contaseña"
              type="password"
            />
            <span className="form-control-feedback icon-key icon-lg" />
          </div>
          <div className="form-group has-feedback has-feedback--reverse push--bottom">
            <input
              className="form-control form-control-material"
              placeholder="Confirmar contraseña"
              type="password"
            />
            <span className="form-control-feedback icon-key icon-lg" />
          </div>
          <div className="push-double--bottom">
            <input className="custom-input" id="private" type="checkbox" />
            <label className="custom-input__label" htmlFor="private" />
            <label className="color-brand text--smaller" htmlFor="private">
              Leí y acepto los terminos y condiciones del sitio.
            </label>
          </div>
          <button
            className="button button--primary button--block button--large push--bottom"
            type="submit"
          >
            Ingresar
          </button>
        </form>
        <p className="text-center">
          <a className="underline" href="mobile-login.html">
            Ya posee una cuenta?
          </a>
        </p>
        <br />
      </div>
    </div>
  );
}

RegisterPage.displayName = 'Register-page';

export default RegisterPage;
