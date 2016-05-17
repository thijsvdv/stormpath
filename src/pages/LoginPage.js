import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';
 
export default class LoginPage extends React.Component {
  render() {
    return (
 
        <div className="container">
          <div>
            <div>
              <h3>Login</h3>
              <hr />
              <LoginForm />
            </div>
          </div>
 
        </div>
 
    );
  }
}