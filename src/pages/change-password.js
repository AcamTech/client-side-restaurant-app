import React, {createClass} from 'react';
import {ChangePassword} from 'containers/change-password';

const ChangePasswordPage = createClass({
  render(){
    return(
      <div className="panel panel--medium panel--full-space">
        <ChangePassword />
      </div>
    );
  }
});

ChangePasswordPage.displayName = 'Change-password-page';

export default ChangePasswordPage;
