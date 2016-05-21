import React, {createClass} from 'react';
import { ResetPassword } from 'containers/reset-password';

const ResetPasswordPage = createClass({
  render(){
    return(
      <div className="panel panel--medium panel--full-space">
        <ResetPassword />
      </div>
    );
  }
});

ResetPasswordPage.displayName = 'Reset-password-page';

export default ResetPasswordPage;
