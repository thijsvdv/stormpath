import React from 'react';
import { ResetPasswordForm } from 'react-stormpath';
 
export default class ForgotPage extends React.Component {
  render() {
    return (
 
      <div className="container">
          <div>
            <div>
              <h3>Reset your password</h3>
              <hr />
            </div>
          </div>
          <div>
            <div>
              <ResetPasswordForm />
            </div>
          </div>
        </div>
 
    );
  }
}
