import React, {createClass} from 'react';
import {ChangePassword} from 'containers/change-password';

const ChangePasswordPage = createClass({
  render(){
    return(
      <div className="soft--ends">
        <h1 className="logo--large text-center gamma">Restaurar contraseña</h1>
        <div className="inner-container">
          <div className="panel panel--medium panel--full-space">
            <ChangePassword />
          </div>
        </div>
      </div>
    );
  }
});

ChangePasswordPage.displayName = 'Change-password-page';

export default ChangePasswordPage;
