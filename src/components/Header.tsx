import * as React from 'react';
import { Link } from 'react-router-dom';
import 'src/css/Header.css';
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <a className="navbar-brand" href="#"><img src={require("src/images/logo.png")} alt="" /></a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {/* <span className="mr-auto">Home</span> */}
            <ul className="nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">User</Link>
              </li>
            </ul>
            <nav className="nav justify-content-end">
              <a className="nav-link" href="#"><i className="icon ion-md-settings"></i></a>
              <a className="nav-link" href="#"><i className="icon ion-md-notifications-outline"></i></a>
              <a className="nav-link" href="#"><i className="icon ion-md-apps"></i></a>
              <a className="nav-link" href="#"><i className="icon ion-md-person"></i></a>
            </nav>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;