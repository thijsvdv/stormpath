import React from 'react';
import DocumentTitle from 'react-document-title';
import { RegistrationForm } from 'react-stormpath';
 
export default class RegistrationPage extends React.Component {
  render() {
    return (
 
        <div className="container">
          <div>
            <div>
              <h3>Registration</h3>
              <hr />
              <RegistrationForm />
            </div>
          </div>
 
        </div>
 
    );
  }
}