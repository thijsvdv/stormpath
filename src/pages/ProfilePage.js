import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
 
export default class ProfilePage extends React.Component {
  render() {
    return (
 
      <div className="container">
          <div>
            <div>
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div>
            <div>
              <UserProfileForm />
            </div>
          </div>
        </div>
 
    );
  }
}
