import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import Login from './app/screens/Login';

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
