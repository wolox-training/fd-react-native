import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store.js';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import LoginFormContainer from './app/screens/Login/index.js';

ReactDOM.render(
  <Provider store={store}>
    <LoginFormContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
