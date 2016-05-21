import React, { PropTypes } from 'react';

export default function ChangePassword ({
  fields: {email, oldPassword, newPassword},
  invalid,
  handleSubmit,
  submitting,
  changePasswordAction
}) {
  return (
    <form onSubmit={handleSubmit((data) => changePasswordAction(data))}>
      <div className="panel__body">
        <div className={`form-group has-feedback has-feedback--reverse ${email.touched && email.error && 'has-error'}`}>
          <input className="form-control form-control-material" placeholder="email" type="email" {...email} />
          <span className="form-control-feedback icon-user icon-lg"></span>
        </div>
        <div className={`form-group has-feedback has-feedback--reverse ${oldPassword.touched && email.error && 'has-error'}`}>
          <input className="form-control form-control-material" placeholder="Contraseña antigua" type="password" {...oldPassword} />
          <span className="form-control-feedback icon-key icon-lg"></span>
        </div>
        <div className={`form-group has-feedback has-feedback--reverse ${newPassword.touched && email.error && 'has-error'}`}>
          <input className="form-control form-control-material" placeholder="Nueva contraseña" type="password" {...newPassword} />
          <span className="form-control-feedback icon-key icon-lg"></span>
        </div>
        <br />
      </div>
      <button className="button button--secondary button--block button--large" disabled={submitting || invalid} type="submit">Cambiar contraseña</button>
    </form>
  );
}

ChangePassword.propTypes = {
  changePasswordAction: PropTypes.func.isRequired,
    fields: PropTypes.shape({
    email: PropTypes.object,
    oldPassword: PropTypes.object,
    newPassword: PropTypes.object
  }),
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  isEditting: PropTypes.bool,
  submitting: PropTypes.bool
};
