import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import { BrowserRouter } from 'react-router-dom'
import { routerRoutes } from 'react-router-config';

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));