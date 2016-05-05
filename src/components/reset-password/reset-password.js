import React, { PropTypes } from 'react';

export default function ResetPassword ({changePasswordAction}) {
  var oldPasswordField,
    newPasswordField,
    emailField;
  function onResetPasswordHandle(e){
    var email = emailField.value,
      oldPassword = oldPasswordField.value,
      newPassword = newPasswordField.value;
    if(email && oldPassword && newPassword){
      changePasswordAction({email, oldPassword, newPassword});
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={onResetPasswordHandle}>
      <div className="panel__body">
        <div className="form-group has-feedback has-feedback--reverse push--bottom">
          <input ref={e => emailField = e} className="form-control form-control-material" placeholder="email" type="email" />
          <span className="form-control-feedback icon-user icon-lg"></span>
        </div>
        <div className="form-group has-feedback has-feedback--reverse push--bottom">
          <input ref={e => oldPasswordField = e} className="form-control form-control-material" placeholder="Contraseña antigua" type="password" />
          <span className="form-control-feedback icon-key icon-lg"></span>
        </div>
        <div className="form-group has-feedback has-feedback--reverse push--bottom">
          <input ref={e => newPasswordField = e} className="form-control form-control-material" placeholder="Nueva contraseña" type="password" />
          <span className="form-control-feedback icon-key icon-lg"></span>
        </div>
        <br />
      </div>
      <button className="button button--secondary button--block button--large" type="submit">Cambiar contraseña</button>
    </form>
  );
}

ResetPassword.propTypes = {
  changePasswordAction: PropTypes.func.isRequired
};
