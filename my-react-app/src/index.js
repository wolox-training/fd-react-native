import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store.js';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './config/routes';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
