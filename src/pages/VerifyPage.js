import React from 'react';
import { RegistrationForm } from 'react-stormpath';
import atomatic from 'atomatic';

export default class VerifyPage extends React.Component {
  
  componentWillMount() {
    console.log('YEAAAAAH');
    console.log(this);
  }
  
  render() {
    return (
 
        <div className="container">
          <div>
            <div>
              <h3>Verify</h3>
              <hr />
              
            </div>
          </div>
 
        </div>
 
    );
  }
}