import React from 'react';
import DocumentTitle from 'react-document-title';

export default class DashboardPage extends React.Component {
  render() {
    return (

        <DocumentTitle title='Dashboard'>
          <div className="container">
            <div>
              <div>
                <h3>Dashboard</h3>
                <hr />
                <p>You are logged in</p>
                <p>
                  Hello {this.context.user.givenName}!
                </p>
              </div>
            </div>
  
          </div>
        </DocumentTitle>
 
    );
  }
}

DashboardPage.contextTypes = {
  user: React.PropTypes.object
}