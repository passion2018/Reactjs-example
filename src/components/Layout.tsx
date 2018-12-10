import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      <div className="wrap">
        <Header />
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <div className="col-md-9">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Layout;