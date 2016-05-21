import React, { PropTypes } from 'react';

export default function ResetPassword ({
  fields: {email},
  invalid,
  handleSubmit,
  submitting,
  resetPassword
}) {
  return (
    <form onSubmit={handleSubmit((data) => resetPassword(data))}>
      <div className="panel__body">
        <div className={`form-group has-feedback has-feedback--reverse ${email.touched && email.error && 'has-error'}`}>
          <input className="form-control form-control-material" placeholder="email" type="email" {...email} />
          <span className="form-control-feedback icon-mail icon-lg"></span>
        </div>
      </div>
      <button className="button button--secondary button--block button--large" disabled={submitting || invalid} type="submit">Restaurar contraseña</button>
    </form>
  );
}

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    email: PropTypes.object
  }),
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  isEditting: PropTypes.bool,
  submitting: PropTypes.bool
};
