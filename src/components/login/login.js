import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export default function Login ({
  fields: {email, password},
  invalid,
  handleSubmit,
  submitting,
  authenticateUser
}) {
  return (
    <form onSubmit={handleSubmit((data) => authenticateUser(data))}>
      <div className="panel__body">
        <div className={`form-group has-feedback has-feedback--reverse ${email.touched && email.error && 'has-error'}`}>
          <input className="form-control form-control-material" placeholder="E-mail" type="mail" {...email} />
          <span className="form-control-feedback icon-mail icon-lg"></span>
        </div>
        <div className={`form-group has-feedback has-feedback--reverse push--bottom ${password.touched && password.error && 'has-error'}`}>
          <input className="form-control form-control-material" placeholder="Contraseña" type="password" {...password} />
          <span className="form-control-feedback icon-key icon-lg"></span>
        </div>
        <div className="grid">
          <div className="grid__item medium--one-half">
            <p className="medium--text-start text-center text--smaller">
              <Link to="/reset_password" className="underline">Olvido su contraseña?</Link>
            </p>
          </div>
          <div className="grid__item medium--one-half">
            <p className="medium--text-end text-center text--smaller">
              <Link to="/change_password" className="underline">Cambiar contraseña?</Link>
            </p>
          </div>
        </div>
      </div>
      <button className="button button--secondary button--block button--large" disabled={submitting || invalid} type="submit">Ingresar</button>
    </form>
  );
}

Login.displayName = 'login';

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object
  }),
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  isEditting: PropTypes.bool,
  submitting: PropTypes.bool
};
