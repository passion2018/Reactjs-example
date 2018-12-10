import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Login,
  Product,
  User,
} from './modules';

class App extends React.Component {
  public render() {
    return (
      <div className="wrap">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
