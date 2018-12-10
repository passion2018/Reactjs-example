import * as React from 'react';
import 'src/css/Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">Active link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Disabled link</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;