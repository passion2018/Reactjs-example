import * as React from 'react';
import 'src/css/Home.css';
import { Layout } from 'src/components';

class Home extends React.Component {
  public render() {
    return (
      <Layout>
        <div className="content">
          <div className="row">
            <div className="col-md-3" >
              <div className="card">
                <img className="card-img-top" src={require("src/images/img_avatar1.png")} alt="" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top" src={require("src/images/img_avatar3.png")} alt="" />
                <div className="card-body">
                  <h4 className="card-title">Jane Doe</h4>
                  <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top" src={require("src/images/img_avatar5.png")} alt="" />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="card-img-top" src={require("src/images/img_avatar1.png")} alt="" />
                <div className="card-body">
                  <h4 className="card-title">Jane Doe</h4>
                  <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                  <a href="#" className="btn btn-primary">See Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Home; 