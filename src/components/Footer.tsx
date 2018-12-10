import * as React from 'react';
import 'src/css/Footer.css';
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-t">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <h4>RESOURCES</h4>
                <div className="row">
                  <div className="col-md-6">
                    <a href="#">Posts</a>
                    <a href="#">Videos</a>
                    <a href="#">Authors</a>
                    <a href="#">Tools</a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">Questions</a>
                    <a href="#">Tags</a>
                    <a href="#">Discussions</a>
                    <a href="#">Machine Learning</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h4>LINKS</h4>
                <a href="#">Facebook</a>
                <a href="#">GitHub</a>
                <a href="#">Browser extension</a>
                <a href="#">Atom plugin</a>
              </div>
            </div>
          </div>
        </div>
        <p className="f-copy">© 2018 Devblock. All rights reserved.</p>
      </div>

    );
  }
}
export default Footer;