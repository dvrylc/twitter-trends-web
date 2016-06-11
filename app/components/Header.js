// External imports
import React from 'react';
import moment from 'moment';

class Header extends React.Component {
  render() {
    return (
      <header>
        <section className="container">
          <div className="row middle-xs">
            <div className="col-xs-12 col-sm-6">
              <h1>Twitter Trends</h1>
            </div>
            
            <div className="col-xs-12 col-sm-6">
              <p className="header-timestamp">
                Live data since {moment().format('D MMM Y, h:mm:ss A')}
              </p>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

// Export
export default Header;
