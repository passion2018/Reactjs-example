import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root') as HTMLElement
);
registerServiceWorker();
