import React, {createClass} from 'react';

const LoginPage = createClass({
  render(){
    return(
      <div className="soft--ends">
        <h1 className="logo--large text-center">ToqueAPP</h1>
        <div className="inner-container">
          <div className="panel panel--medium panel--full-space">
            <form>
              <div className="panel__body">
                <div className="form-group has-feedback has-feedback--reverse">
                  <input className="form-control form-control-material" placeholder="E-mail" type="mail" />
                  <span className="form-control-feedback icon-mail icon-lg"></span>
                </div>
                <div className="form-group has-feedback has-feedback--reverse push--bottom">
                  <input className="form-control form-control-material" placeholder="Contraseña" type="password" />
                  <span className="form-control-feedback icon-key icon-lg"></span>
                </div>
                <p className="medium--text-end text-center text--smaller">
                  <a className="underline" href="restore-password.html">Olvido su contraseña?</a>
                </p>
                <br />
              </div>
              <button className="button button--secondary button--block button--large" type="submit">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default LoginPage;