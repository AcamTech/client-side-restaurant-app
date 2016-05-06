import React, {createClass} from 'react';
import {ResetPassword} from 'containers/reset-password';

const ResetPasswordPage = createClass({
  render(){
    return(
      <div className="soft--ends">
        <h1 className="logo--large text-center">ToqueAPP</h1>
        <div className="inner-container">
          <div className="panel panel--medium panel--full-space">
            <ResetPassword />
          </div>
        </div>
      </div>
    );
  }
});

ResetPasswordPage.displayName = 'Reset-password-page';

export default ResetPasswordPage;
