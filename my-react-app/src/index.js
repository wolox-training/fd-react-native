import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store.js';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import GameContainer from './app/screens/Game/index.js';

ReactDOM.render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
