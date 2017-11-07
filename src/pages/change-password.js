import React from 'react';
import { ChangePassword } from 'containers/change-password';

function ChangePasswordPage() {
  return (
    <div className="panel panel--medium panel--full-space">
      <ChangePassword />
    </div>
  );
}

ChangePasswordPage.displayName = 'Change-password-page';

export default ChangePasswordPage;
