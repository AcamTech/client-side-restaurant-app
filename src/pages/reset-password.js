import React, {createClass} from 'react';
import {ResetPassword} from 'containers/reset-password';

const ResetPasswordPage = createClass({
  render(){
    return(
      <div className="soft--ends">
        <h1 className="logo--large text-center gamma">Restaurar contraseña</h1>
        <div className="inner-container">
          <div className="panel panel--medium panel--full-space">
            <ResetPassword />
          </div>
        </div>
      </div>
    );
  }
});

export default ResetPasswordPage;
