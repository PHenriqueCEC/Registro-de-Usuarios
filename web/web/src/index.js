import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap

/* import Home from './views/Home';
import Registration from './views/Registration'; */

import Routes from './routes';


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
