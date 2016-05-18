import React from 'react';
import { ChangePasswordForm } from 'react-stormpath';
 
export default class ChangePasswordPage extends React.Component {
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
              <ChangePasswordForm spToken={this.props.location.query.sptoken} />
            </div>
          </div>
        </div>
 
    );
  }
}
