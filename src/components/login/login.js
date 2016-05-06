import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export default function Login ({authenticateUser}) {
  var emailField, passwordField;
  function AuthenticateHandle(e){
    var email = emailField.value;
    var password = passwordField.value;
    var user = {
      email,
      password
    };
    authenticateUser(user);
    e.preventDefault();
  }
  return (
    <form onSubmit={AuthenticateHandle}>
      <div className="panel__body">
        <div className="form-group has-feedback has-feedback--reverse">
          <input ref = {e => emailField = e} className="form-control form-control-material" placeholder="E-mail" type="mail" />
          <span className="form-control-feedback icon-mail icon-lg"></span>
        </div>
        <div className="form-group has-feedback has-feedback--reverse push--bottom">
          <input ref={e => passwordField = e} className="form-control form-control-material" placeholder="Contraseña" type="password" />
          <span className="form-control-feedback icon-key icon-lg"></span>
        </div>
        <p className="medium--text-end text-center text--smaller">
          <Link to="/reset_password" className="underline" href="restore-password.html">Olvido su contraseña?</Link>
        </p>
        <br />
      </div>
      <button className="button button--secondary button--block button--large" type="submit">Ingresar</button>
    </form>
  );
}

Login.displayName = 'login';

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired
};
