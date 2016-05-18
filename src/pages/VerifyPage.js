import React from 'react';
import { RegistrationForm, VerifyEmailView } from 'react-stormpath';

export default class VerifyPage extends React.Component {
  
  render() {
    return (
 
        <div className="container">
          <div>
            <div>
              <h3>Verify</h3>
              <hr />
              <VerifyEmailView spToken={this.props.location.query.sptoken} />
            </div>
          </div>
 
        </div>
 
    );
  }
}