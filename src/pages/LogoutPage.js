import React from 'react';
import DocumentTitle from 'react-document-title';

export default class LogoutPage extends React.Component {
  render() {
    return (

        <DocumentTitle title='Logged out!'>
          <div className="container">
            <div>
              <div>
                <h3>Logged out!</h3>
                <hr />
                <p>Not much else to do here...</p>
              </div>
            </div>
  
          </div>
        </DocumentTitle>
 
    );
  }
}