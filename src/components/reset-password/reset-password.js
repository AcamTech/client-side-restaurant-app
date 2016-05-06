import React, { PropTypes } from 'react';

export default function ResetPassword ({resetPassword}) {
  var emailField;
  function onChangePasswordHandle(e){
    var email = emailField.value;
    if(email){
      resetPassword({email});
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={onChangePasswordHandle}>
      <div className="panel__body">
        <div className="form-group has-feedback has-feedback--reverse push--bottom">
          <input ref={e => emailField = e} className="form-control form-control-material" placeholder="email" type="email" />
          <span className="form-control-feedback icon-user icon-lg"></span>
        </div>
        <br />
      </div>
      <button className="button button--secondary button--block button--large" type="submit">Reiniciar contraseña</button>
    </form>
  );
}

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired
};
